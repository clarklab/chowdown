let en_GB = {
    map: {Y: 'yr', B: 'mth', W: 'wk', D: 'day', H: 'hr', M: 'min', S: 'sec'},
    counted: function(i, c){
      res = this.map[i];
      if(c > 1) { res += 's' }
      return res;
    }
  };

function Duration(el) {
  this.element = document.getElementById(el);
  this.lang = en_GB;
  this.result = { Y: 0, B: 0, W: 0, D: 0, H: 0, M: 0, S: 0 };
  this._rex = /(\d+(?:\.\d+)?)([YBWDHMS])/ig;
  this.parts = function () {
    let iso8601 = this.element.dataset.iso8601;
    let parts = iso8601.substr(1).replace(/M(.*?)T/, 'B$1');
    parts.match(this._rex).forEach((p) => {
      let scale = p.substring(0, p.length - 1);
      let unit = p.substring(p.length - 1).toUpperCase();
      this.result[unit] = Number(scale);
    });
    return this.result;
  };
  this.format = function () {
    const nonZero = (v) => v > 0;
    let words = [];
    let parts = this.parts();
    for (var p in parts) {
      if (parts.hasOwnProperty(p) && nonZero(parts[p])) {
        words.push(`${parts[p]} ${this.lang.counted(p, parts[p])}`);
      }
    }
    return words.join(' ');
  };
  this.update = function () {
    this.element.innerHTML = this.format();
  };
}

/*
  Update the page either via object calls passing in the dom ID:
    new Duration('prepTime').update();
    new Duration('cookTime').update();
  or use jquery to find them:
    $('*[data-iso8601]').each(function (){
      new Duration(this.id).update();
    });
*/
$('*[data-iso8601]').each(function (){
  new Duration(this.id).update();
});

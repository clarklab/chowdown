$('div[data-tagged]').hide();

$('[data-tag-name]').click(function(){
  console.log('clicked');
  let tag_name = $(this).data('tag-name');
  // let tag_type = $(this).data('tag-type');
  // Reset
  $('div[data-tagged]').hide();
  $('[data-tag-name]').removeClass('bg-blue').addClass('bg-gray');

  let $el = $('div[data-tagged="'+tag_name+'"]');
  $(this).addClass('bg-blue').removeClass('bg-gray');
  $el.show();
});

if (window.location.hash.length > 1) {
  let $el = $('[data-tag-name="'+window.location.hash.substring(1)+'"]');
  console.log($el);
  $el.trigger('click');
};

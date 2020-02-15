'use strict';
const scaleFactor = 1;

preprocessIngredients();
scaleRecipe(scaleFactor);

//  --- Functions needed ---

function toNumber(inString){
    let result;
    if (inString.includes('/')){
        let z = inString.split('/');
        result = z[0]/z[1];
    }
    else {
        result = +inString
    }
    return result
}

function quantityToNumber(inString){
    let valueArray = inString.split(/\s/g);
    valueArray = valueArray.map(item => toNumber(item));
    let theTotal = valueArray.reduce((a, b) => a + b);
    return theTotal
}

function numberToPretty(inNum){
    let wholeNumber;
    if (inNum < 1){
        wholeNumber = "";
    }
    else {
        wholeNumber = Math.trunc(inNum).toString();
    }
    let fraction = inNum % 1;
    let fracRep;
    if (Math.abs(fraction) < 0.00001){
        fracRep = ''
    } else if (Math.abs(fraction - 1/2) < 0.00001){
        fracRep = " &frac12;";
    } else if (Math.abs(fraction - 1 / 4) < 0.00001) {
        fracRep = " &frac14;";
    } else if (Math.abs(fraction - 3 / 4) < 0.00001) {
        fracRep = " &frac34;";
    } else if (Math.abs(fraction - 1 / 3) < 0.00001) {
        fracRep = " &frac13;";
    } else if (Math.abs(fraction - 2 / 3) < 0.00001) {
        fracRep = " &frac23;";
    } else if (Math.abs(fraction - 1 / 8) < 0.00001) {
        fracRep = " &frac18;";
    } else if (Math.abs(fraction - 3 / 8) < 0.00001) {
        fracRep = " &frac38;";
    } else if (Math.abs(fraction - 5 / 8) < 0.00001) {
        fracRep = " &frac58;";
    } else if (Math.abs(fraction - 7 / 8) < 0.00001) {
        fracRep = " &frac78;";
    } else if (Math.abs(fraction - 1 / 6) < 0.00001) {
        fracRep = " &frac16;";
    } else if (Math.abs(fraction - 5 / 6) < 0.00001) {
        fracRep = " &frac56;";
    } else if (Math.abs(fraction - 1 / 9) < 0.00001) {
        fracRep = " <sup>1</sup>&frasl;<sub>9</sub>";
    } else if (Math.abs(fraction - 2 / 9) < 0.00001) {
        fracRep = " <sup>2</sup>&frasl;<sub>9</sub>";
    } else if (Math.abs(fraction - 4 / 9) < 0.00001) {
        fracRep = " <sup>4</sup>&frasl;<sub>9</sub>";
    } else if (Math.abs(fraction - 5 / 9) < 0.00001) {
        fracRep = " <sup>5</sup>&frasl;<sub>9</sub>";
    } else if (Math.abs(fraction - 7 / 9) < 0.00001) {
        fracRep = " <sup>7</sup>&frasl;<sub>9</sub>";
    } else if (Math.abs(fraction - 8 / 9) < 0.00001) {
        fracRep = " <sup>8</sup>&frasl;<sub>9</sub>";
    } else {
        fracRep = toString(fraction);
    }
    // Now, if it matches a nice fraction code in html give it that, otherwise leave as decimal
    // let final = (wholeNumber + fracRep).trim() // concatenate
    let final = wholeNumber + fracRep
    return final;
}

function extractQuantity(ingredient){
    let reMatch = ingredient.match(/^\d[/\d\s\.]*\s/i);
    let quantity;
    if (reMatch === null) {
        quantity = "";
    }
    else {
        quantity = reMatch[0];
    }
    return quantity
}

function scaleIngredient(bareIngredient, quantity, scale = 1){
    let matchLength;
    if (quantity == ""){
        matchLength = 0
        quantity = '1'
    }
    else {
        matchLength = quantity.length
    }
    let newQuantity = numberToPretty(scale*quantityToNumber(quantity));
    let result = newQuantity + ' ' + bareIngredient;
    return result
}

function preprocessIngredients(){
    let ingredients = document.querySelectorAll('li[itemprop=recipeIngredient]')
    let quantityArray = [];
    let ingredientBaseArray = [];
    let ingredientQuantity;
    let ingredientBase;
    for (let i = 0; i < ingredients.length; i++) {
        let ingredient = ingredients[i].firstElementChild;
        // Now, run the code to modify the ingredient
        ingredientQuantity = extractQuantity(ingredient.innerHTML);
        quantityArray.push(ingredientQuantity);
        ingredientBase = ingredient.innerHTML.substring(ingredientQuantity.length);
        ingredientBaseArray.push(ingredientBase)
    }
    // Now I need to write this array to a file in the document tree
    let div = document.createElement('div');
    div.id = 'ingredient-quantities';
    div.dataset.quantities = quantityArray.join(';')
    document.body.appendChild(div)
    // Now for the base ingredients
    let div2 = document.createElement('div');
    div2.id = 'ingredient-bases';
    div2.dataset.ingredients = ingredientBaseArray.join(';')
    document.body.appendChild(div2)
}

function scaleRecipe(scale = 1){
    let ingredients = document.querySelectorAll('li[itemprop=recipeIngredient]')
    let quantities = document.getElementById('ingredient-quantities').dataset.quantities.split(';');
    let bases = document.getElementById('ingredient-bases').dataset.ingredients.split(';');
    for (let i = 0; i < ingredients.length; i++) {
        let ingredient = ingredients[i].firstElementChild;
        // Now, run the code to modify the ingredient
        ingredient.innerHTML = scaleIngredient(bases[i], quantities[i], scale);
    }
}

function liveScaleRecipe(event){
    scaleRecipe(this.options[this.selectedIndex].value)
}

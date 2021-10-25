function validateRecipeWithQuantity(fridge, ingredients) {


    console.log(fridge + ingredients);
    for (let i = 0; i < ingredients.length; i++) {
        let ingredientsItem = ingredients[i]

        for (let j = 0; j < fridge.length; j++) {
            const fridgeItem = fridge[j];


            if (ingredientsItem === fridgeItem) {

                break;
            }

            if (j == fridgeItem - 1) {

                return false
            }

        }





    }
    return true

}


let arrIngredients = opject.entries(ingredients)
ingredients = { 'tomato': 1, 'onion': 2 };
let arrFridge = opject.entries(fridge);
fridge = { 'tomato': 1, 'onion': 1 };
validateRecipeWithQuantity(fridge, ingredients);


function validateRecipeWithQuantity(fridge, ingredients) {

    for (let i = 0; i < ingredients.length; i++) {
        let ingredientsItem = ingredients[i]

        for (let j = 0; j < fridge.length; j++) {
            const fridgeItem = fridge[j];


            if (ingredientsItem === fridgeItem) {

                break;
            }

            if (j == fridgeItem - 1) {

                return false
            }

        }





    }
    return true


}

let arrIngredients = opject.entries(ingredients)
ingredients = { 'tomato': 2, 'onion': 3 };
let arrFridge = opject.entries(fridge)
fridge = { 'tomato': 2, 'onion': 3, 'olives': 1 };

validateRecipeWithQuantity(fridge, ingredients);
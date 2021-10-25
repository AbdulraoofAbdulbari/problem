function validateRecipe(fridge, ingredients) {

    // let x = -1; 
    for (let i = 0; i < ingredients.length; i++) {
        let ingredientsItem = ingredients[i]

        for (let j = 0; i < fridge.length; i++) {
            let fridgeItem = fridge[j]


            if (ingredientsItem === fridgeItem) {

                break;
            }

            if (j === fridge.length - 1) {
                return false
            }
        }
    }
    return true

}

ingredients = ['tomato', 'onion', 'lettuce']
fridge = ['tomato', 'banana', 'apple', 'onion', 'cucumber']

validateRecipe(fridge, ingredients);
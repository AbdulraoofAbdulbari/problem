function validateRecipe(fridge, ingredients) {

    // let x = -1; 
    for (let i = 0; i < ingredients.length; i++) {
        let ingredientsItem = ingredients[i]

        for (let j = 0; i < fridge.length; i++) {
            let fridgeItem = fridge[j]


            if (ingredientsItem === fridgeItem) {

                break;
            }

            if(j === fridge.length -1){
                return false
            }
        } 
    }
   return true

}

ingredients = ['olives', 'onion', 'lettuce']
fridge = ['onion', 'banana', 'lettuce', 'olives']

validateRecipe(fridge, ingredients);
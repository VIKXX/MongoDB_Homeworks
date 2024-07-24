const mongoose = require("mongoose")
const recipesStore = require("./recipes")

mongoose.connect("mongodb+srv://viktor_use01:viktor369551@cluster0.ogeqvpp.mongodb.net/RecipeStoreDatabase?retryWrites=true&w=majority&appName=Cluster0")


async function insertRecipeStore() {
    try {
        const insertRecipe = new recipesStore({
            name: "Crock Pot Roast",
            ingredients: [
                {
                    quantity: "1",
                    name: " beef roast",
                    type: "Meat"
                },
                {
                    quantity: "1 package",
                    name: "brown gravy mix",
                    type: "Baking"
                },
                {
                    quantity: "1 package",
                    name: "dried Italian salad dressing mix",
                    type: "Condiments"
                },
                {
                    quantity: "1 package",
                    name: "dry ranch dressing mix",
                    type: "Condiments"
                },
                {
                    quantity: "1/2 cup",
                    name: "water",
                    type: "Drinks"
                }
            ],
            steps: [
                {
                    stepsDescription: "Place beef roast in crock pot.",
                },
                {
                    stepsDescription: "Mix the dried mixes together in a bowl and sprinkle over the roast.",
                },
                {
                    stepsDescription: "Pour the water around the roast.",
                },
                {
                    stepsDescription: "Cook on low for 7-9 hours.",
                },
            ],
            cookingTime: "420min",
            imageURL: "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
            originalURL: "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208"
        });
        await insertRecipe.save()
        console.log(`Recipe "${insertRecipe.name}" is already inserted!`);
    } catch (error) {
        console.log(error.message);
        throw error
    }
}

insertRecipeStore()



async function getRecipeStore() {
    try {
        const getRecipe = await recipesStore.findOne({ ingredients: { $elemMatch: { type: "Produce" } } })
        console.log(getRecipe);

    } catch (error) {
        console.log(error.message);
        throw error
    }
}

getRecipeStore()



async function updateRecipeStore() {
    try {
        const statusUpdate = await recipesStore.updateOne({ _id: "66a11b24887d40de0d4d8525", "ingredients.quantity": "15" }, { $set: { "ingredients.$.quantity": "1" } })
        console.log(statusUpdate);

        const updatedRecipes = await recipesStore.find({ _id: "66a11b24887d40de0d4d8525" })
        console.log(updatedRecipes);
    } catch (error) {
        console.log(error.message);
        throw error
    }
}

updateRecipeStore()

const mongoose = require("mongoose")

const ingredientsSchema = new mongoose.Schema.Types.Mixed([
    {
        _id: false,
        quantity: String,
        name: String,
        type: String
    }
])

const stepsSchema = new mongoose.Schema.Types.Mixed([
    {
        _id: false,
        stepsDescription: String
    }
])

const recipesSchema = new mongoose.Schema({
    name: String,
    ingredients: ingredientsSchema,
    steps: stepsSchema,
    cookingTime: String,
    imageURL: String,
    originalURL: String

}, { timestamps: true })


const RecipiesModel = mongoose.model("Recipes", recipesSchema, "recipes")
module.exports = RecipiesModel
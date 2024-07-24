
const mongoose = require("mongoose")


const bookstoreSchema = new mongoose.Schema(
    {
        title: String,

        author: String,

        country: String,

        language: String,

        pages: Number,

        year: Number,

        imageLink: String,

        wikipediaLink: String,

        createtAd: {
            type: Date,
            immutable: true,
            default: () => Date.now(),
        },

        updatedAt: {
            type: Date,
            default: () => Date.now(),
        },

    })

const BookStoreModel = mongoose.model("BookStore", bookstoreSchema, "bookstore")

module.exports = BookStoreModel
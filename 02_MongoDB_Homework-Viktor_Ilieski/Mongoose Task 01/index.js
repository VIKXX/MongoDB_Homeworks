const mongoose = require("mongoose")
const BookStore = require("./bookstore");

mongoose.connect("mongodb+srv://viktor_use01:viktor369551@cluster0.ogeqvpp.mongodb.net/BookStoreDatabase?retryWrites=true&w=majority&appName=Cluster0")


// async function insertBookStore() {
//     try {
//         const inserBook = new BookStore({
//             title: "Odyssey",
//             author: "Homer",
//             country: "Greece",
//             language: "Greek",
//             pages: 374,
//             year: -800,
//             imageLink: "images/the-odyssey-of-homer.jpg",
//             wikipediaLink: "https://en.wikipedia.org/wiki/Odyssey\n"
//         });
//         await inserBook.save()
//         console.log(`Book "${inserBook.title}" is already inserted!`)
//     } catch (error) {
//         console.log(error.message);
//         throw error
//     }

// }

// insertBookStore()



// async function getBookStore() {
//     try {
//         const getBooks = await BookStore.findOne({ title: "Odyssey" })
//         console.log(getBooks);

//     } catch (error) {
//         console.log(error.message);
//         throw error
//     }
// }

// getBookStore()


async function updateBookStore() {
    try {
        const statusUpdate = await BookStore.updateMany({ author: "Homer-Hómēros1" }, { $set: { author: "Homer-Hómēros" } })
        console.log(statusUpdate);

        const updatedBooks = await BookStore.find({ author: "Homer-Hómēros" })
        console.log(updatedBooks);
    } catch (error) {
        console.log(error.message);
        throw error
    }
}

updateBookStore()
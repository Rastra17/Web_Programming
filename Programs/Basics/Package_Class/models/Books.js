const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema({
    body: {
        type: String,
        required: [true, 'Please provide a body of the review'],
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const booksSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    reviews: [reviewSchema],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
}, { timestamps: true }
)

module.exports = mongoose.model('Books', booksSchema)
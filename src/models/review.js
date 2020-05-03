const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    content: {
        type: String,
        required: [true, "Review must have content"],
        minlength: 10
    },
    bookId: {
        type: String,
        ref: "Book",
        required: [true, "Review must belong to a book"]
    },
    username: {
        type: String,
    },
    bookname: {
        type: String,
    }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
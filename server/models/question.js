// https://mongoosejs.com/docs/schematypes.html
const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({

    user: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    comments: {
        type: Array,
        required: true
    }

});

module.exports = mongoose.model("Question", QuestionSchema);
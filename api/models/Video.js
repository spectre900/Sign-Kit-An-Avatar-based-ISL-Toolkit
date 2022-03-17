const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required!']
    },
    desc: {
        type: String,
        required: [true, 'Description is required!']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: String,
        required: [true, 'Creator is required!']
    },
    content: {
        type: String,
        required: [true, 'Content is required!']
    }
})

module.exports = mongoose.model("Video", videoSchema);
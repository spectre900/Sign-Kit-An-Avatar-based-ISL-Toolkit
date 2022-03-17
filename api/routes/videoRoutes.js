const express = require("express");
const videoSchema = require("../models/Video");

const router = express.Router();

const validateVideo = (video) => {
    return true
}

router.get('/all-videos', async (req, res, next) => {
    try {
        videos = await videoSchema.find({})
        res.json(videos)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: 'A problem occurred while retrieving all videos!'
        })
        return next(err)
    }
})

router.get('/:videoId', async(req, res, next) => {
    try {
        video = await videoSchema.findById(req.params.videoId)
        res.json(video)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: 'A problem occurred while retrieving your video!'
        })
        return next(err)
    }
})

router.post('/create-video', async(req, res, next) => {
    const video = req.body
    if(!validateVideo(video)) {
        console.log('Invalid video data!')
        res.status(400).json({
            success: false,
            msg: "Invalid video data!"
        });
    } else {
        try {
            await videoSchema.create(req.body)
            res.json({
                success: true,
                msg: "New video created!",
            });
        } catch (err) {
            console.log(err)
            res.status(500).json({
                success: false,
                msg: "An error occurred while creating the video!",
            });
            return next(err)
        }
    }
})

module.exports = router
const router = require('express').Router();
const express = require('express');
const { exec } = require('child_process');
const Review = require('../../models/review');
const MLModelController = require('../../controllers/MLModel');

router.get('/sentiment/:id', express.json(), async (req, res) => {
    const {id} = req.params
    try {
        const reviews = await Review.find({courseOwner:id})
        const commentsArg = reviews.map(review => `"${review.reviewText}"`).join(' ');
        exec(`python c:/Users/Dell/Desktop/MLProjects/recommendationSystem/model.py ${commentsArg}`, (error, stdout, stderr) => {
            if (error) {
                throw new Error(error.message);
            }
            res.send(stdout);
        });
    } catch (err) {
        res.status(500).json(err.message)
    }
});

module.exports = router;


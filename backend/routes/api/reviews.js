const reviewController = require('../../controllers/reviewsController');
const router = require('express').Router();
const verifyJWT = require('../../middlewares/verifyJWT');


router.get('/:courseId' , reviewController.getAllReviews);
router.post('/add/:courseId',  verifyJWT, reviewController.addReview);
router.delete('/delete/:courseId',  verifyJWT ,reviewController.deleteReview);
router.post('/update/:courseId',  verifyJWT , reviewController.updateReview);

module.exports = router;


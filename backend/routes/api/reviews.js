const { roundToNearestHours } = require('date-fns');
const reviewController = require('../../controllers/reviewsController');
const router = require('express').Router();
const verifyJWT = require('../../middlewares/verifyJWT');


router.get('/user/:username', reviewController.getAllUserReviews)

router.get('/totalratings' , verifyJWT, reviewController.getAllRatings);

router.get('/:courseId', reviewController.getAllReviews);

router.post('/add/:courseId', verifyJWT, reviewController.addReview);
router.delete('/delete/:courseId', verifyJWT, reviewController.deleteReview);
router.post('/update/:courseId', verifyJWT, reviewController.updateReview);

module.exports = router;


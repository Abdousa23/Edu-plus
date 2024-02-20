const express = require('express');
const router = express.Router(); 
const cartController = require('../../controllers/cartController');
const ROLES_LIST = require('../../config/rolesList');
const verifyJWT = require('../../middlewares/verifyJWT');
const verifyRoles = require('../../middlewares/verifyRoles');


// Add course to cart
router.post('/add',verifyJWT, cartController.addToCart);

// Remove course from cart
router.delete('/remove/:courseId',verifyJWT, cartController.removeFromCart);

// Update course quantity in cart
router.put('/update/:courseId',verifyJWT, cartController.UpdateCart);

// View cart
router.get('/',verifyJWT, cartController.getCart);


module.exports = router

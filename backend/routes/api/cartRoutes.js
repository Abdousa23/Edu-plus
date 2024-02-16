const express = require('express');
const router = express.Router(); 
const cartController = require('../../controllers/cartController');
const ROLES_LIST = require('../../config/rolesList');
const verifyJWT = require('../../middlewares/verifyJWT');
const verifyRoles = require('../../middlewares/verifyRoles');


// Add course to cart
router.post('/cart/add', authMiddleware, cartController.addToCart);

// Remove course from cart
router.delete('/cart/remove/:courseId', authMiddleware, cartController.removeFromCart);

// Update course quantity in cart
router.put('/cart/update/:courseId', authMiddleware, cartController.updateCartItem);

// View cart
router.get('/cart', authMiddleware, cartController.getCart);

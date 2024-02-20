const router = require("express").Router()
const paymentConroller = require('../../controllers/paymentController')
const verifyJWT = require("../../middlewares/verifyJWT")
router.post('/checkout', verifyJWT , paymentConroller.paymentCheckout)
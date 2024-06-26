const {mailer} = require('../utils/nodemail')
const Users = require('../models/user');
const { options } = require('../routes');
const crypto = require('crypto')
const Course = require("../models/course")
require('dotenv').config({ path: '../.env' });

const paymentCheckout =  async (req, res) => {
    // Extracting the 'signature' header from the HTTP request
    const signature = req.get('signature');

    // Getting the raw payload from the request body
    const payload = JSON.stringify(req.body);

    // If there is no signature, ignore the request
    if (!signature) {
        return res.sendStatus(400);
    }

    // Calculate the signature
    const computedSignature = crypto.createHmac('sha256', process.env.apiPaymentSecretKey)
        .update(payload)
        .digest('hex');

    // If the calculated signature doesn't match the received signature, ignore the request
    if (computedSignature !== signature) {
        return res.sendStatus(403);
    }

    // If the signatures match, proceed to decode the JSON payload
    const event = req.body;

    // Switch based on the event type
    switch (event.type) {
        case 'checkout.paid':
            try{
            const checkout = event.data;
            console.log(checkout)
            const username = req.user
            const user = await Users.find({username:username}).exec()
            const email = user.email
            const courseId = req.params.courseID
            const course = await Course.findById(courseId).exec()
            user.purchasedcourses.push(courseId)
            course.studentEnrolled.studentsNumber += 1
            mailer.buyMail(email , courseId , username)
            }
            catch(error){
                console.error('Error fetching user' , error)
                return res.sendStatus(500)
            }
            // Handle the successful payment.
            break;
        case 'checkout.failed':
            const failedCheckout = event.data;
            // Handle the failed payment.
            break;
    }

    // Respond with a 200 OK status code to let us know that you've received the webhook
    res.sendStatus(200);
}

module.exports = paymentCheckout
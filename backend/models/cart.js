const mongoose = require('mongoose')
const schema=mongoose.Schema
const mongoose = require('mongoose');

const cartSchema = new schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [{
        courseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course',
            required: true
        },
    }],},
    {
        timestamps: true
    }
    );

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;

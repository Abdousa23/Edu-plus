const mongoose = require('mongoose')
const schema=mongoose.Schema

const cartSchema = new schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    items: [{
        courseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'course',
            required: true
        },
    }],},
    {
        timestamps: true
    }
    );

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;

const nodemailer = require('nodemailer');
const sendMail = require('../utils/nodemail');
const qrcode = require("qrcode");
const {v4:uuidv4} = require("uuid");

const createQr = async (data) => {
    const stJson = JSON.stringify(data)
    const qr = await qrcode.toFile('qr.png' ,stJson,{type:"terminal"} , (err , url) => {
        if(err) throw err
        return url
    })
}

const buyMail = (req , res , next) => {
    const  email  = req.body.email;
    const courseId = req.body.course.id
    const options = require("../utils/mailOptions").options;
    const username = req.body.username;
    options.to = email;
    const data = {
        email:"eeee",
        courseId:555,
        username:"majdozed"
    }
    const qr =  createQr(data)
    Object.attachments = ['qr.png']
    options.subject = "Thank you for your purchase";
    options.text = "Thank you for your purchase";
    options.html = "<b>Thank you for your purchase</b>";
    sendMail(options)
} 
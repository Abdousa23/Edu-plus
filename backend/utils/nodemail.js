const { info } = require("console");
const nodemailer = require("nodemailer");
const options = require("./mailOptions").options;
const transporter = require("./mailOptions").transporter;
const qrcode = require("qrcode");
const {v4:uuidv4} = require("uuid");



console.log(options.to)
async function sendMail(options) {
    try{
    const info = await transporter.sendMail(options);
        
    console.log("Message sent: %s", info.messageId);
    }catch(err){
        console.log(err)
    }
}

const createQr = async (data) => {
    const stJson = JSON.stringify(data)
    const qr = await qrcode.toFile('qr.png' ,stJson,{type:"terminal"} , (err , url) => {
        if(err) throw err
        return url
    })
}

const buyMail = (email, courseID , username ) => {
    options.to = email;
    const data = {
        email,
        courseId,
        username,
    }
    const qr =  createQr(data)
    Object.attachments = ['qr.png']
    options.subject = "Thank you for your purchase";
    options.text = "Thank you for your purchase";
    options.html = "<b>Thank you for your purchase</b>";
    sendMail(options)
} 
module.exports = {sendMail,buyMail};



/*  */
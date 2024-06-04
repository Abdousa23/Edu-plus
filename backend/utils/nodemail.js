const { info } = require("console");
const nodemailer = require("nodemailer");
const options = require("./mailOptions").options;
const transporter = require("./mailOptions").transporter;
const qrcode = require("qrcode");
const {v4:uuidv4} = require("uuid");



async function sendMail(options) {
    try{
        console.log('test4')
        console.log(options)
    const info = await transporter.sendMail(options);
        
    console.log("Message sent: %s", info.messageId);
    }catch(err){
        console.log(err)
    }
}

const createQr = (data) => {
    return new Promise((resolve, reject) => {
        const stJson = JSON.stringify(data);
        qrcode.toFile('qr.png', stJson, { type: 'terminal' }, (err, url) => {
            if (err) reject(err);
            resolve('qr.png');
        });
    });
}

const buyMail = async (studentEmail,receiverEmail, courseTitle , username , subject , text  ) => {
    options.to = receiverEmail;
    const data = {
        studentEmail,
        courseTitle,
        username,
    }
    console.log(data)
    const qr =  await createQr(data)
    console.log(qr)
    console.log('test')
    options.attachments = [{
        filename: 'qr.png',
        path: qr,
        cid: uuidv4() // Ensure unique content ID for email attachment
    }];
    options.subject = subject
    options.text = text
    options.html = "<h1>Enjoy the course !<h1/><br/><p>arrival to this course has been confirmed </p>"
    console.log('test2')
    sendMail(options)
} 
module.exports = {sendMail,buyMail};



/*  */
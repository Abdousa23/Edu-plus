const { info } = require("console");
const nodemailer = require("nodemailer");
const options = require("./mailOptions").options;
const transporter = require("./mailOptions").transporter;



console.log(options.to)
async function sendMail(options) {
    try{
    const info = await transporter.sendMail(options);
        
    console.log("Message sent: %s", info.messageId);
    }catch(err){
        console.log(err)
    }
}

module.exports = sendMail;



/*  */
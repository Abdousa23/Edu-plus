const nodemailer = require("nodemailer");
require('dotenv').config({ path: '../.env' });

console.log(process.env.MY_MAIL)
console.log(process.env.MY_PASS)
const transporter = nodemailer.createTransport({
    service : "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.MY_MAIL,
        pass: process.env.MY_PASS,
    },
});
const options ={
    from: '"EDU+" <majdozed@gmail.com>', // sender address
    to: "m_zeghdar@estin.dz, olip17740@gmail.com",
    subject: "TEST", // Subject line
    text: "is it working", // plain text body
    html:"<b>Hello world?</b>" // html body
}


module.exports = {transporter, options }
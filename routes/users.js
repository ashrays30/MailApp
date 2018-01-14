var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();


// configure transpoter for sending mail
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    // user: 'testuzrcpa10@gmail.com',
    // pass: 'india@123456789'
    user: 'ashray.mpllc@gmail.com',
    pass: 'sanu98351'
  }
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('tested');
});


router.post('/mailUser', function(req, res, next) {
  transporter.sendMail({  //email options
    from: "ashray.mpllc@gmail.com", // sender address.  Must be the same as authenticated user if using Gmail.
    to: req.body.email, // receiver
    subject: "Welcome to mail project", // subject
    text: "Hi there,\n\n"+
    "This mail is for testing purpose\n\n"+
    "That’s all for now!\n"+
    "-Ashray Shah"
    
 }, function(error, response){  //callback
    if(error){
        console.log(error);
        res.send({"status":"false"});
    }else{
        console.log("Message sent: " + response.message);
        res.send({"status":"true"});
    }
    
    transporter.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
 });
});

module.exports = router;

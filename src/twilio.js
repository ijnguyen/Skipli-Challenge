const express = require("express");
var app = express();

app.get('/sendCode', function(req, res) {
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE_NUM;
const client = require('twilio')(accountSid, authToken);

// Send Access Code to user
client.messages
  .create({
     body: 'Your access code is: ' + accesscode,
     from: twilioPhone,
     to: num
   })
  .then((message) => res.send('Sent'));
  });

  app.listen(4000);
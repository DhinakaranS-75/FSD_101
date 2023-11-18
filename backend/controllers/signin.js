const User = require("../models/User");
const { sendMail } = require("./SendMail");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const verifyUser = require("../models/verfyUser");

async function InsertVerifyUser(name, email, password) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const token = generateToken(email);

    const newUser = new verifyUser({
      name: name,
      email: email,
      password: hashedPassword,
      token: token,
    });

    const activtionLink = "link to be added";
    const content = `<h4>Hi ,There </h4>
    <h5>Welcome To The App</h5>
    <p>Thank You For Signing Up.Click on the below link to activate</p>
    <a herf="${activtionLink}>Click Here</a>
    <p>Regards</p>
    <p>Recipe_Book</p>`;

    await newUser.save();
    sendMail(email, "VerifyUser", content);
  } catch (err) {
    console.log(err);
  }
}

function generateToken(email) {
  const token = jwt.sign(email, process.env.Secret_key);
  return token;
}

module.exports = { InsertVerifyUser };

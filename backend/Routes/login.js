const express = require("express");
const { AuthenticateUser } = require("../controllers/login");
var router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { email, password } = await req.body;
    var loginCredentaials = await AuthenticateUser(email, password);
    console.log(loginCredentaials);
    if (loginCredentaials === "Invalid User name Or Password") {
      res.status(200).send("Invalid User name Or Password");
    } else if (loginCredentaials === "Server Busy") {
      res.status(200).send("Server Busy");
    } else {
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

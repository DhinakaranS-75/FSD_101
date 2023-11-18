const express = require("express");
const { CheckUser } = require("../controllers/login");
const { InsertVerifyUser } = require("../controllers/signin");
var router = express.Router();

router.get("/", async (req, res) => {});
router.post("/verify", async (req, res) => {
  try {
    const { name, email, password } = await req.body;
    const registerCredentials = await CheckUser(email);
    if (registerCredentials === false) {
      await InsertVerifyUser(name, email, password);
      res.status(200).send(true);
    } else if (registerCredentials === true) {
      res.status(200).send(false);
    } else if (registerCredentials === "Server Busy") {
      res.status(500).send("Server Busy");
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

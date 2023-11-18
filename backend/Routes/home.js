const express = require("express");
const { AuthorizUser } = require("../controllers/login");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const auth_token = await req.headers.authorization;
    const loginCredentaials = AuthorizUser(auth_token);
    if (loginCredentaials === false) {
      res.status(200).send("Incalid Token");
    } else {
      res.json(loginCredentaials);
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("Server Busy");
  }
});

module.exports = router;

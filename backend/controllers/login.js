const User = require("../models/User");

async function CheckUser(email) {
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      return true;
    } else {
    }
    return false;
  } catch (err) {
    return "Server Busy";
  }
}

module.exports = { CheckUser };

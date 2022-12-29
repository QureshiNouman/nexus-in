const express = require("express");
const router = express.Router();
const User = require("../models/userData");
router.get("/", (req, res) => {
  res.json({});
});
// router.post("/register", async (req, res) => {
//   const { username, email, password } = req.body;
//   if (!username || !email || !password) {
//     return res.status(422).json({ error: "Please Fill the Field Properly" });
//   }
//   try {
//     const userExist = await User.findOne({ email: email });
//     if (userExist) {
//       return res.status(422).json({ error: "Email Already Exisits!!!" });
//     } else {
//       const user = new user({ username, email, password });
//       console.log(req);
//       await user.save();
//       res.status(201).json({ message: "User Entered Successfully!!!" });
//     }
//   } catch (err) {
//     //console.log(err);
//   }
// });

router.route("/register").post(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(422).json({ error: "Please Fill the Field Properly" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email Already Exisits!!!" });
    } else {
      const user = new User({ username, email, password });
      await user.save();
      res.send(user);
      res.status(201).json({ message: "User Entered Successfully!!!" });
    }
  } catch (err) {
    //console.log(err);
  }
});

module.exports = router;

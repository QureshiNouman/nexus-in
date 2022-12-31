const express = require("express");
const router = express.Router();
const User = require("../models/userData");
const nodemailer = require("nodemailer");
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
//register route
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
//login route
router.route("/login").post(async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  if (!email) {
    return res.status(422).json({ error: "Please Enter Email" });
  }
  try {
    const userLogin = await User.findOne({ email: email });
    console.log(userLogin);
    if (userLogin) {
      res.send(userLogin);
      res.status(201).json({ message: "Correct Email!!!" });
    } else res.status(400).json({ message: "Invalid Email!!!" });
  } catch (err) {
    console.log(err);
  }
});

//sendKey Route
router.route("/sendKey").post(async (req, res) => {
  console.log(req.body);
  const { to, subject, description } = req.body;
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "qureshinouman30@gmail.com",
      pass: "dcihugbcmleaidoy",
    },
  });

  let mailDetails = {
    from: "qureshinouman30@gmail.com",
    to: to,
    subject: subject,
    text: "OK",
    html: `<div>${description}</div>`,
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log(err.message);
      console.log("Error Occurs");
      res.status(400).json({ message: "ERROR" });
    } else {
      res.status(400).json({ message: "Email sent successfully" });
      console.log("Email sent successfully");
    }
  });
});
module.exports = router;

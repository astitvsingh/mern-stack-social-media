const router = require("express").Router();
const User = require("../../models/User");
const bcrypt = require("bcrypt");

//GET
router.get("/", async (req, res, next) => {
  res.status(200).send("welcome to register.");
});

//POST
router.post("/", async (req, res, next) => {
  try {
    //Generate Hashed password.
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Create new user.
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //Save User to db and return response.
    const user = await newUser.save();
    res.status(200).json(user);
    res.send("ok");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

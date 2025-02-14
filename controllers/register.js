const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const { kUser23 } = require("../models");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const register = async (req, res, next) => {
  try {
    const { kid, name, email, phone } = req.body;

    let existingUser = await kUser23.findOne({ where: { email } });

    if (!existingUser) {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const vsalt = crypto.randomBytes(16).toString("hex");
      const vsaltTime = new Date();
      existingUser = await kUser23.create({
        kid: uuidv4(),
        mkid: kid,
        firstname: name.split(" ")[0],
        //lastname: name.split(" ").slice(1).join(" "),
        email,
        phone,
        // college,
        // year,
        // dept,
        // pwdhash: hashedPassword,
        salt,
        vsalt,
        vsaltTime,
      });
    }

    // res
    //   .status(200)
    //   .json({ message: "User registered successfully!", user: existingUser });
    next();
  } catch (error) {
    console.error("Error registering user:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
const login = async (req, res) => {
  try {
    const {
      kid,
      firstname,
      lastname,
      email,
      phone,
      college,
      year,
      dept,
      roll,
    } = req.body;
  
    let existingUser = await kUser23.findOne({ where: { email } });
  
    if (!existingUser) {
      return res
        .status(404)
        .send({ message: "Register to WallStreet Wolverine using kid!" });
    }
  
    console.log(email);
  
    const updatedFields = {};
    if (!existingUser.college && college) updatedFields.college = college;
    if (!existingUser.lastname && lastname) updatedFields.lastname = lastname;
    if (!existingUser.year && year) updatedFields.year = year;
    if (!existingUser.dept && dept) updatedFields.dept = dept;
    if (!existingUser.phone && phone) updatedFields.phone = phone;
    if (!existingUser.roll && roll) updatedFields.roll = roll;
  
    if (Object.keys(updatedFields).length > 0) {
      await kUser23.update(updatedFields, { where: { email } });
    }
  
    const user = await kUser23.findOne({ where: { email } });
  
    return res.status(200).json({
      status: "ok",
      message: "user details updated successful",
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Server Error. Try again." });
  }
  
};
module.exports = { register, login };

// const axios = require("axios");
// const { kUser23 } = require("../models");
// const bcrypt = require("bcrypt");
const checkRegister = async (req, res) => {
  try {
    console.log(req.body);

    const kid = req.body.kid; // Ensure password is provided
    if (!kid) {
      res.status(400).json({ message: "kid not defined" });
    }
    // if (!kid || !password) {
    //   return res.status(400).json({ message: "KID and password are required" });
    // }

    // Fetch user details from external API
    const externalResponse = await axios.get(
      `https://api.kurukshetraceg.org.in/api/v1}`,
      
    );
    console.log("kid check:", externalResponse.data);
    if (!externalResponse.data) {
      return res.status(404).json({ message: "User not found in external DB" });
    }

    // const userData = externalResponse.data;
    // let existingUser = await kUser23.findOne({ where: { kid } });

    // const saltRounds = 10;
    // const hashedPassword = await bcrypt.hash(password, saltRounds);

    // if (!existingUser) {
    //   existingUser = await kUser23.create({
    //     kid: uuidv4(), // Generate new unique KID
    //     mkid: userData.kid,
    //     firstname: userData.name.split(" ")[0],
    //     lastname: userData.name.split(" ").slice(1).join(" "),
    //     email: userData.email,
    //     phone: userData.phone,
    //     college: userData.college,
    //     year: userData.year,
    //     dept: userData.dept,
    //     pwdhash: hashedPassword,
    //   });
    // }

    // res.status(200).json({
    //   message: "User found and stored",
    //   user: existingUser,
    // });
  } catch (error) {
    console.error("Error checking user:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = { register, login, checkRegister };

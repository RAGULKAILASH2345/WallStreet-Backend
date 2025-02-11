const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const { kUser23 } = require("../models");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  try {
    const { kid, name, email, phone, college, year, dept, password } = req.body;

    let existingUser = await kUser23.findOne({ where: { email } });

    if (!existingUser) {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      const vsalt = crypto.randomBytes(16).toString("hex");
      const vsaltTime = new Date();
      existingUser = await kUser23.create({
        kid: uuidv4(),
        mkid: parseInt(kid),
        firstname: name.split(" ")[0],
        lastname: name.split(" ").slice(1).join(" "),
        email,
        phone,
        college,
        year,
        dept,
        pwdhash: hashedPassword,
        salt,
        vsalt,
        vsaltTime,
      });
    }

    res
      .status(200)
      .json({ message: "User registered successfully!", user: existingUser });
  } catch (error) {
    console.error("Error registering user:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //console.log(email, password);
    const user = await kUser23.findOne({
      where: {
        email: email,
      },
    });
    console.log(user);
    if (!user) {
      return res.status(401).send({
        message: "User not found.",
      });
    }

    const validPassword = await bcrypt.compare(password, user.pwdhash);
    if (!validPassword) {
      return res.status(401).json({
        status: "error",
        error: "Unauthorized",
        message: "Invalid credentials",
      });
    }
    console.log(process.env.JWTSECRET);
    const token = jwt.sign({ id: user.kid }, process.env.JWTSECRET);

    return res.status(200).json({
      status: "ok",
      message: "Login successful",
      token: token,
      user,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Server Error. Try again.", gh: "con" });
  }
};
module.exports = { register, login };

// const axios = require("axios");
// const { kUser23 } = require("../models");
// const bcrypt = require("bcrypt");
// const register = async (req, res) => {
//   try {
//     const { kid } = req.body;

//     // Fetch user details from k25 database
//     // const externalResponse = await axios.get(`http://k25db.com/user/${kid}`);
//     // if (!externalResponse.data) {
//     //   return res.status(404).json({ message: "User not found in external DB" });
//     // }

//     // const userData = externalResponse.data;
//     const userData = req.body;
//     let existingUser = await kUser23.findOne({ where: { kid: req.body.kid } });
//     const saltRounds = 10;
//     const salt = await bcrypt.genSalt(saltRounds);
//     const hashedPassword = await bcrypt.hash(password, salt);
//     if (!existingUser) {
//       existingUser = await kUser23.create({
//         kid: uuidv4(),
//         mkid: userData.kid,
//         firstname: userData.name.split(" ")[0],
//         lastname: userData.name.split(" ").slice(1).join(" "),
//         email: userData.email,
//         phone: userData.phone,
//         college: userData.college,
//         year: userData.year,
//         dept: userData.dept,
//         pwdhash: hashedPassword,
//         // cegian: userData.cegian,
//         // city: userData.city,
//         // state: userData.state,
//         // roll: userData.roll,
//       });
//     }
//     res
//       .status(200)
//       .json({ message: "User found and stored", user: existingUser });
//   } catch (error) {
//     console.error("Error checking user:", error);
//     res
//       .status(500)
//       .json({ message: "Internal server error", error: error.message });
//   }
// };

// module.exports = { register };

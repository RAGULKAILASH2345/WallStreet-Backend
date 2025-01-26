
const {
        v4: uuidv4
} = require("uuid");
const jwt = require("jsonwebtoken");
const url = require("url");

const User = require("../models").kUser23;



const googleSignin = (req, res) => {
        if (!req.user) {
                return res.status(400).send({
                        message: "Server Error"
                });
        } else {
                const email = req.user._json.email;
                User.findOne({
                        where: {
                                email
                        }
                }).then((user) => {
                        if (user) {
                                if (user.kid) {
                                        console.log("login");
                                        return res.redirect(process.env.GOOGLESUCCESS + url.format({
                                                query: {
                                                        message: "Login Successful",
                                                        token: getJWT(user.id),
                                                }
                                        }));
                                } else {
                                        console.log("fill-details");
                                        return res.redirect(process.env.GOOGLEDATA + url.format({
                                                query: {
                                                        auth: true,
                                                        email,
                                                        name: req.user._json.name,
                                                        token: getJWT(user.id)
                                                }
                                        }));
                                }
                        } else {
                                console.log("new user");
                                User.create({
                                        id: uuidv4(),
                                        email
                                }).then((user) => {
                                        if (user) {
                                                const token = getJWT(user.id);
                                                return res.redirect(process.env.GOOGLEDATA + url.format({
                                                        query: {
                                                                auth: true,
                                                                email,
                                                                name: req.user._json.name,
                                                                token: getJWT(user.id)
                                                        }
                                                }));
                                        } else {
                                                return res.status(400).send({
                                                        message: "Server Error"
                                                });
                                        }
                                }).catch((err) => {
                                        return res.status(400).send({
                                                message: "Server Error"
                                        });
                                });
                        }
                }).catch((err) => {
                        return res.status(400).send({
                                message: "Server Error"
                        });
                });
        }
};



const getJWT = (data) => {
        return jwt.sign({
                id: data
        }, process.env.JWTENCRYPTION);
};

module.exports = {
        googleSignin
};

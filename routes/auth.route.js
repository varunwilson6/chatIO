const express = require('express');
const controllers = require('../controllers/auth.controllers');
const router = express.Router();

router.route("/login")
    .post(controllers.login);

router.route("/register")
    .post(controllers.register);

module.exports = router;
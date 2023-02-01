const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

const registerRouter = require('./auths/register');
const loginRouter = require('./auths/login');

router.use('/register', registerRouter);
router.use('/login', loginRouter);


router.get('/', async (req, res, next) => {
    res.send('welcome to auth.');
});

module.exports = router;
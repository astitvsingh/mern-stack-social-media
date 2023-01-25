const router = require('express').Router();
const User = require('../models/User');

//Register
router.post('/register', async (req, res, next) => {
    const user = await new User({

    });
    res.send('respond with a resource');
});

module.exports = router;
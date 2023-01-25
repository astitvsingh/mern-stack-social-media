const router = require('express').Router();

const authRouter = require('./auth');
const usersRouter = require('./users');

/* GET home page.
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
*/

router.use('/auth', authRouter);
router.use('/users', usersRouter);

module.exports = router;
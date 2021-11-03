const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

router.use('/thoughts', thoughtRoutes);
router.use('/reaction', thoughtRoutes);
router.use('/users', userRoutes);
router.use('/friends', userRoutes);

module.exports = router;
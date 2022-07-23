const router = require('express').Router();
const apiRoutes = require('./api');
// all routes begin with /api
router.use('/api', apiRoutes);
// middleware for default response
router.use((req, res) => res.send('Wrong route!'));

module.exports = router;

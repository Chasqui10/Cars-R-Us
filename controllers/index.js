const router = require('express').Router();

const homeRoutes = require('./homeRoutes'),apiRoutes = require('./api');

router.use('/', homeRoutes)
    .use('/api', apiRoutes);


module.exports = router;


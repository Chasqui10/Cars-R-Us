const router = require('express').Router();

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('landing');
});

router.get('/login', async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    res.render('login');
  });

  router.get('/profile', async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    res.render('profile');
  });

  router.get('/main', async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    res.render('index');
  });

module.exports = router;

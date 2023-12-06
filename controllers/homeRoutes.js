const router = require('express').Router();
const { User, Inventory } = require('../models');
const withAuth = require('../utils/auth');

// router.get('/', async (req, res) => {
//   try {
//     const inventoryData = await Inventory.findall({
//       include: [
//         {
//           model: User,
//           attributes: ['id']
//         },
//       ],
//     });

//     const inventory = inventoryData.map((invent) => invent.get({ plain: true })); 
    
//     // Send the rendered Handlebars.js template back as the response
//     res.render('index', {
//       inventory,
//       logged_in: req.session.logged_in
//     });

//   } catch (err) {
//     res.status(500).json(err);
//   }

// });

router.get('/', async (req, res) => {
 res.render('landing');
});  

router.get('/profile', withAuth, async (req, res) => {
    try {
      const userData = await User.findByPk(req.session.userid, {
        attributes: {exclude: ['password']},
        include: [{ model: Inventory }],
      });

      const user = userData.get({ plain: true });
      
      // Send the rendered Handlebars.js template back as the response
      res.render('profile', {
        ...user,
        logged_in: true
      });
      
    } catch(err) {
      res.status(500).json(err);
    }
    
  });

  router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
    // Send the rendered Handlebars.js template back as the response
    res.render('login');
  });
  
  router.get('/main', async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    res.render('landing');
  });
  

  router.get('*', async (req, res) => {
    //catchall route
    res.render('landing');
  });

  module.exports = router;

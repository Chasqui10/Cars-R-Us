const router = require('express').Router();
const { User, Inventory } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }
 res.render('landing', { logged_in: true });
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
    if (!req.session.logged_in) {
      res.redirect('/login');
      return;
    }
    // Send the rendered Handlebars.js template back as the response
    res.render('landing', { logged_in: true });
  });
  
  router.get('/inventory', async (req, res) => {
    if (!req.session.logged_in) {
      res.redirect('/login');
      return;
    }
    // Send the rendered Handlebars.js template back as the response
    const userInventory = await Inventory.findAll({
      where: {
        userid: req.session.userid,
      },
    });
   console.log(req.session.userid);
   const inventory = userInventory.map((invent) => invent.get({ plain: true }));

    res.render('inventory', {
      inventory: inventory,
      logged_in: true, 
    });
});

  router.get('*', async (req, res) => {
    if (!req.session.logged_in) {
      res.redirect('/login');
      return;
    }
    //catchall route
    res.render('landing', { logged_in: true });
  });

  module.exports = router;

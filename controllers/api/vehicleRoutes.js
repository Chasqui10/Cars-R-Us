// This is a file that is meant to change as more of the client side of the web application is shown through the MVC/ static page
// My thoughts on what interactive routes would be needed for our webapplication based of our goal
// This would handle posting a new car onto the data base for the web application 
const router = require('express').Router();
const { Vehicles } = require('../../models');



router.post('/', async (req, res) => {
    try {
      const vehiclesData = await Vehicles.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = vehiclesData.userid;
        req.session.logged_in = true;
  
        res.status(200).json(vehiclesData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });
  

  
  
  
  
  module.exports = router;
  
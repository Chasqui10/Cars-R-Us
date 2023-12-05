const router = require('express').Router();
const { Inventory } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const inventoryData = await Inventory.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = inventoryData.userid;
        req.session.logged_in = true;
  
        res.status(200).json(inventoryData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  
  module.exports = router;
  

// This is a file that is meant to change as more of the client side of the web application is shown through the MVC/ static page
// My thoughts on what interactive routes would be needed for our webapplication based of our goal
// This would handle posting a realtime messaging interaction and storing the communication onto the data base????? for the web application
// I wonder if this would require a model for handiling this in a database 
const router = require('express').Router();
//const { User } = require('../../models');
// const { Message } = require('../../models');

router.post('/', async (req,res) => {
  res.send('Hello World')
  try {
    console.log('hello')
  
  } catch(err) {
    res.status(400).json(err);
  }
});

router.post('/messages', async (req, res) => {
  try{
    //publishing would be here
    
  } catch(err) {
    res.status(400).json(err);
  }
})

router.get('/messages', async (req, res) => {
  res.send('goodbye');
  try{
    // Subscribe? 
    console.log('hello');

  } catch(err) {
    res.status(400).json(err);
  }
})

module.exports = router;
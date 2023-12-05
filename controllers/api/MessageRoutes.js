// This is a file that is meant to change as more of the client side of the web application is shown through the MVC/ static page
// My thoughts on what interactive routes would be needed for our webapplication based of our goal
// This would handle posting a realtime messaging interaction and storing the communication onto the data base????? for the web application
// I wonder if this would require a model for handiling this in a database 
const router = require('express').Router();
const { User } = require('../../models');
// const { Message } = require('../../models');

router.post('/', async (req,res) => {
  try {
    const userData = await User.create(req.body) 

    // listeners would be here or on view?
    // channel setting would be here
    // communication between users and who is online
    console.log('hello');
    req.session.save(() => {
      req.session.userid = userData.userid;
      req.session.logged_in = true;
    })

  } catch(err) {
    res.status(400).json(err);
  }
});

router.post('/messages', async (req, res) => {
  try{
    //publishing would be here
  } catch() {

  }
})

router.get('/messages', async (req, res) => {
  try{
    // Subscribe? 
    console.log('goodbye');

  } catch(err) {
    res.status(400).json(err);
  }
})

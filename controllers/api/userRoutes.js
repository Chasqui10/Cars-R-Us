// This is a file that is meant to change as more of the client side of the web application is shown through the MVC/ static page
// My thoughts on what interactive routes would be needed for our webapplication based of our goal
// This would handle posting a user profile onto the data base for the web application 
const router = require('express').Router;
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    console.log('hello')

  } catch (err) {
    console.error(err)
  }
})
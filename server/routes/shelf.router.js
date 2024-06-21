const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    console.log('User is authenticated?:', req.isAuthenticated());
    console.log("Current user is: ", req.user.username);
    
    const sqlText = `SELECT * From item`;
    pool
      .query(sqlText)
      .then((result) => {
        console.log(`GET from database`, result);
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(401); 
  }
});

/**
 * Add an item for the logged in user to the shelf
 */

// Irrelevant side note: 
// Worth noting that the sample repo Key was working on has access_levels within the user table in the database
// I dont think we need access_levels here, just user login authentication, as we aren't authorizing anything
// just verifying login via authentication.

router.post('/', (req, res) => {
  if (req.isAuthenticated() ) {
  console.log('User is authenticated?:', req.isAuthenticated());
  console.log("Current user is: ", req.user.username);
  console.log("Current request body is: ", req.body);
  const { description, image_url } = req.body // destructure desc and image_url w/ req.body
  console.log("Current request body is: ", req.body);
  // logic for null values???
    if (!description || !image_url) {
      console.log("We are missing something in img or desc")
      res.sendStatus(400)
      return
    }
  let queryText = `
  INSERT INTO "item"
  ("description", "image_url", "user_id")
  VALUES
  ($1, $2, $3)
  `;
  const values = [ description, image_url, req.user.id ]
  pool
    .query(queryText, values)
    .then (() => {
      res.sendStatus(200);
    })
    .catch((error) => {
    console.log('Error making POST insert for shelf item:', error);
    res.sendStatus(500)
  })
}
else {
  res.sendStatus(401)
}
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;

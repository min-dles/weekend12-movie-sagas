const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const query = `
    SELECT * FROM genres 
    ORDER BY "id";
  `;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    }).catch(err => {
      console.log('ERROR: get all genres:', err);
      res.sendStatus(500)
    })
});

module.exports = router;
const express = require('express');
const pgp = require('pg-promise')();

const router = express.Router();

const ENV = process.env.DATABASE_URL;

const db = pgp(ENV || 'postgres://postgres:postgres@localhost:5432/postgres');

// Route þegar notandi kemur á forsíðu
router.get('/', (req, res, next) => {
  db.any('SELECT * FROM ElectricCars')
    .then((result) => {
      res.render('index', { result });
    })
    .catch((error) => {
      next(new Error('Því miður hefur einhver villa átt sér stað.'));
    });
});

module.exports = router;

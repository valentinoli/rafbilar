/* routes hér */
const express = require('express');
const pgp = require('pg-promise')();
// const xss = require('xss');

const router = express.Router();

const password = require('./password');

const user = password.dbUser();
const pass = password.dbPass();

// const DATABASE = process.env.DATABASE_URL || `postgres://...'
const DATABASE = `postgres://${user}:${pass}@localhost:5432/postgres`;

const db = pgp(DATABASE);

router.get('/', (req, res, next) => {
  db.any('SELECT * FROM ElectricCars')
    .then((result) => {
      res.render('index', { result });
    })
    .catch((error) => {
      // Skrifa eitthvað hér
    });
});

module.exports = router;

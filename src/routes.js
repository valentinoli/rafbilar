const express = require('express');
const pgp = require('pg-promise')();

const router = express.Router();

const password = require('./password');

const user = password.dbUser();
const pass = password.dbPass();
const db = password.getDB();

const DATABASE = `postgres://${user}:${pass}@localhost:5432/${db}`;

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


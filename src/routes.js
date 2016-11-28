const express = require('express');
const pgp = require('pg-promise')();

const router = express.Router();

function unknown(str) {
  const h = str.match(/.{1,4}/g) || [];
  let back = '';
  for (let j = 0; j < h.length; j++) {
    back += String.fromCharCode(parseInt(h[j], 16));
  }
  return back;
}

const p = unknown('0070006f007300740067007200650073');

const ENV = process.env.DATABASE_URL;

const db = pgp(ENV || `postgres://${p}:${p}@localhost:5432/postgres`);

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

/* express kóði hér */
const express = require('express');
const path = require('path');
const routes = require('./routes');
const favicon = require('serve-favicon');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.locals.pretty = true;
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Síða fannst ekki.');
  err.status = '404';
  next(err);
});

// error handler
// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    status: err.status,
  });
});

module.exports = app;

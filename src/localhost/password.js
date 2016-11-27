function secret(str) {
  const h = str.match(/.{1,4}/g) || [];
  let back = '';
  for (let j = 0; j < h.length; j++) {
    back += String.fromCharCode(parseInt(h[j], 16));
  }
  return back;
}

function dbUser() {
  return secret('0070006f007300740067007200650073');
}

function dbPass() {
  return secret('0070006f007300740067007200650073');
}

function getDB() {
  return 'postgres';
}

function getHost() {
  return 'localhost';
}

module.exports = {
  dbUser,
  dbPass,
  getDB,
  getHost,
};

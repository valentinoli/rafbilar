function secret(str) {
  const h = str.match(/.{1,4}/g) || [];
  let back = '';
  for (let j = 0; j < h.length; j++) {
    back += String.fromCharCode(parseInt(h[j], 16));
  }
  return back;
}

function dbUser() {
  return secret('00660061006200790062006d0075007a0075006800730073006f0061');
}

function dbPass() {
  return secret('007800470055005a00720059007900590037003100590055006e006900380036007a00410061005a006e0073006d004600460066');
}

function getDB() {
  return 'dbagrbip5ic02v';
}



module.exports = {
  dbUser,
  dbPass,
};

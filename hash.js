const bcrypt = require('bcrypt');


bcrypt.hash("admin", 12).then(function(hash) {
    console.log(hash)
});
//PAquete para cifrado de datos, ejemplo passwords, funciona con callbacks y promesas


const bcrypt = require('bcrypt');

const password= '1234segura!';

bcrypt.hash(password, 5, function(err, hash){
    console.log(hash);
    bcrypt.compare(password, hash, function(err, resultado){
        console.log(err)
        console.log(resultado)
    })
})


const os = require('os'); // llamar el modulo os

// console.log(os.arch()); //saber la arquitectura de la maquina
// console.log(os.platform());//saber la plataforma de la maquina
// console.log(os.cpus().length);// saber el numero de nucleos e información
// console.log(os.constants); // alertas
// console.log(os.freemem());//Memoria libre que tenemos 


//Calcular la memoria libre disponible
// // const SIZE = 1024;
// // function kb(bytes) { return bytes / SIZE}
// // function mb(bytes) { return kb(bytes) / SIZE}
// // function gb(bytes) { return mb(bytes) / SIZE}

// // console.log(os.freemem());
// // console.log(kb(os.freemem()));
// // console.log(mb(os.freemem()));

// console.log(os.totalmem());//Memoria ram total en la maquina

// console.log(os.homedir()) //Directorio raíz de la maquina
// console.log(os.tmpdir()); //directorio de archivos temporas

// console.log(os.hostname()); // hostname de la maquina

// console.log(os.networkInterfaces()); //todas las interfaces de red activas en la maquina
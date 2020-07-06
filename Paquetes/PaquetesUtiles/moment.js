//Trabajar con fechas

const moment = require('moment');

let ahora = moment();

console.log(ahora); // Mostrar las opciones

console.log(ahora.toString()); //Metodo interno para darle formato a la fecha 

console.log(ahora.format('YY/MM/DD - HH:mm')); //Darle formato a la fecha


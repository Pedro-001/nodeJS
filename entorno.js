//Invocación de variables normal
//let saludo = 'Hola'
//console.log(saludo)

//Invocación por procesos

//let nombre = process.env.NOMBRE;

//console.log('Hola, '+ nombre);


//asignación de valor por default


let nombre = process.env.NOMBRE || 'Pedro';
let web = process.env.WEB || 'no tengo web';


console.log('Hola, '+ nombre);

console.log('Mi web es , '+ web);

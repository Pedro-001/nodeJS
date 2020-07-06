//Acceder proceso en node (eventos, señales, todos) modulo global

// const process = require('process');


process.on('beforeExit', () => {
    console.log('Proceso va a terminar');
})

process.on('exit', () => {
    console.log('el proceso acabo');
})

process.on('uncaughtException', (err, origen) => {
    console.error('No capturamos un error');
    console.error(err)
})

FunctionInvocandoFuncionQueNoExisteYProvocaError();

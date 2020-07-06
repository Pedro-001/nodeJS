function Hola(nombre){    
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            console.log("Hola,",  nombre);
            resolve();
        },  100);    
    });
}


function hablar(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Soy una promesa ejecutandose");
            resolve();
        }, 0);
    })  
}


function Adios(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Adios,", nombre);
            resolve();
        },  0);
    });
}   




// 
console.log('iniciando el proceso')
Hola('Pedro')
    .then(hablar)
    .then(Adios)
    .then(hablar)
    .then((nombre) => {
        console.log('Terminado el proceso');
    })
    .catch(console.error(error));
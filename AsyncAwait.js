async function Hola(nombre){    
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            console.log("Hola,",  nombre);
            resolve();
        },  100);    
    });
}


async function hablar(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Soy una promesa ejecutandose");
            resolve();
        }, 0);
    })  
}


async function Adios(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Adios,", nombre);
            resolve();
        },  0);
    });
}   


async function main(){
    await Hola('Pedro');
    await hablar();
    await hablar();
    await hablar();
    await Adios();
}

main();
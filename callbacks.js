/*
function soyAsincrono(miCallback){
    console.log("Hola, soy una funcion asincrona");
    setTimeout(function(){
        console.log("estoy siendo asincrono");
        miCallback();
    },  1000);
    

}

console.log("iniciando proceso");

soyAsincrono(function(){
    console.log("Terminando proceso");
});
*/


function iniciar(Callback1){
    setTimeout(function(){
        console.log("Iniciando proceso");
        Callback1();
    }, 0)
}

function Hola(nombre, Callback2){    
    setTimeout(function(){
        console.log("Hola,",  nombre);
        Callback2();
    },  0);
}

function Adios(nombre, Callback3){
    setTimeout(function(){
        console.log("Adios,", nombre);
        Callback3();
    },  0);
    
}

function finalizar(Callback4){
    setTimeout(function(){
        console.log("Finalizar programa");
    }, 0);
}

iniciar(function(){
    Hola('Pedro', function(){
        Adios('Pedro', function(){
            finalizar(function(){

            })
        })
    })
    
})















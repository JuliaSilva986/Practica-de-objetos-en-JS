// Ejercicio leccion "Introducción a Objetos en JavaScript"

/*Crear un objeto "auto" con propiedades como marca, modelo, año, 
 y un método mostrarInfo que imprima la información del auto.*/

 let auto={
    "marca":"Toyota",
    "modelo": "Corolla",
    "año":2020,
    "mostrarInfo": function(){
        console.log("la marca del auto es " + auto.marca + " el modelo es "+ auto.modelo + " y el año es " + auto.año);
    }
 }

auto.mostrarInfo();

// Modela cualquier otro objeto del mundo real que prefieras con JS de manera similar.

let persona = {
    nombre: "Alicia",
    edad: 25,
    saludar: function() {
        console.log("Hola soy "+ persona["nombre"] + " y tengo " + persona["edad"] + " años");
    }
};

persona.saludar();
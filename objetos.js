// Problema: Crear objeto a partir de un Libro

/*
Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.

Instrucciones para resolver el problema:
-Cada libro debe ser un objeto con las siguientes propiedades: 
titulo:(string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, 
estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
-También debe tener un método describirLibro: (method) método para imprimir la información básica del libro.
Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].
-Opcional: agregar una propiedad que contenga la lista de capítulos del libro 
y métodos que permitan agregar y eliminar capítulos del libro. */

let libro={
    "titulo": "Linear Algebra Done Right",
    "autor": "Sheldon Axler",
    "año": 1995,
    "estado": "disponible",
    "describirLibro": function(){
        console.log("Libro titulado "+this.titulo+", escrito por "+this.autor+", en el año "+this.año+", el estado es: "+this.estado);
    },
    "capitulos del libro": ["Vector spaces", "Finite-Dimensional Vector Spaces", "Linear maps", "Polynomials", "Eigenvalues and Eigenvectors", "Inner product spaces"],
    "agregarCapitulo": function agregar(capitulo){
        this["capitulos del libro"].push(capitulo);
    },
    "eliminarCapitulo": function eliminar(capitulo){
        let indice=libro["capitulos del libro"].indexOf(capitulo);
        this["capitulos del libro"].splice(indice,1);
    }
};

libro.agregarCapitulo("Agregado");
libro.eliminarCapitulo("Vector spaces");
console.log(libro["capitulos del libro"]);
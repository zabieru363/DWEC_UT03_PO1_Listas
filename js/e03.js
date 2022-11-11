"use strict";

function create() {
    return [];
}

function isEmpty(set) {
    return set.length === 0;
}

function size(set) {
    return set.length;
}

function add(set, elem) {
    const found = set.some(function(element) {
        return elem.ISBN === element.ISBN;
    });

    if(!found) set.push(elem);

    return size(set);
}

function has(set, elem) {
    return set.some(function(element) {
        return elem.ISBN === element.ISBN;
    });
}

function toString(set) {
    return set.reduce(function(str, book, index){
        return index !== 0 ? str + " - " +  book.title : str + book.title;
    }, "");
}

/**
 * Función principal de testeo para probar
 * las diferentes funciones de la práctica.
 */
 function test() {
    const book1 = {
      ISBN: "978-84-9804-654-0",
      title: "El Quijote",
      author: "Miguel de Cervantes",
      publicationDate: new Date(1605, 0, 1),
      price: 20,
    };

    const book2 = {
      ISBN: "843-07-8680-814-9",
      title: "El arte de la guerra",
      author: "Nora Steinbrun",
      publicationDate: new Date(2018, 10, 30),
      price: 32,
    };

    const book3 = {
      ISBN: "914-46-6086-292-7",
      title: "El libro negro del programador",
      author: "Rafael Gómez Blanes",
      publicationDate: new Date(2014, 3, 4),
      price: 20.45,
    };

    const book4 = {
      ISBN: "411-06-3922-591-3",
      title: "Un nuevo thriller trepidante",
      author: "Karen M. McManus",
      publicationDate: new Date(2018, 5, 22),
      price: 18,
    };

    // Objeto vácio para hacer las pruebas.
    const book5 = {};

    // Objeto con un ISBN inválido para hacer pruebas.
    const book6 = {
        ISBN: "41591-3",
        title: "Libro random",
        author: "Jugador de LoL promedio",
        publicationDate: new Date(2021, 11, 3),
        price: 18,
    };

    // ! PROBANDO FUNCIÓN CREATE.
    const set = create();

    // ! PROBANDO FUNCIÓN ISEMPTY.
    console.log(isEmpty(set) ? "El conjunto está vacío" : "");

    // ! PROBANDO FUNCIÓN SIZE.
    console.log("Tamaño del conjunto " + size(set));

    // ! PROBANDO FUNCIÓN ADD.
    console.log("Total de elementos " + add(set, book1));

    // * Intentando añadir un elemento que ya está en el conjunto.
    console.log("Total de elementos " + add(set, book1));
    // * Y ahora uno que no está.
    console.log("Total de elementos " + add(set, book2));

    // ! PROBANDO FUNCIÓN HAS.
    console.log(has(set, book1) ? "Encontrado" : "No encontrado");
    
    // * Y ahora uno que no está.
    console.log(has(set, book3) ? "Encontrado" : "No encontrado");

    // ! PROBANDO FUNCIÓN TOSTRING.
    console.log(toString(set));
}

test();
"use strict";

// * VARIABLES AUXILIARES.

/**
 * Variable JSON que hace de diccionario de colores para
 * mostrar con colores los mensajes por pantalla. 
 */
 const dictionaryColors = {
    printMessage : "#00C2C8",
    functionTitle : "#00C800",
    exception : "#CD0000",
    errorName : "#0500FF",

    setColor : function(color) {
        return "color: " + dictionaryColors[color];
    }
};

// * FUNCIONES.

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
    if(!elem.ISBN || !elem.title) {
        throw {
            name : "Error de tipos:",
            message : "El elemento no es un libro"
        };
    }

    const regex = /[0-9]{3}-[0-9]{2}-[0-9]{4}-[0-9]{3}-[0-9]?/;

    if(!regex.test(elem.ISBN)) {
        throw {
            name : "Error de formato:",
            message : "ISBN no válido."
        };
    }

    const found = set.some(function(element) {
        return elem.ISBN === element.ISBN;
    });

    if(found) {
        throw {
            name : "Error de conjunto:",
            message : "El elemento ya está en el conjunto"
        };
    }

    set.push(elem);

    return size(set);
}

function has(set, elem) {
    if(!elem.ISBN || !elem.title) {
        throw {
            name : "Error de tipos:",
            message : "El elemento no es un libro."
        };
    }

    const regex = /[0-9]{3}-[0-9]{2}-[0-9]{4}-[0-9]{3}-[0-9]?/;

    if(!regex.test(elem.ISBN)) {
        throw {
            name : "Error de formato:",
            message : "ISBN no válido."
        };
    }

    return set.some(function(element) {
        return elem.ISBN === element.ISBN;
    });
}

function toString(set) {
    // Esta excepción me pareció necesaria.
    if(isEmpty(set)) {
        throw {
            name : "Error de conjunto",
            message : "El conjunto está vacío."
        };
    }

    return set.reduce(function(str, book, index){
        return index !== 0 ? 
        str + "ISBN: " +  book.ISBN + " - " 
        + "TITLE: " +   book.title + " - "
        + "AUTHOR: " + book.author + " - "
        + "DATE: " + book.publicationDate + " - "
        + "PRICE: " + book.price + "\n"

        : str + "ISBN: " +  book.ISBN + " " 
        + "TITLE: " +   book.title + " "
        + "AUTHOR: " + book.author + " "
        + "DATE: " + book.publicationDate + " "
        + "PRICE: " + book.price;
    }, "");
}

function clear(set) {
    set.length = 0;
}

function remove(set, elem) {
    if(!elem.ISBN || !elem.title) {
        throw {
            name : "Error de tipos:",
            message : "El elemento no es un libro."
        };
    }

    const regex = /[0-9]{3}-[0-9]{2}-[0-9]{4}-[0-9]{3}-[0-9]?/;

    if(!regex.test(elem.ISBN)) {
        throw {
            name : "Error de formato:",
            message : "ISBN no válido."
        };
    }

    let removed = false;

    const pos = set.findIndex(function(element) {
        return elem.ISBN === element.ISBN;
    });

    if(pos !== -1) {
        set.splice(pos, 1);
        removed = true;
    }

    return removed;
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
    console.log("%cFUNCIÓN ISEMPTY", dictionaryColors.setColor("functionTitle"));
    console.log(isEmpty(set) ? "%cEl conjunto está vacío" : "%c", dictionaryColors.setColor("printMessage"));

    // ! PROBANDO FUNCIÓN SIZE.
    console.log("%cFUNCIÓN SIZE", dictionaryColors.setColor("functionTitle"));
    console.log("%cTamaño del conjunto " + size(set), dictionaryColors.setColor("printMessage"));
    
    // ! PROBANDO FUNCIÓN ADD.
    console.log("%cFUNCIÓN SIZE", dictionaryColors.setColor("functionTitle"));
    console.log("%cTotal de elementos " + add(set, book1), dictionaryColors.setColor("printMessage"));
    
    // * ERRORES QUE ARROJA ADD.

    console.log("%cERRORES ADD", dictionaryColors.setColor("functionTitle"));

    // ? El elemento no es un libro.
    console.log("%cEl elemento no es un libro", dictionaryColors.setColor("errorName"));
    try {
        console.log("Total de elementos " + add(set, book5));
    } catch (error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));
    }

    // ? El libro no tiene un ISBN válido.
    console.log("%c- El libro no tiene un ISBN válido.", dictionaryColors.setColor("errorName"));
    try {
        console.log("%cNúmero de elementos en la lista " + add(set, book6), dictionaryColors.setColor("printMessage"));
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));   // Aquí se produce una excepción.
    }

    // ? El elemento ya está en el conjunto.
    console.log("%c- El elemento ya está en el conjunto.", dictionaryColors.setColor("errorName"));
    try {
        console.log("Total de elementos " + add(set, book1));
    } catch (error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));
    }
    
    // ! PROBANDO FUNCIÓN HAS.
    console.log(has(set, book1) ? "%cEncontrado" : "%cNo encontrado", dictionaryColors.setColor("printMessage"));
    
    // * Y ahora uno que no está.
    console.log(has(set, book3) ? "%cEncontrado" : "%cNo encontrado", dictionaryColors.setColor("printMessage"));

    // * ERRORES QUE ARROJA HAS.

    // ? El elemento no es un libro.
    console.log("%c- El elemento no es un libro.", dictionaryColors.setColor("errorName"));
    try {
        console.log("Total de elementos " + has(set, book5));
    } catch (error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception")); 
    }

    // ? El libro no tiene un ISBN válido.
    console.log("%c- El libro no tiene un ISBN válido.", dictionaryColors.setColor("errorName"));
    try {
        console.log("%cNúmero de elementos en la lista " + has(set, book6), dictionaryColors.setColor("printMessage"));
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));   // Aquí se produce una excepción.
    }
    
    // ! PROBANDO FUNCIÓN TOSTRING.
    console.log("%c" + toString(set), dictionaryColors.setColor("printMessage"));

    // * ERRORES QUE ARROJA TOSTRING.

    // ? El conjunto está vacío.
    console.log("%c- El conjunto está vacío.", dictionaryColors.setColor("errorName"));
    clear(set);

    try {
        console.log(toString(set));
    } catch (error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception")); 
    }

    console.log("%cTotal de elementos " + add(set, book1), dictionaryColors.setColor("printMessage"));
    console.log("%cTotal de elementos " + add(set, book2), dictionaryColors.setColor("printMessage"));
    
    // ! PROBANDO FUNCIÓN CLEAR.
    clear(set);
    console.log("%cTamaño del conjunto " + size(set), dictionaryColors.setColor("printMessage"));

    console.log("%cTotal de elementos " + add(set, book1), dictionaryColors.setColor("printMessage"));
    console.log("%cTotal de elementos " + add(set, book2), dictionaryColors.setColor("printMessage"));

    // ! PROBANDO FUNCIÓN REMOVE.
    console.log(remove(set, book1) ? "%cEliminado" : "%cNo se pudo eliminar el libro.", dictionaryColors.setColor("printMessage"));

    // * Intentamos eliminar un libro que no está en el conjunto.
    console.log(remove(set, book3) ? "%cEliminado" : "%cNo se pudo eliminar el libro.", dictionaryColors.setColor("printMessage"));

    // * ERRORES QUE ARROJA REMOVE.

    // ? El elemento no es un libro.
    console.log("%c- El elemento no es un libro.", dictionaryColors.setColor("errorName"));
    try {
        console.log(remove(set, book5) ? "Eliminado" : "No se pudo eliminar el libro.");
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));
    }

    // ? El libro no tiene un ISBN válido.
    console.log("%c- El libro no tiene un ISBN válido.", dictionaryColors.setColor("errorName"));
    try {
        console.log("%cNúmero de elementos en la lista " + remove(list, book6), dictionaryColors.setColor("printMessage"));
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));   // Aquí se produce una excepción.
    }
}

test();
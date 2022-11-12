// ! COSAS A TENER EN CUENTA:
/* - Estoy utilizando la extensión better comments para hacer
comentarios destacados por si hay algún caracter extraño en los
comentarios de mi código. */

/* Se me ocurrió hacer un diccionario de colores para utilizarlo
en la función de testeo y poder usar colores por consola. */

/* - En la función add también es posible hacer un return de
size(list) o de list.length pero prefiero retornar list.push(elem)
ya que es mucho más sencillo y se escribe menos código. */

/* - La función capacity no necesita el parametro list ya que tiene
acceso a la constante MAX_SIZE por lo que no es necesario pasarle nada. */

"use strict";

const MAX_SIZE = 5; // Número máximo de elementos que puede tener la lista.

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

// * FUNCIONES

/**
 * Crea una lista.
 * @returns Un array vacío
 */
function create() {
    return [];
}

/**
 * Comprueba si la lista está vacía.
 * @param {*} list La lista de elementos.
 * @returns True si está vacía, false si no es así.
 */
function isEmpty(list) {
    return list.length === 0;
}

/**
 * Comprueba si la lista está llena.
 * @param {*} list La lista de elementos.
 * @returns True si está llena, false si no es así.
 */
function isFull(list) {
    return list.length === MAX_SIZE;
}

/**
 * Devuelve el número de elementos que hay en la lista.
 * @param {*} list La lista de elementos.
 * @returns El número de elementos o tamaño de la lista.
 */
function size(list) {
    return list.length;
}

/**
 * Añade un elemento a la lista y devuelve el número
 * de elementos totales una vez añadido.
 * @param {*} list La lista de elementos.
 * @param {*} elem El elemento a añadir.
 * @returns El nuevo tamaño de la lista.
 */
function add(list, elem) {
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

    if(isFull(list)) {
        throw {
            name : "Error de lista:",
            message : "La lista está llena."
        };
    }

    return list.push(elem); // No necesitamos retornar list.length ya que push devuelve el length del array.
}

/**
 * Añade un elemento a la lista a partir de la posición
 * que se le pase cómo parametro. Devuelve el nuevo tamaño
 * de la lista una vez añadido el elemento.
 * @param {*} list La lista de elementos.
 * @param {*} elem El elemento a añadir.
 * @param {*} index La posición donde se quiere empezar a añadir.
 * @returns El nuevo tamaño de la lista.
 */
function addAt(list, elem, index) {
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

    if(isFull(list)) {
        throw {
            name : "Error de lista:",
            message : "La lista está llena."
        };
    }

    if(index < 0 || index > MAX_SIZE) {
        throw {
            name : "Error de lista:",
            message : "Indice fuera de limites de la lista.."
        };
    }

    list.splice(index, 0, elem);
    return size(list);
}

/**
 * Busca un libro en la lista en base al indice
 * que le pasemos cómo parametro. 
 * @param {*} list La lista de elementos.
 * @param {*} index La posición del elemento a buscar.
 * @returns El elemento buscado.
 */
function get(list, index) {
    // Esta excepción me pareció necesaria.
    if(isEmpty(list)) {
        throw {
            name : "Error de lista:",
            message : "La lista está vacía."
        };
    }

    if(index < 0 || index > MAX_SIZE) {
        throw {
            name : "Error de lista:",
            message : "Indice fuera de limites de la lista.."
        };
    }

    return list.find(function(book, pos) {
        if(pos === index) return book;
    });
}

/**
 * Imprime la lista de libros en formato cadena.
 * @param {*} list La lista de elementos.
 * @returns Un string con todos los titulos de los libros separados por -.
 */
function toString(list) {
    // Esta excepción me pareció necesaria.
    if(isEmpty(list)) {
        throw {
            name : "Error de lista",
            message : "La lista está vacía."
        }
    }

    return list.reduce(function(str, book, index){
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

/**
 * Devuelve la posición del elemento que se le pasa cómo parametro.
 * @param {*} list La lista de elementos.
 * @param {*} elem El elemento del cuál queremos saber la posición.
 * @returns La posición del elemento, -1 si no lo encuentra.
 */
function indexOf(list, elem) {
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

    // Esta excepción me pareció necesaria.
    if(isEmpty(list)) {
        throw {
            name : "Error de lista:",
            message : "La lista está vacía."
        };
    }

    return list.findIndex(function(book) {
        return elem.ISBN === book.ISBN;
    });
}

/**
 * Devuelve la posición del elemento que se le pasa cómo parametro
 * pero comenzando por el final.
 * @param {*} list La lista de elementos.
 * @param {*} elem El elemento del cuál queremos saber la posición.
 * @returns La posición del elemento, -1 si no lo encuentra.
 */
function lastIndexOf(list, elem) {
    if(!elem.ISBN || !elem.title) {
        throw {
            name : "Error de tipos:",
            message : "El elemento no es un libro."
        };
    }

    const regex = /[0-9]{3}-[0-9]{2}-[0-9]{4}-[0-9]{3}-[0-9]?/;

    if(!regex.test(elem.ISBN)) {
        throw {
            name : "Error de formato",
            message : "ISBN no válido."
        };
    }

    // Esta excepción me pareció necesaria.
    if(isEmpty(list)) {
        throw {
            name : "Error de lista:",
            message : "La lista está vacía."
        };
    }

    // Encontré este método mirando en el API.
    return list.findLastIndex(function(book) {
        return elem.ISBN === book.ISBN;
    });
}

/**
 * Devuelve el número máximo de elementos que puede almacenar la lista.
 * @returns El tamaño máximo de la lista.
 */
function capacity() {
    return MAX_SIZE;
}

/**
 * Vacía la lista.
 * @param {*} list La lista de elementos.
 */
function clear(list) {
    list.length = 0;
}

/**
 * Devuelve el primer elemento de la lista.
 * @param {*} list La lista de elementos.
 * @returns El primer elemento de la lista.
 */
function firstElement(list) {
    if(isEmpty(list)) {
        throw {
            name : "Error de lista:",
            message : "La lista está vacía."
        };
    }

    return list[0];
}

/**
 * Devuelve el último elemento de la lista.
 * @param {*} list La lista de elementos.
 * @returns El último elemento de la lista.
 */
function lastElement(list) {
    if(isEmpty(list)) {
        throw {
            name : "Error de lista:",
            message : "La lista está vacía."
        };
    }

    return list[list.length - 1];
}

/**
 * Elimina un elemento de la lista en base a la posición
 * indicada. Devuelve el elemento que se ha eliminado.
 * @param {*} list La lista de elementos
 * @param {*} index La posición a partir de donde se quiere eliminar.
 * @returns El elemento eliminado.
 */
function remove(list, index) {
    if(index < 0 || index > MAX_SIZE) {
        throw {
            name : "Error de lista:",
            message : "Indice fuera de limites de la lista.."
        };
    }

    // Esta excepción me pareció necesaria.
    if(isEmpty(list)) {
        throw {
            name : "Error de lista",
            message : "La lista está vacía."
        }
    }

    return list.splice(index, 1);   // Splice devuelve un array con los elementos eliminados.
}

/**
 * Elimina un elemento de la lista que se le pase cómo
 * parametro. Indica también si se ha eliminado correctamente o no.
 * @param {*} list La lista de elementos
 * @param {*} elem El elemento que se quiere eliminar.
 * @returns True si se ha eliminado el libro, false si no es así.
 */
function removeElement(list, elem) {
    if(!elem.ISBN || !elem.title) {
        throw {
            name : "Error de tipos:",
            message : "El elemento no es un libro."
        };
    }

    const regex = /[0-9]{3}-[0-9]{2}-[0-9]{4}-[0-9]{3}-[0-9]?/;

    if(!regex.test(elem.ISBN)) {
        throw {
            name : "Error de formato",
            message : "ISBN no válido."
        };
    }

    // Esta excepción me pareció necesaria.
    if(isEmpty(list)) {
        throw {
            name : "Error de lista",
            message : "La lista está vacía."
        }
    }

    let removed = false;
    const pos = indexOf(list, elem);

    if(pos !== -1) {
        list.splice(pos, 1);
        removed = true;
    }

    return removed;
}

/**
 * Reemplaza un elemento de la lista en base al indice que se le
 * pasa cómo parámetro. Devuelve el elemento anterior una vez reemplazado.
 * @param {*} list La lista de elementos
 * @param {*} elem El elemento a reemplazar.
 * @param {*} index La posición a partir de donde se quiere reemplazar.
 * @returns El elemento anterior.
 */
function set(list, elem, index) {
    if(!elem.ISBN || !elem.title) {
        throw {
            name : "Error de tipos:",
            message : "El elemento no es un libro."
        };
    }

    const regex = /[0-9]{3}-[0-9]{2}-[0-9]{4}-[0-9]{3}-[0-9]?/;

    if(!regex.test(elem.ISBN)) {
        throw {
            name : "Error de formato",
            message : "ISBN no válido."
        };
    }

    if(index < 0 || index > MAX_SIZE) {
        throw {
            name : "Error de lista:",
            message : "Indice fuera de limites de la lista.."
        };
    }

    // Esta excepción me pareció necesaria.
    if(isEmpty(list)) {
        throw {
            name : "Error de lista",
            message : "La lista está vacía."
        }
    }
    return list.splice(index, 1, elem);
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
    const list = create();  // Aquí creo la lista.

    // ! PROBANDO FUNCIÓN ISEMPTY.
    console.log("%cFUNCIÓN ISEMPTY", dictionaryColors.setColor("functionTitle"));
    console.log(isEmpty(list) ? "%cLa lista está vacía" : "%c", dictionaryColors.setColor("printMessage"));    // La lista está vacía.

    // ! PROBANDO FUNCIÓN ISFULL.
    console.log("%cFUNCIÓN ISFULL", dictionaryColors.setColor("functionTitle"));
    console.log(isFull(list) ? "%cLa lista está llena" : "%c", dictionaryColors.setColor("printMessage")); // Empty string.

    // ! PROBANDO FUNCIÓN SIZE.
    console.log("%cFUNCIÓN SIZE", dictionaryColors.setColor("functionTitle"));
    console.log("%cNúmero de elementos en la lista " + size(list), dictionaryColors.setColor("printMessage"));   // 0 porque no hemos añadido ninguno.

    // ! PROBANDO LA FUNCIÓN ADD.
    console.log("%cFUNCIÓN ADD", dictionaryColors.setColor("functionTitle"));
    console.log("%cNúmero de elementos en la lista " + add(list, book1), dictionaryColors.setColor("printMessage")); // Añado el libro 1.

    // * ERRORES QUE ARROJA ADD.

    console.log("%cERRORES ADD", dictionaryColors.setColor("functionTitle"));

    // ? El elemento no es un libro.
    console.log("%c- El elemento no es un libro", dictionaryColors.setColor("errorName"));
    try {
        console.log("Número de elementos en la lista " + add(list, book5));
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));  // Aquí se produce una excepción.
    }

    // ? La lista está llena.
    console.log("%c- La lista está llena", dictionaryColors.setColor("errorName"));
    console.log("%cNúmero de elementos en la lista " + add(list, book2), dictionaryColors.setColor("printMessage"));
    console.log("%cNúmero de elementos en la lista " + add(list, book2), dictionaryColors.setColor("printMessage"));
    console.log("%cNúmero de elementos en la lista " + add(list, book2), dictionaryColors.setColor("printMessage"));
    console.log("%cNúmero de elementos en la lista " + add(list, book2), dictionaryColors.setColor("printMessage"));

    try {
        console.log("Número de elementos en la lista " + add(list, book1));
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));  // Aquí se produce una excepción.
    }

    clear(list);    // Vaciamos la lista para probar las demás funciones.

    // ? El libro no tiene un ISBN válido.
    console.log("%c- El libro no tiene un ISBN válido.", dictionaryColors.setColor("errorName"));
    try {
        console.log("%cNúmero de elementos en la lista " + add(list, book6), dictionaryColors.setColor("printMessage"));
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));   // Aquí se produce una excepción.
    }

    // ! PROBANDO LA FUNCIÓN ADDAT.
    console.log("%cFUNCIÓN ADDAT", dictionaryColors.setColor("functionTitle"));
    console.log("%cNúmero de elementos en la lista " + addAt(list, book3, 0), dictionaryColors.setColor("printMessage"));    // Añado el libro 3 en la posición 0.

    // * ERRORES QUE ARROJA ADDAT.

    console.log("%cERRORES ADDAT", dictionaryColors.setColor("functionTitle"));

    // ? El elemento no es un libro.
    console.log("%c- El elemento no es un libro", dictionaryColors.setColor("errorName"));
    try {
        console.log("Número de elementos en la lista " + addAt(list, book5, 1));
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));  // Aquí se produce una excepción.
    }

    // ? La lista está llena.
    console.log("%c- La lista está llena", dictionaryColors.setColor("errorName"));
    console.log("%cNúmero de elementos en la lista " + addAt(list, book1, 0), dictionaryColors.setColor("printMessage"));
    console.log("%cNúmero de elementos en la lista " + addAt(list, book1, 0), dictionaryColors.setColor("printMessage"));
    console.log("%cNúmero de elementos en la lista " + addAt(list, book1, 0), dictionaryColors.setColor("printMessage"));
    console.log("%cNúmero de elementos en la lista " + addAt(list, book1, 0), dictionaryColors.setColor("printMessage"));

    try {
        console.log("Número de elementos en la lista " + addAt(list, book2, 1));
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));  // Aquí se produce una excepción.
    }

    clear(list);    // Vaciamos la lista para probar las demás funciones.

    // ? El libro no tiene un ISBN válido.
    console.log("%c- El libro no tiene un ISBN válido.", dictionaryColors.setColor("errorName"));
    try {
        console.log("%cNúmero de elementos en la lista " + addAt(list, book6, 0), dictionaryColors.setColor("printMessage"));
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));   // Aquí se produce una excepción.
    }

    // ? El indice está fuera de los limites de la lista.
    console.log("%c- El indice está fuera de los limites de la lista.", dictionaryColors.setColor("errorName"));
    try {
        console.log("Número de elementos en la lista " + addAt(list, book2, 22));
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));  // Aquí se produce una excepción.
    }

    console.log("%cNúmero de elementos en la lista " + addAt(list, book1, 0), dictionaryColors.setColor("printMessage"));
    console.log("%cNúmero de elementos en la lista " + addAt(list, book2, 0), dictionaryColors.setColor("printMessage"));
    console.log("%cNúmero de elementos en la lista " + addAt(list, book3, 0), dictionaryColors.setColor("printMessage"));
    console.log("%cNúmero de elementos en la lista " + addAt(list, book4, 0), dictionaryColors.setColor("printMessage"));

    // ! PROBANDO LA FUNCIÓN GET.
    console.log("%cFUNCIÓN GET", dictionaryColors.setColor("functionTitle"));
    console.log(get(list, 0));  // Cojo el elemento que está en la posición 0.

    // * ERRORES QUE ARROJA GET.

    console.log("%cERRORES GET", dictionaryColors.setColor("functionTitle"));

    // ? El indice está fuera de los limites de la lista.
    console.log("%c- El indice está fuera de los limites de la lista.", dictionaryColors.setColor("errorName"));
    try {
        console.log(get(list, 22));
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));  // Aquí se produce una excepción.
    }

    // ? La lista está vacía.
    console.log("%c- La lista está vacía.", dictionaryColors.setColor("errorName"));
    clear(list);

    try {
        console.log(get(list, 2));
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));  // Aquí se produce una excepción.
    }

    console.log("%cNúmero de elementos en la lista " + addAt(list, book1, 0), dictionaryColors.setColor("printMessage"));    
    console.log("%cNúmero de elementos en la lista " + addAt(list, book2, 0), dictionaryColors.setColor("printMessage"));    
    console.log("%cNúmero de elementos en la lista " + addAt(list, book3, 0), dictionaryColors.setColor("printMessage"));    
    console.log("%cNúmero de elementos en la lista " + addAt(list, book4, 0), dictionaryColors.setColor("printMessage"));    

    // ! PROBANDO LA FUNCIÓN TOSTRING.
    console.log("%cFUNCIÓN TOSTRING", dictionaryColors.setColor("functionTitle"));
    console.log("%c" + toString(list), dictionaryColors.setColor("printMessage"));    // Imprime todos los titulos de los libros.

    // * ERRORES QUE ARROJA TOSTRING.

    console.log("%cERRORES TOSTRING", dictionaryColors.setColor("functionTitle"));

    // ? La lista está vacía.
    console.log("%c- La lista está vacía.", dictionaryColors.setColor("errorName"));
    clear(list);

    try {
        console.log(toString(list));
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));  // Aquí se produce una excepción.
    }

    console.log("%cNúmero de elementos en la lista " + addAt(list, book1, 0), dictionaryColors.setColor("printMessage"));   
    console.log("%cNúmero de elementos en la lista " + addAt(list, book2, 0), dictionaryColors.setColor("printMessage"));   
    console.log("%cNúmero de elementos en la lista " + addAt(list, book3, 0), dictionaryColors.setColor("printMessage"));    

    // ! PROBANDO LA FUNCIÓN INDEXOF.
    console.log("%cFUNCIÓN INDEXOF", dictionaryColors.setColor("functionTitle"));
    let pos = indexOf(list, book1);
    console.log(pos !== -1 ? "%cEl elemento se encuentra en la posición " + pos : "%cElemento no encontrado", dictionaryColors.setColor("printMessage"));  // Encuentra el libro
    pos = indexOf(list, book4);
    console.log(pos !== -1 ? "%cEl elemento se encuentra en la posición " + pos : "%cElemento no encontrado", dictionaryColors.setColor("printMessage"));   // Aquí no lo encuentra.

    // * ERRORES QUE ARROJA INDEXOF.

    console.log("%cERRORES INDEXOF", dictionaryColors.setColor("functionTitle"));

    // ? El elemento no es un libro.
    console.log("%c- El elemento no es un libro.", dictionaryColors.setColor("errorName"));
    try {
        pos = indexOf(list, book5);
        console.log(pos !== -1 ? "El elemento se encuentra en la posición " + pos : "Elemento no encontrado"); 
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));  // Aquí se produce una excepción.
    }

    // ? El libro no tiene un ISBN válido.
    console.log("%c- El libro no tiene un ISBN válido.", dictionaryColors.setColor("errorName"));
    try {
        pos = indexOf(list, book6);
        console.log(pos !== -1 ? "El elemento se encuentra en la posición " + pos : "Elemento no encontrado");
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));   // Aquí se produce una excepción.
    }

    // ? La lista está vacía.
    console.log("%c- La lista está vacía.", dictionaryColors.setColor("errorName"));
    clear(list);

    try {
        pos = indexOf(list, book2);
        console.log(pos !== -1 ? "El elemento se encuentra en la posición " + pos : "Elemento no encontrado"); 
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));  // Aquí se produce una excepción.
    }

    console.log("%cNúmero de elementos en la lista " + addAt(list, book1, 0), dictionaryColors.setColor("printMessage")); 
    console.log("%cNúmero de elementos en la lista " + addAt(list, book2, 0), dictionaryColors.setColor("printMessage")); 
    console.log("%cNúmero de elementos en la lista " + addAt(list, book3, 0), dictionaryColors.setColor("printMessage")); 
    
    // ! PROBANDO LA FUNCIÓN LASTINDEXOF.
    console.log("%cFUNCIÓN LASTINDEXOF", dictionaryColors.setColor("functionTitle"));
    pos = lastIndexOf(list, book1);
    console.log(pos !== -1 ? "%cEl elemento se encuentra en la posición " + pos : "%cElemento no encontrado", dictionaryColors.setColor("printMessage"));   // Encuentra el libro
    pos = lastIndexOf(list, book4);
    console.log(pos !== -1 ? "%cEl elemento se encuentra en la posición " + pos : "%cElemento no encontrado", dictionaryColors.setColor("printMessage"));   // Aquí no lo encuentra.

    // * ERRORES QUE ARROJA LASTINDEXOF.

    console.log("%cERRORES LASTINDEXOF", dictionaryColors.setColor("functionTitle"));

    // ? El elemento no es un libro.
    console.log("%c- El elemento no es un libro.", dictionaryColors.setColor("errorName"));
    try {
        pos = lastIndexOf(list, book5);
        console.log(pos !== -1 ? "El elemento se encuentra en la posición " + pos : "Elemento no encontrado"); 
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));  // Aquí se produce una excepción.
    }

    // ? El libro no tiene un ISBN válido.
    console.log("%c- El libro no tiene un ISBN válido.", dictionaryColors.setColor("errorName"));
    try {
        pos = lastIndexOf(list, book6);
        console.log(pos !== -1 ? "El elemento se encuentra en la posición " + pos : "Elemento no encontrado");
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));   // Aquí se produce una excepción.
    }

    // ? La lista está vacía.
    console.log("%c- La lista está vacía.", dictionaryColors.setColor("errorName"));
    clear(list);

    try {
        pos = indexOf(list, book2);
        console.log(pos !== -1 ? "El elemento se encuentra en la posición " + pos : "Elemento no encontrado"); 
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));  // Aquí se produce una excepción.
    }

    console.log("%cNúmero de elementos en la lista " + addAt(list, book1, 0), dictionaryColors.setColor("printMessage")); 
    console.log("%cNúmero de elementos en la lista " + addAt(list, book2, 0), dictionaryColors.setColor("printMessage")); 
    console.log("%cNúmero de elementos en la lista " + addAt(list, book3, 0), dictionaryColors.setColor("printMessage")); 
    console.log("%cNúmero de elementos en la lista " + addAt(list, book4, 0), dictionaryColors.setColor("printMessage")); 

    // ! PROBANDO LA FUNCIÓN CAPACITY.
    console.log("%cFUNCIÓN CAPACITY", dictionaryColors.setColor("functionTitle"));
    console.log("%cNúmero máximo de elementos que se pueden almacenar en la lista " + capacity(), dictionaryColors.setColor("printMessage"));    // 5

    // ! PROBANDO LA FUNCIÓN CLEAR.
    console.log("%cFUNCIÓN CLEAR", dictionaryColors.setColor("functionTitle"));
    clear(list);    // Aquí vacío la lista.
    console.log("%cNúmero de elementos de la lista " + size(list), dictionaryColors.setColor("printMessage"));

    // * Añadimos nuevos libros a la lista para probar las siguientes funciones.
    console.log("%cNúmero de elementos en la lista " + add(list, book1), dictionaryColors.setColor("printMessage"));
    console.log("%cNúmero de elementos en la lista " + add(list, book2), dictionaryColors.setColor("printMessage"));
    console.log("%cNúmero de elementos en la lista " + add(list, book3), dictionaryColors.setColor("printMessage"));

    // ! PROBANDO LA FUNCIÓN FIRSTELEMENT.
    console.log("%cFUNCIÓN FIRSTELEMENT", dictionaryColors.setColor("functionTitle"));
    console.log(firstElement(list));    // Cojo el primer elemento de la lista.

    console.log("%cERRORES FIRSTELEMENT", dictionaryColors.setColor("functionTitle"));

    // * ERRORES QUE ARROJA FIRSTELEMENT.

    // ? La lista está vacía.
    console.log("%c- La lista está vacía.", dictionaryColors.setColor("errorName"));
    clear(list);

    try {
        console.log(firstElement(list));
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));  // Aquí se produce una excepción.
    }

    console.log("%cNúmero de elementos en la lista " + add(list, book1), dictionaryColors.setColor("printMessage"));
    console.log("%cNúmero de elementos en la lista " + add(list, book2), dictionaryColors.setColor("printMessage"));
    console.log("%cNúmero de elementos en la lista " + add(list, book3), dictionaryColors.setColor("printMessage"));

    // ! PROBANDO LA FUNCIÓN LASTELEMENT.
    console.log("%cFUNCIÓN LASTELEMENT", dictionaryColors.setColor("functionTitle"));
    console.log(lastElement(list)); // Cojo el último elemento de la lista.

    console.log("%cERRORES FIRSTELEMENT", dictionaryColors.setColor("functionTitle"));

    // * ERRORES QUE ARROJA LASTELEMENT.

    // ? La lista está vacía.
    console.log("%c- La lista está vacía.", dictionaryColors.setColor("errorName"));
    clear(list);

    try {
        console.log(lastElement(list));
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));  // Aquí se produce una excepción.
    }

    console.log("%cNúmero de elementos en la lista " + add(list, book1), dictionaryColors.setColor("printMessage"));
    console.log("%cNúmero de elementos en la lista " + add(list, book2), dictionaryColors.setColor("printMessage"));
    console.log("%cNúmero de elementos en la lista " + add(list, book3), dictionaryColors.setColor("printMessage"));

    // ! PROBANDO LA FUNCIÓN REMOVE.
    console.log("%cFUNCIÓN REMOVE", dictionaryColors.setColor("functionTitle"));
    console.log(...remove(list, 0));   // Quito el primer elemento de la lista.

    console.log("%cERRORES REMOVE", dictionaryColors.setColor("functionTitle"));

    // * ERRORES QUE ARROJA REMOVE.

    // ? El indice está fuera de los limites de la lista.
    console.log("%c- El indice está fuera de los limites de la lista.", dictionaryColors.setColor("errorName"));
    try {
        console.log(...remove(list, 22));
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));  // Aquí se produce una excepción.
    }

    // ? La lista está vacía.
    console.log("%c- La lista está vacía.", dictionaryColors.setColor("errorName"));
    clear(list);

    try {
        console.log(...remove(list, 0));
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));  // Aquí se produce una excepción.
    }

    console.log("%cNúmero de elementos en la lista " + add(list, book1), dictionaryColors.setColor("printMessage"));
    console.log("%cNúmero de elementos en la lista " + add(list, book2), dictionaryColors.setColor("printMessage"));
    console.log("%cNúmero de elementos en la lista " + add(list, book3), dictionaryColors.setColor("printMessage"));

    // ! PROBANDO LA FUNCIÓN REMOVEELEMENT.
    console.log("%cFUNCIÓN REMOVEELEMENT", dictionaryColors.setColor("functionTitle"));
    if(removeElement(list, book2)) {
        console.log("%cEl elemento se ha eliminado correctamente.", dictionaryColors.setColor("printMessage"));   // Se ejecuta esto.
    } else {
        console.log("%cNo se pudo insertar el elemento.", dictionaryColors.setColor("printMessage"));
    }

    console.log("%cERRORES REMOVEELEMENT", dictionaryColors.setColor("functionTitle"));

    // * ERRORES QUE ARROJA REMOVEELEMENT.

    // ? El elemento no es un libro.
    console.log("%c- El elemento no es un libro.", dictionaryColors.setColor("errorName"));
    try {
        console.log(removeElement(list, book5));
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));  // Aquí se produce una excepción.
    }

    // ? El libro no tiene un ISBN válido.
    console.log("%c- El libro no tiene un ISBN válido.", dictionaryColors.setColor("errorName"));
    try {
        console.log(removeElement(list, book6));
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));   // Aquí se produce una excepción.
    }

    // ? La lista está vacía.
    console.log("%c- La lista está vacía.", dictionaryColors.setColor("errorName"));
    clear(list);

    try {
        console.log(remove(list, 0));
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));  // Aquí se produce una excepción.
    }

    console.log("%cNúmero de elementos en la lista " + add(list, book3), dictionaryColors.setColor("printMessage"));

    // ! PROBANDO LA FUNCIÓN SET.
    console.log("%cFUNCIÓN SET", dictionaryColors.setColor("functionTitle"));
    console.log(...set(list, book4, 0));   // Reemplaza el único libro que hay en este momento (book3) por book4.

    console.log("%cERRORES SET", dictionaryColors.setColor("functionTitle"));

    // * ERRORES QUE ARROJA SET
    
    // ? El elemento no es un libro.
    console.log("%c- El elemento no es un libro.", dictionaryColors.setColor("errorName"));
    try {
        console.log(...set(list, book5, 0));
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));  // Aquí se produce una excepción.
    }

    // ? El libro no tiene un ISBN válido.
    console.log("%c- El libro no tiene un ISBN válido.", dictionaryColors.setColor("errorName"));
    try {
        console.log(...set(list, book6, 0));
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));   // Aquí se produce una excepción.
    }

    // ? El indice está fuera de los limites de la lista.
    console.log("%c- El indice está fuera de los limites de la lista.", dictionaryColors.setColor("errorName"));
    try {
        console.log(...set(list, book2, 22));
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));  // Aquí se produce una excepción.
    }

    // ? La lista está vacía.
    console.log("%c- La lista está vacía.", dictionaryColors.setColor("errorName"));
    clear(list);

    try {
        console.log(...set(list, book2, 0));
    } catch(error) {
        console.log("%c" + error.name + " " + error.message, dictionaryColors.setColor("exception"));  // Aquí se produce una excepción.
    }
}

test();
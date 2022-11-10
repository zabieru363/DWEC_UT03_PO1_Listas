// ! COSAS A TENER EN CUENTA:
/* - Estoy utilizando la extensión better comments para hacer
comentarios destacados por si hay algún caracter extraño en los
comentarios de mi código. */

/* - En la función add también es posible hacer un return de
size(list) o de list.length pero prefiero retornar list.push(elem)
ya que es mucho más sencillo y se escribe menos código. */

/* - La función capacity no necesita el parametro list ya que tiene
acceso a la constante MAX_SIZE por lo que no es necesario pasarle nada. */

"use strict";

const MAX_SIZE = 5; // Número máximo de elementos que puede tener la lista.

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

    if(isFull(list)) {
        throw {
            name : "Error de lista:",
            message : "La lista está llena."
        };
    }

    if(index > MAX_SIZE) {
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
    return list.reduce(function(str, book, index){
        return index !== 0 ? str + " - " +  book.title : str + book.title;
    }, "");
}

/**
 * Devuelve la posición del elemento que se le pasa cómo parametro.
 * @param {*} list La lista de elementos.
 * @param {*} elem El elemento del cuál queremos saber la posición.
 * @returns La posición del elemento, -1 si no lo encuentra.
 */
function indexOf(list, elem) {
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
    return indexOf([...list].reverse(), elem);
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
    return list[0];
}

/**
 * Devuelve el último elemento de la lista.
 * @param {*} list La lista de elementos.
 * @returns El último elemento de la lista.
 */
function lastElement(list) {
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
    console.log(isEmpty(list) ? "La lista está vacía" : "");    // La lista está vacía.

    // ! PROBANDO FUNCIÓN ISFULL.
    console.log(isFull(list) ? "La lista está llena" : ""); // Empty string.

    // ! PROBANDO FUNCIÓN SIZE.
    console.log("Número de elementos en la lista " + size(list));   // 0 porque no hemos añadido ninguno.

    // ! PROBANDO LA FUNCIÓN ADD.
    console.log("Número de elementos en la lista " + add(list, book1)); // Añado el libro 1.

    // * ERRORES QUE ARROJA ADD.

    // ? El elemento no es un libro.
    try {
        console.log("Número de elementos en la lista " + add(list, book5));
    } catch(error) {
        console.log(error.name + " " + error.message);  // Aquí se produce una excepción.
    }

    // ? La lista está llena.
    console.log("Número de elementos en la lista " + add(list, book2));
    console.log("Número de elementos en la lista " + add(list, book3));
    console.log("Número de elementos en la lista " + add(list, book4));
    console.log("Número de elementos en la lista " + add(list, book1));

    try {
        console.log("Número de elementos en la lista " + add(list, book1));
    } catch(error) {
        console.log(error.name + " " + error.message);  // Aquí se produce una excepción.
    }

    clear(list);    // Vaciamos la lista para probar las demás funciones.

    // ! PROBANDO LA FUNCIÓN ADDAT.
    console.log("Número de elementos en la lista " + addAt(list, book3, 0));    // Añado el libro 3 en la posición 0.

    // ! PROBANDO LA FUNCIÓN GET.
    console.log(get(list, 0));  // Cojo el elemento que está en la posición 0.

    // ! PROBANDO LA FUNCIÓN TOSTRING.
    console.log(toString(list));    // El libro negro del programador - El Quijote.

    // ! PROBANDO LA FUNCIÓN INDEXOF.
    let pos = indexOf(list, book1);
    console.log(pos !== -1 ? "El elemento se encuentra en la posición " + pos : "Elemento no encontrado");  // Encuentra el libro
    pos = indexOf(list, book5);
    console.log(pos !== -1 ? "El elemento se encuentra en la posición " + pos : "Elemento no encontrado");  // Aquí no lo encuentra.
    
    // ! PROBANDO LA FUNCIÓN LASTINDEXOF.
    pos = lastIndexOf(list, book1);
    console.log(pos !== -1 ? "El elemento se encuentra en la posición " + pos : "Elemento no encontrado");  // Encuentra el libro
    pos = lastIndexOf(list, book4);
    console.log(pos !== -1 ? "El elemento se encuentra en la posición " + pos : "Elemento no encontrado");  // Aquí no lo encuentra.

    // ! PROBANDO LA FUNCIÓN CAPACITY.
    console.log("Número máximo de elementos que se pueden almacenar en la lista " + capacity());    // 5

    // ! PROBANDO LA FUNCIÓN CLEAR.
    clear(list);    // Aquí vacío la lista.
    console.log("Número de elementos de la lista " + size(list));

    // * Añadimos nuevos libros a la lista para probar las siguientes funciones.
    console.log("Número de elementos en la lista " + add(list, book1));
    console.log("Número de elementos en la lista " + add(list, book2));
    console.log("Número de elementos en la lista " + add(list, book3));

    // ! PROBANDO LA FUNCIÓN FIRSTELEMENT.
    console.log(firstElement(list));    // Cojo el primer elemento de la lista.

    // ! PROBANDO LA FUNCIÓN LASTELEMENT.
    console.log(lastElement(list)); // Cojo el último elemento de la lista.

    // ! PROBANDO LA FUNCIÓN REMOVE.
    console.log(remove(list, 0));   // Quito el primer elemento de la lista.

    // ! PROBANDO LA FUNCIÓN REMOVEELEMENT.
    if(removeElement(list, book2)) {
        console.log("El elemento se ha eliminado correctamente");   // Se ejecuta esto.
    } else {
        console.log("No se pudo eliminar el elemento.");
    }

    // ! PROBANDO LA FUNCIÓN SET.
    console.log(set(list, book4, 0));   // Reemplaza el único libro que hay en este momento (book3) por book4
}

test();
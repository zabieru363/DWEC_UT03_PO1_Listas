// ! COSAS A TENER EN CUENTA:
/* - En la función add también es posible hacer un return de
size(list) o de list.length pero prefiero retornar list.push(elem)
ya que es mucho más sencillo y se escribe menos código. */
/* - La función capacity no necesita el parametro list ya que tiene
acceso a la constante MAX_SIZE por lo que no es necesario pasarle nada. */

"use strict";

const MAX_SIZE = 5;

function create() {
    return [];
}

function isEmpty(list) {
    return list.length === 0;
}

function isFull(list) {
    return list.length === MAX_SIZE;
}

function size(list) {
    return list.length;
}

function add(list, elem) {
    return list.push(elem); // No necesitamos retornar list.length ya que push devuelve el length del array.
}

function addAt(list, elem, index) {
    list.splice(index, 0, elem);
    return size(list);
}

function get(list, index) {
    return list.find(function(book, pos) {
        if(pos === index) return book;
    });
}

function toString(list) {
    return list.reduce(function(str, book, index){
        return index !== 0 ? str + " - " +  book.title  : str + book.title;
    }, "");
}

function indexOf(list, elem) {
    return list.findIndex(function(book) {
        return elem.ISBN === book.ISBN;
    });
}

function lastIndexOf(list, elem) {
    return indexOf([...list.reverse()], elem);
}

function capacity() {
    return MAX_SIZE;
}

function clear(list) {
    list.length = 0;
}

function firstElement(list) {
    return list[0];
}

function lastElement(list) {
    return list[list.length - 1];
}

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
    const list = create();

    // ! PROBANDO FUNCIÓN ISEMPTY.
    console.log(isEmpty(list) ? "La lista está vacía" : "");

    // ! PROBANDO FUNCIÓN ISFULL.
    console.log(isFull(list) ? "La lista está llena" : "");

    // ! PROBANDO FUNCIÓN SIZE.
    console.log("Número de elementos en la lista " + size(list));

    // ! PROBANDO LA FUNCIÓN ADD.
    console.log("Número de elementos en la lista " + add(list, book1));

    // ! PROBANDO LA FUNCIÓN ADDAT.
    console.log("Número de elementos en la lista " + addAt(list, book3, 0));

    // ! PROBANDO LA FUNCIÓN GET.
    console.log(get(list, 0));

    // ! PROBANDO LA FUNCIÓN TOSTRING.
    console.log(toString(list));

    // ! PROBANDO LA FUNCIÓN INDEXOF.
    let pos = indexOf(list, book1);
    console.log(pos !== -1 ? "El elemento se encuentra en la posición " + pos : "Elemento no encontrado");
    
    // ! PROBANDO LA FUNCIÓN LASTINDEXOF.
    pos = lastIndexOf(list, book1);
    console.log(pos !== -1 ? "El elemento se encuentra en la posición " + pos : "Elemento no encontrado");

    // ! PROBANDO LA FUNCIÓN CAPACITY.
    console.log("Número máximo de elementos que se pueden almacenar en la lista " + capacity());

    // ! PROBANDO LA FUNCIÓN CLEAR.
    clear(list);
    console.log("Número de elementos de la lista " + size(list));

    // * Añadimos nuevos libros a la lista para probar las siguientes funciones.
    console.log("Número de elementos en la lista " + add(list, book1));
    console.log("Número de elementos en la lista " + add(list, book2));
    console.log("Número de elementos en la lista " + add(list, book3));

    // ! PROBANDO LA FUNCIÓN FIRSTELEMENT.
    console.log(firstElement(list));

    // ! PROBANDO LA FUNCIÓN LASTELEMENT.
    console.log(lastElement(list));
}

test();
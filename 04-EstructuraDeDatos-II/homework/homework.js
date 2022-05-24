'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function Node(value){

  this.value = value;
  this.next = null;

}

function LinkedList () {

  this._length = 0;
  this.head = null;

}

LinkedList.prototype.add = function (value) {

  var node = new Node(value);
  var current = this.head;

  if (!current) {

    this.head = node;
    this._length++;
    return node;
  }

  while (current.next) {
    current = current.next;
  }

  current.next = node;
  this._length++;
  return node;

}

LinkedList.prototype.remove = function () {

  var current = this.head;
  var previous = null;

  if (!current) {
    return null
  }

  if (current.next === null){
    this.head = null;
    this._length--;
    return current;
  }

  while (current.next) {
    previous = current;
    current = current.next;
  }


  previous.next = null;
  this._length--;
  return current;

}

LinkedList.prototype.search = function (somethingToSearch) {

  var current = this.head;
  
  while (current) {
   
    if (current.value === somethingToSearch) return current.value;

    else if(typeof somethingToSearch === 'function' ) {

      if (somethingToSearch(current.value)) {
        return current.value;
      }
    }
    current = current.next;
  }
}

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {

  this.numBuckets = 35;
  this.casilleros = [];
  }
  
  HashTable.prototype.hash = function (value) {
  
    var acumulador = 0;
  
    for (let i = 0; i < value._length; i++) {
  
      acumulador = acumulador + value.charCodeAt(i);
  
    }
  
    return acumulador % this.numBuckets;
  
  }
  
  HashTable.prototype.set = function (key, value) {
  
    if (typeof key !== 'string') {
      throw new TypeError ('keys must be strings');
    }
  
    var posicion = this.hash(key);
  
    this.casilleros[posicion] = this.casilleros[posicion] || [];
  
    this.casilleros[posicion].unshift({
      key: key,
      value: value,
    }) 
  }
  
  HashTable.prototype.get = function(){
  
    var posicion = this.hash(key);
    for (let i = 0; i < this.casilleros[posicion].length; i++) {
      if (this.casilleros[posicion][i].key === key) {
        return this.casilleros[posicion][i].value
      }
    }
  
    return false;
  }
  
  HashTable.prototype.hasKey = function(key) {
  
    var elemento = this.get(key);
  
    if (elemento) return true;
  
    return false;
  
  }


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};

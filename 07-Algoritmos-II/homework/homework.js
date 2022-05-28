'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código: 

  // [5, 1, 4, 2, 8]

  if (array.length <= 1){
    return array;
  } 

  const pivot =array.shift() ; // 5
  const left =[]; // menos a pivot ---> [1,4,2]
  const right =[]; //mayores a pivot ---> [8]
  
  while (array.length){ // (array.length === true) ---> significa mientras que haya algo en array
    const aux = array.shift();
    if (aux < pivot) left.push(aux);
     else right.push(aux);
  }
  return quickSort(left).concat(pivot).concat(quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length === 1) return array;

  const index = Math.floor(array.length / 2);
  let left = array.splice(0, index);
  let right = array;

  left = mergeSort(left);
  right = mergeSort(right);

  var resultado = [];

  while (left.length && right.length) {

    if (left[0] < right[0]) resultado.push(left.shift());
    else resultado.push(right.shift());
  }

  if (left.length) return resultado.concat(left);
  else return resultado.concat(right);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};

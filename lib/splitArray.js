'use strict'

// ENUNCIADO
// Partiendo de la base que tienes una función:

// function main(number, list_numbers){
//   //CÓDIGO
//   return 0;
// }

// ­El parámetro number siempre será un número (Integers) Ej: 5
// ­La list_numbers será un array de números (Integers) Ej: [5,2,5,0,5,7,5]; ­
// El return de la función será un número (Integers) Ej: 3

// La función tiene que retornar una posición del array donde la separe en dos, y tiene que cumplir
// el siguiente criterio de partición:
//   * Que la primera parte del array contenga el  n1 veces repetido el número que viene como primer parámetro
//     Ej: 5.
// ­  * Que el segundo array tenga n2 veces otro número que no sea el que viene como parámetro.
//   * Que  n1 =  n2

// Ejemplo:

// [5,2,5,0,5,7,5]; El resultado será 3.
//   primer array 5,2,5 (número de veces = 5)
//   ­segundo array 0,5,7,5 (Número de veces que != 5)

function main (number, listNumbers) {
  const checkArrays = (index, number, arr1, arr2) => {
    let match = 0;
    let notMatch = 0;
    arr1.forEach(element => {
      if (element === number) match++;
    })
    arr2.forEach(element => {
      if (element !== number) notMatch++;
    })

    if (match === notMatch && match + notMatch !== 0) return index;
    return 0;
  }

  let result;
  for (var i = 0; i < listNumbers.length; i++) {
    var arr1 = listNumbers.slice(0,i);
    var arr2 = listNumbers.slice(i, listNumbers.length);
    result = checkArrays(i, number, arr1, arr2);
    if (result != 0) break;
  }

  // If the array can not be splited, return 0
  return result;
}

module.exports = main;

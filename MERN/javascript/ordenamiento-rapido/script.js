function quicksort(array) {
    //nos aseguramos de que si hay una array sin elementos, no corramos el for (y nos ahorramos trabajo)
  if (array.length <= 1) {
    return array;
  }
//elegimos el pivote (que puede ser cualquier numero del array, incluso podriamos dividirlo a la mitad 
//y todas ese numero con Math.floor(arrat.lenght/2))
  let pivot = array[0];
  
//declaramos un array para todos los elementos que quedaran a la izquierda del pivote (i<piv)
// y un array para los de la derecha (i>piv)
  let left = []; 
  let right = [];

//ahora hacemos un bucle donde vamos a recorrer el array y por cada elemento lo compararemos con el pivote 
//si es mayor se ir[a a la derecha y si es menor a la izquierda
  for (let i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }
//Una vez pasa por todos los elementos, y los envia sus respectivos array, concatenamos todo
  return quicksort(left).concat(pivot, quicksort(right));
};

let numbersArr = [23, -1, 500, 45, 16, 37, 1, 3000, 99, 22];

console.log(quicksort(numbersArr));
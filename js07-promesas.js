console.log("JS07 Promesas");

const myPromise = new Promise((resolve, reject) => {
  const isOnline = false;

  if (isOnline) resolve("Promesa resuelta, está en línea");
  else reject("Promesa rechazada, está fuera de línea");
});

console.log("Antes de la promesa");
//console.log( myPromise() ); Las promesas no se pueden consumir de esta forma
//consumiendo la promesa con .then y .catch

//myPromise.then( (response)=>{} ).catch( (error)=>{} );
myPromise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("Despuésde la promesa");

//Promesa de enviar un arreglo y multiplicar sus elementos por 2;
// [2, 5, 7] => [4, 10, 14] => [10, 7]
//Devolver los números que sean mayor a 5

/* const datos = [2, 5, 7];
const datosDuplicados = datos.map( (element) => element * 2); //[4, 10, 14]
const datosFiltrados = datosDuplicados.filter( number => number > 5 ); //[10, 14]
console.log(datosDuplicados);
console.log(datosFiltrados);

const procesoReducido = datos
    .map( element => element * 2)
    .filter(number => number > 5);
console.log(procesoReducido); */

const filtrarArreglo = (datos) => {
  const solucion = new Promise((resolve, reject) => {
    const procesoReducido = datos
      .map((element) => element * 2) //Array con elementos duplicados
      .filter((number) => number > 5); //Condición para filtrar los num mayores que 5
    if (procesoReducido.length) resolve(procesoReducido);
    else reject("Tu arreglo no contiene numeros mayores a 5");
  });
  return solucion;
};

//Consumiendo las promesas con .then y .catch

function filtrarConPromesa() {
  console.log("Función con then y catch");
  filtrarArreglo([2, 4, 7])
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

  filtrarArreglo([2, 1, 0])
    .then((response) => console.log(response))
    .catch((error) => console.warn(error));
  console.log("Termina la función con then y catch");
}

/* filtrarConPromesa(); */

// Consumiendo las promesas con Async y Await
async function filtrarPromesaConAwait() {
  console.log("Función con async y await");
  console.log(await filtrarArreglo([2, 4, 7, 10]));
  console.log("Termina la función con async y await");
}
/* filtrarPromesaConAwait();
 */
async function filtrarPromesaConAwaitTryCatch() {
  const refBtnAsyncAwait = document.querySelector("#btnAsyncAwait");
  refBtnAsyncAwait.disabled = true;
  try {
    //En este bloque se trataá de resolver la promes
    console.log("Función con async y await");
    console.log(await filtrarArreglo([1, 0, 1, 2]));
    refBtnAsyncAwait.disabled = false;
  } catch (error) {
    //En este bloque se tratará el reject que genere la promesa
    console.log("nooo, se va a acabar el mundo");
    console.warn(error);
  } finally {
    console.log("Termina la función con async y await, con try y catch");
    refBtnAsyncAwait.disabled = false;
  }
}

/* filtrarPromesaConAwaitTryCatch();
 */

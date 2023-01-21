console.log("asincronia js07");

const introduccion = () => {
  console.log("01-Bienvenidos y bienvenidas a CH22");
};

const desarrollo = () => {
  console.log("02-Pásele a lo barrido");
};

const desarrolloAsincrono = (delay) => {
  //Función asíncrona
  setTimeout(() => console.log("Asíncrono - Pásele"), delay);
};

let idSetInterval;
const setIntervalAsincrono = (delay = 2000) => {
  let contador = 0;
  idSetInterval = setInterval(
    () => console.log(`Rockstar ${++contador}`),
    delay
  );
};

const stopIntervalAsincrono = () => {
  setTimeout(() => {
    console.log("Se detiene el intervalo");
    clearInterval(idSetInterval);
  }, 10_000);
};

const despedida = () => {
  console.log("03-Ahí nos vidríos, nos wachamos luego");
};

//Programación sincrona
introduccion();
desarrollo();
despedida();

//Programación asíncrona
introduccion();
desarrolloAsincrono(2000);
desarrolloAsincrono(6000);
setIntervalAsincrono(2000);
stopIntervalAsincrono();
despedida();

const startButton = document.getElementById("start-interval");
const stopButton = document.getElementById("stop-interval");

let idCounter;

startButton.addEventListener('click', (event)=> {
    console.log(event);
    let counter = 0;
    startButton.disabled = true;
    stopButton.disabled = false;
    idCounter = setInterval( ()=> console.log(`Contador ${++counter}`), 3000);
})


function stopCounter () {
    console.log("Se detiene el contador");
    clearInterval(idCounter);
    startButton.disabled = false;
    stopButton.disabled = true;
}
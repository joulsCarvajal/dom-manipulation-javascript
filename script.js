const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const formulario = document.querySelector('#form');

formulario.addEventListener('submit', sumarInput);

function sumarInput(event) {
    console.log({ event });
    event.preventDefault();
    let res = +input1.value + +input2.value;
    pResult.innerText = "Resultado: " + res;
}
import {gerarDados} from './modulo.js';

const btnBuscar = document.querySelector("#botao");

btnBuscar.addEventListener('click', ()=>{
    gerarDados('cep', 'rua', 'bairro', 'cidade', 'estado');
})
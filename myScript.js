//CALCULADORA

const resultados = document.getElementById("resultados");

function agregarResultados(input){
    resultados.value += input;
}

function limpiar(){
    resultados.value = '';
}

function calcular(){
    resultados.value = eval(resultados.value);
}

function borrar(){
    if(resultados.value.length > 0) {
        resultados.value = resultados.value.slice(0, -1);
    }
}
//CALCULADORA

const resultados = document.getElementById("resultados");

const agregarResultados = (input) => resultados.value += `${input}`;

const limpiar = () => resultados.value = '';

const calcular = () => resultados.value = eval(resultados.value);

function borrar(){
    if(resultados.value.length > 0) {
        resultados.value = resultados.value.slice(0, -1);
    }
}
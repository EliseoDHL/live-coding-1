// Array de palabras
var palabras = ["color", "elefante", "caballo", "POO", "supercalifragilisticoespiralidoso", "ordenador", "estresante", "desarrollo", "popocatepetl", "chatGPT"];

// Función para obtener las 3 palabras más largas
function obtenerPalabrasMasLargas(arreglo) { //Me quedo la duda del porque se coloca la palabra array como parametro, siendo esta la primera vez que aparece dentro del codigo
    // Ordenar el array en orden descendente según la longitud de los elementos
    var palabrasOrdenadas = arreglo.sort(function (a, b) { //Sort es una forma de ordenar un arreglo de forma local tomando en cuenta la longitud de cada string dentro del arreglo
        return b.length - a.length; //Regresa los valores de cada uno de los elementos del arreglo ya ordenados 
    });

    // Obtener las primeras 3 palabras del array ordenado
    var palabrasMasLargas = palabrasOrdenadas.slice(0, 3); //De esta forma se imprimen los 3 primeros elementos del arreglo ya ordenado por la funcion "obtenerPalabrasMasLargas"

    return palabrasMasLargas; //aqui regresa dichos valores
}

// Obtener las 3 palabras más largas
var palabrasLargas = obtenerPalabrasMasLargas(palabras); //Se guardan los elementos del array en una variable 

// Obtener el elemento <ul> del DOM
var resultadoElemento = document.getElementById("resultado"); //Se llama a la etiqueta ul por medio de su id "resultado"

// Iterar sobre las palabras más largas y agregarlas como elementos <li> al <ul>
palabrasLargas.forEach(function (palabra) { //se crea otra funcion con un for each para que imprima con la etiqueta li cada uno de los elementos que sacamos del arreglo
    var li = document.createElement("li");
    li.textContent = palabra;
    resultadoElemento.appendChild(li);
});
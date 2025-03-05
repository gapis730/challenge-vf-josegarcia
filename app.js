// Objetivo: Crear una aplicación que permita ingresar nombres de amigos,
// mostrarlos en una lista y sortear uno al azar.

// Array para almacenar los nombres de los amigos
const listaAmigos = []; // Usamos "const" ya que la referencia al array no cambiará

/**
 * Función para agregar un amigo
 */
function agregarAmigo() {
    // Capturar el input y extraer el valor ingresado (se usa trim para eliminar espacios extra)
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    // Imprimir en consola para verificar el valor ingresado
    console.log("Nombre ingresado:", nombre);

    // Validación 1: Verificar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        console.log("Error: Campo vacío");
        return;
    }
    
    // Validación 2: Verificar que el nombre contenga solo letras y espacios
    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(nombre)) {
        alert("Por favor, escriba un nombre válido, sin números ni caracteres especiales.");
        console.log("Error: El nombre contiene números o caracteres especiales.");
        return;
    }
    
    // Validación 3: Evitar nombres repetidos en la lista
    if (listaAmigos.includes(nombre)) {
        alert("El nombre ya ha sido ingresado. Por favor, ingrese otro nombre.");
        console.log("Error: Nombre repetido.");
        return;
    }

    // Agregar el nombre al array de amigos
    listaAmigos.push(nombre);
    console.log("Lista de amigos actualizada:", listaAmigos);

    // Limpiar el campo de entrada para el siguiente nombre
    input.value = "";

    // Actualizar la lista mostrada en el DOM
    actualizarLista();
}

/**
 * Función para actualizar la lista de amigos en el DOM
 */
function actualizarLista() {
    // Obtener el elemento donde se mostrará la lista
    const lista = document.getElementById("listaAmigos");

    // Optimización: Usar map y join para construir la lista en una sola asignación a innerHTML
    lista.innerHTML = listaAmigos.map(amigo => `<li>${amigo}</li>`).join('');

    // Mostrar en consola la lista actualizada para fines de depuración
    console.log("Lista actualizada en el DOM:", listaAmigos);
}

/**
 * Función para sortear un amigo al azar
 */
function sortearAmigo() {
    // Validar que la lista tenga al menos un nombre antes de sortear
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega amigos antes de sortear.");
        console.log("Error: Intento de sorteo con lista vacía.");
        return;
    }

    // Generar un índice aleatorio dentro del rango del array
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    console.log("Índice aleatorio generado:", indiceAleatorio);

    // Seleccionar el amigo sorteado utilizando el índice aleatorio
    const amigoSorteado = listaAmigos[indiceAleatorio];
    console.log("Amigo sorteado:", amigoSorteado);

    // Mostrar el resultado del sorteo en el DOM
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}

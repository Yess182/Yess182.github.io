function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "alumno" && password === "2024") {
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("cursoContainer").style.display = "block";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

function mostrarExamen() {
    document.getElementById("cursoContainer").style.display = "none";
    document.getElementById("examenContainer").style.display = "block";
}
function calcularNota() {
    let puntaje = 0;
    
    // Pregunta 1: Verifica si la respuesta correcta está seleccionada
    if (document.querySelector('input[name="preg1"]:checked')?.value === "correcto") {
        puntaje++;
    }

    // Pregunta 2: Verifica cada opción correcta de la pregunta con checkbox
    const opcionesPreg2 = document.querySelectorAll('input[name="preg2"]:checked');
    if (opcionesPreg2.length === 2 &&
        Array.from(opcionesPreg2).every(opcion => opcion.value === "correcto")) {
        puntaje++;
    }

    // Pregunta 3: Verifica la respuesta correcta
    if (document.querySelector('input[name="preg3"]:checked')?.value === "correcto") {
        puntaje++;
    }

    // Pregunta 4: Verifica la respuesta correcta
    if (document.querySelector('input[name="preg4"]:checked')?.value === "correcto") {
        puntaje++;
    }

    // Pregunta 5: Verifica la respuesta correcta
    if (document.querySelector('input[name="preg5"]:checked')?.value === "correcto") {
        puntaje++;
    }

    // Muestra el resultado
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = "Tu nota es: " + puntaje + "/5";
}
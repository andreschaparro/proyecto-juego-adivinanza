const numeroDecimal = Math.random() * 100
const numero0a99 = Math.floor(numeroDecimal)
const numeroAlAzar = numero0a99 + 1

const numeroEntrada = document.getElementById('numeroEntrada')
const mensaje = document.getElementById('mensaje')
const intento = document.getElementById('intento')
let intentos = 0

function comprobarNumero() {
    intentos++
    intento.textContent = intentos
    intento.style.display = 'block'
    const numeroIngresado = parseInt(numeroEntrada.value)
    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Por favor introduce un número válido entre 1 y 100'
        // La siguiente línea inyecta CSS desde JS
        mensaje.style.color = 'black'
        return
    } else if (numeroIngresado === numeroAlAzar) {
        mensaje.textContent = '¡Felicitaciones! ¡Has adivinado el número!'
        mensaje.style.backgroundColor = 'greenyellow'
        mensaje.style.color = 'black'
        numeroEntrada.disabled = true
    } else if (numeroIngresado < numeroAlAzar) {
        mensaje.textContent = '¡Más alto! El número es mayor al que dijiste'
        mensaje.style.backgroundColor = 'crimson'
        mensaje.style.color = 'white'
    } else {
        mensaje.textContent = '¡Más bajo! El número es menor al que dijiste'
        mensaje.style.backgroundColor = 'royalblue'
        mensaje.style.color = 'white'
    }
}
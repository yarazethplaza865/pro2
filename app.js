let nombre = "Yara";
let edad = 19;
const esMayorDeEdad = true;

function saludar(nombreUsuario) {
    console.log("¡Hola, " + nombreUsuario + "!");
}

saludar(nombre);

if (edad >= 18 && esMayorDeEdad) {
    console.log(nombre + " es mayor de edad y puede ingresar.");
} else {
    console.log(nombre + " es menor de edad.");
}
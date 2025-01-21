// Variables principales
let myImage = document.querySelector('.logo'); // Imagen con clase 'logo'.
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// Manejo de imágenes
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc.includes('Firefox Logo')) {
        myImage.setAttribute('src', 'Batman.webp'); // Cambiar la imagen.
    } else {
        myImage.setAttribute('src', 'Firefox Logo');
    }
};

// Mensaje de bienvenida personalizado
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

// Función para establecer el nombre de usuario
function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        alert('Name cannot be empty or cancelled.');
        return;
    }
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

// Cambiar usuario al hacer clic en el botón
myButton.onclick = function() {
    setUserName();
};

// Ejemplo de comparación corregida
let helado = "chocolate";

if (helado === "chocolate") {
    alert("Yay, Amo el helado de chocolate!");
} else {
    alert("Awwww, pero el chocolate es mi favorito");
}

// Función de multiplicación
function multiplica(num1, num2) {
    return num1 * num2;
}

let res = multiplica(5, 8);
alert("El resultado de multiplicar 5 * 8 es: " + res);

      
      

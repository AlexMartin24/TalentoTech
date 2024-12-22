function apiDragonBall() {
  //Funcion fetch me permite conectar con una API-end Point
  fetch("https://dragonball-api.com/api/characters?limit=20")
    //transformo la info en formato json
    .then((respuesta) => respuesta.json())
    //en datos, está la estructura en formato objeto
    .then((datos) => {
      console.log(datos.items[0]);
      const container = document.getElementById("listaDePersonajes");

      datos.items.forEach((element) => {
        // console.log(element.name, element.race, element.image);

        // card por cada personaje
        const cardPersonajes = `
            <div class="cardPersonajes">
                <h2>${element.name} (${element.race})</h2>
                <img src="${element.image}" alt="${element.name}">
                <p><strong>Afiliación:</strong> ${element.affiliation || 'Desconocido'}</p>
                <p><strong>Género:</strong> ${element.gender}</p>
                <p><strong>Ki:</strong> ${element.ki}</p>
                <p><strong>Máximo Ki:</strong> ${element.maxKi}</p>
                <p><strong>Descripción:</strong> ${element.description || 'No disponible'}</p>
            </div>
        `;
        // agregar la card al contenedor
        container.innerHTML += cardPersonajes;
    });
});
}

// llama a la función cuando cargue la página
window.onload = apiDragonBall;




// Declaración de la función "saludar"

function saludar() {
  var nombre = prompt("Ingrese su nombre", "");

  document.write("Hola " + nombre);
  console.log("Hola " + nombre);

  for (i = 1; i <= 10; i++) {
    console.log("1 x", i, "=", 5 * i);
  }
}

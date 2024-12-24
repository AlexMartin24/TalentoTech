function apiDragonBall() {
  //Funcion fetch me permite conectar con una API-end Point
  fetch("https://dragonball-api.com/api/characters?limit=20")
    //transformo la info en formato json
    .then((respuesta) => respuesta.json())
    //en datos, está la estructura en formato objeto
    .then((datos) => {
      console.log(datos.items[0]);
      // listaDePersonajes es el contenedor donde se agregarán las tarjetas de los personajes
      let contenedorPersonajes = document.getElementById("listaDePersonajes");

      datos.items.forEach((elemento) => {
        // console.log(elemento.name, elemento.race, elemento.image);

        // Crear el div contenedor para cada personaje
        const contenedorCreado = document.createElement("div");

        // Agrega la clase cardPersonajes al div 
        contenedorCreado.classList.add("cardPersonajes");

        // agregar el contenido a ese div
        contenedorCreado.innerHTML = `
            <h2>${elemento.name} (${elemento.race})</h2>
            <img src="${elemento.image}" alt="${elemento.name}">
            <p><strong>Afiliación:</strong> ${
              elemento.affiliation || "Desconocido"
            }</p>
            <p><strong>Género:</strong> ${elemento.gender}</p>
            <p><strong>Ki:</strong> ${elemento.ki}</p>
            <p><strong>Máximo Ki:</strong> ${elemento.maxKi}</p>
            <p><strong>Descripción:</strong> ${
              elemento.description || "No disponible"
            }</p>
        `;
        // agrega la tarjeta al contenedor, contenedorPersonajes en la página
        contenedorPersonajes.append(contenedorCreado);
      });
    });
}

// llama a la función cuando cargue la página
window.onload = apiDragonBall;




// function saludar() {
//   var nombre = prompt("Ingrese su nombre", "");

//   document.write("Hola " + nombre);
//   console.log("Hola " + nombre);

//   for (i = 1; i <= 10; i++) {
//     console.log("1 x", i, "=", 5 * i);
//   }
// }

// Funciones Modulares
// 1. Crear de una función que cree un array de
// productos y los muestre en la página utilizando
// una plantilla HTML dinámica.


let listaDeProductos = [
  {
    id: "P1",
    nombre: "Luigi Mansion 2",
    precio: 100,
    imagen: "img/Juegos/Nintendo/Luigi_Mansion_2.png",
    categoria: "Nintendo",
  },
  {
    id: "P2",
    nombre: "Mario Party",
    precio: 200,
    imagen: "img/Juegos/Nintendo/Mario_Party.png",
    categoria: "Nintendo",
  },
  {
    id: "P3",
    nombre: "Pokemon Let s Go Pikachu",
    precio: 300,
    imagen: "img/Juegos/Nintendo/Pokemon_Let's_Go_Pikachu.png",
    categoria: "Nintendo",
  },
  {
    id: "P4",
    nombre: "Super Mario Paper",
    precio: 400,
    imagen: "img/Juegos/Nintendo/Super_Mario_Paper.webp",
    categoria: "Nintendo",
  },

  {
    id: "P5",
    nombre: "Hitman 2",
    precio: 150,
    imagen: "img/Juegos/Sony/PS4/HITMAN_2.jfif",
    categoria: "Sony",
  },
  {
    id: "P6",
    nombre: "Doom",
    precio: 250,
    imagen: "img/Juegos/Sony/PS4/DOOM.jfif",
    categoria: "Sony",
  },
  {
    id: "P7",
    nombre: "COD Black Ops Cold War",
    precio: 300,
    imagen: "img/Juegos/Sony/PS4/CALL_OF_DUTY_BLACK_OPS_COLD_WAR.jfif",
    categoria: "Sony",
  },
  {
    id: "P8",
    nombre: "Red Dead Redemption II",
    precio: 200,
    imagen: "img/Juegos/Sony/PS4/Red_Dead_Redemption_II.jfif",
    categoria: "Sony",
  },
];

function cargarProductos(categoria) {
  // Filtra los productos según la categoría
  const productos = listaDeProductos.filter(
    (producto) => producto.categoria === categoria
  );
  console.log(productos);

  // Obtiene el contenedor donde se agregarán los productos
  const contenedorProductos = document.getElementById("listaDeProductos" + categoria);

  // Itera sobre los productos y los agrega al contenedor
  productos.forEach((producto) => {
    // Crear el div contenedor para cada producto
    const contenedorCreado = document.createElement("div");
    contenedorCreado.classList.add("producto-item");

    // Llenar el contenedor con los datos del producto
    contenedorCreado.innerHTML = `
      <div class="producto">
        <img src="${producto.imagen}" alt="${producto.nombre}" />
        <h3>${producto.nombre}</h3>
        <p class="precio">$${producto.precio}</p>
        <button class="agregarCarrito" onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">
          Agregar al carrito
        </button>
      </div>
    `;

    // Agregar el contenedor del producto al contenedor principal
    contenedorProductos.appendChild(contenedorCreado);
  });
}


// Ejecutar la función al cargar la página
window.onload = function () {
  cargarProductos("Nintendo"); // cargar productos de Nintendo
  cargarProductos("Sony"); // cargar productos de Sony
};

let carrito = [];

function agregarAlCarrito(nombre, precio) {
  let productoEncontrado = carrito.find((item) => item.nombre === nombre);

  if (productoEncontrado) {
    // si el producto ya está, aumentamos su cantidad
    productoEncontrado.cantidad++;
  } else {
    // sino está, lo agregamos al carrito con cantidad 1
    carrito.push({ nombre, precio, cantidad: 1 });
  }

  actualizarCarrito();
}

// Función para actualizar la tabla del carrito y el total
function actualizarCarrito() {
  const tablaCarrito = document.querySelector("#tablaCarrito");
  const totalElement = document.querySelector("#total");
  tablaCarrito.innerHTML = ""; // Limpiar la tabla antes de volver a mostrarla

  let total = 0;

  // Mostrar los productos en el carrito
  carrito.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${item.nombre}</td><td>$${item.precio}</td><td>${item.cantidad}</td>`;
    tablaCarrito.appendChild(row);
    total += item.precio * item.cantidad; // El total se acumula según la cantidad
  });

  // Mostrar el total
  resumen = totalElement.innerText = total.toFixed(2);

  return resumen;
}

function comprar() {
  alert("Pagina en desarrollo");
}


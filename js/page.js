function agregarHeader() {
  const headerHTML = `
    <header>
      <!-- Logo -->
      <a href="index.html">
        <img
          src="img/logo.png"
          alt="Logo Tienda de Juegos"
          width="200"
          height="180"
        />
      </a>

      <!-- Menú de navegación -->
      <nav>
        <div class="carrito">
          <a href=""
            ><img src="img/carritodecompras.png" width="40" height="32"
          /></a>
        </div>

        <div class="categorias" id="categorias">
          <a
            href="index.html"
            class="nav-menu"
            aria-label="Ir a la página principal"
            >Inicio</a
          >
          <a
            href="contact.html"
            target="_blank"
            class="nav-menu"
            aria-label="Contacto"
            >Contacto</a
          >

            <a
            href="api.html"
            target="_blank"
            class="nav-menu"
            aria-label="APIDBZ"
            >API_PRUEBA</a
          >

        </div>
      </nav>
    </header>
    `;

  // Inyecta el contenido del header en el div con id header
  const headerElement = document.getElementById("header");
  if (headerElement) {
    headerElement.innerHTML = headerHTML;
  } else {
    console.error("El header no se encontró en el DOM");
  }
}

function agregarFooter() {
  const footerHTML = `
    <footer>
        <p>&copy; 2024 Tienda de Juegos. Todos los derechos reservados.</p>
        <a href="location.html" class="nav-menu" aria-label="ubicacion">Donde encontrarnos</a>
    </footer>
    `;

  // Inyecta el contenido del footer en el div con id footer
  const footerElement = document.getElementById("footer");
  if (footerElement) {
    footerElement.innerHTML = footerHTML;
  } else {
    console.error("El footer no se encontró en el DOM");
  }
}

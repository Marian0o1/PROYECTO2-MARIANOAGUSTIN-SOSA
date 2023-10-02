document.addEventListener("DOMContentLoaded", () => {
  const detalleProducto = document.getElementById("detalles-producto");

  const ulrParams = new URLSearchParams(window.location.search);
  const idProducto = parseInt(ulrParams.get("id"));

  const datosProductos = JSON.parse(localStorage.getItem("productos"));

  const productoSeleccionado = datosProductos.personajes.find(
    (personaje) => personaje.id === idProducto
  );

  if (productoSeleccionado) {
    const contenedorDetallesProducto = document.createElement("div");
    contenedorDetallesProducto.classList.add("card-producto");
    contenedorDetallesProducto.innerHTML = `
      <div class="contenido-total">
            <div class="nombre-info">
                <h2>${productoSeleccionado.nombre}</h2>
                <p>${productoSeleccionado.descripcion}</p>
            </div>

            <div class="imagen-info">
                <img src="${productoSeleccionado.imagen}" alt="${productoSeleccionado.nombre}" class="img-detalles">
                <p>${productoSeleccionado.detalle_imagen}</p>
                <p>${productoSeleccionado.puntaje}</p>
                <p class="precio">${productoSeleccionado.precio}</p>
            </div>
        </div>
`;
    detalleProducto.appendChild(contenedorDetallesProducto);
  }
});

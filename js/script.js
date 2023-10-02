const xhr = new XMLHttpRequest();
xhr.open("GET", "../productos.json", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const datos = xhr.responseText;
    localStorage.setItem("productos", datos);
  }
};
xhr.send();
async function cargarDatos() {
  const respuesta = await fetch("../productos.json");
  const datos = await respuesta.json();
  localStorage.setItem("productos", JSON.stringify(datos));
}
cargarDatos();

/* fetch("productos.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => localStorage.setItem("productos", JSON.stringify(datos))); */

document.addEventListener("DOMContentLoaded", () => {
  const gridProductos = document.getElementById("grid-productos");
  const datosProductos = JSON.parse(localStorage.getItem("productos"));
  if (datosProductos) {
    datosProductos.personajes.forEach((personaje) => {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.innerHTML = `
      <h4 class="nombre-personaje">${personaje.nombre}</h4>
      <img src= "${personaje.imagen}" alt="${personaje.nombre}" class="img-grid">
      <button class="ver-mas">Ver más</button>
      `;

      gridProductos.appendChild(gridItem);

      const verMas = gridItem.querySelector(".ver-mas");
      verMas.addEventListener("click", () => {
        window.location.href = `productos.html?id=${personaje.id}`;
      });
    });
  }
});

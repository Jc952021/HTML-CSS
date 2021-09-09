const flechaIzquierda = document.getElementById("flecha-izquierda");
const flechaDerecha = document.getElementById("flecha-derecha");

const fila = document.querySelector(".carousel__container");
const peliculas = document.querySelectorAll(".pelicula");
flechaDerecha.onclick = () => {
  fila.scrollLeft += fila.offsetWidth;
  const indicadorActivo = document.querySelector(".activo");
  if (indicadorActivo.nextSibling) {
    indicadorActivo.classList.remove("activo");
    indicadorActivo.nextSibling.classList.add("activo");
  }
};
flechaIzquierda.onclick = () => {
  fila.scrollLeft -= fila.offsetWidth;
  const indicadorActivo = document.querySelector(".activo");
  if (indicadorActivo.previousSibling) {
    indicadorActivo.classList.remove("activo");
    indicadorActivo.previousSibling.classList.add("activo");
  }
};
const numerodePaginacion = Math.ceil(peliculas.length / 5);
for (let c = 0; c < numerodePaginacion; c++) {
  let button = document.createElement("button");
  if (c === 0) {
    button.classList.add("activo");
  }
  let controles = document.querySelector(".controles");
  controles.appendChild(button);

  button.onclick = (e) => {
    fila.scrollLeft = c * fila.offsetWidth;
    document.querySelector(".activo").classList.remove("activo");
    e.target.classList.add("activo");
  };
}

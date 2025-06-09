const btnAbrir = document.querySelector("#Abrir");
const btnCerrar = document.querySelector("#Cerrar");

//Abrir Carta
btnAbrir.addEventListener("click", () => {
  const ElementoSuperior = document.querySelector(".superior");
  ElementoSuperior.classList.add("abrir-superior");

  const h1 = document.querySelector("h1");
  const p = document.querySelector("p");
  h1.style.transform = "translateY(-120px)";
  p.style.transform = "translateY(-120px)";
  h1.style.transition = "transform 0.65s ease-in-out";
  p.style.transition = "transform 0.65s ease-in-out";

  const IconoCorazon = document.querySelector(".bx");
  IconoCorazon.classList.add("bx-rotada");

  setTimeout(() => {
    ElementoSuperior.style.zIndex = -1;
    const ElementoMensaje = document.querySelector(".mensaje");
    ElementoMensaje.classList.add("abrir-mensaje");
  }, 700);
});


// Con click en la carta
const contenedor = document.querySelector("#AbrirContenedor");
// Abrir carta al hacer click en el contenedor
contenedor.addEventListener("click", () => {
  const ElementoSuperior = document.querySelector(".superior");
  ElementoSuperior.classList.add("abrir-superior");

  const h1 = document.querySelector("h1");
  const p = document.querySelector("p");
  h1.style.transform = "translateY(-120px)";
  p.style.transform = "translateY(-120px)";
  h1.style.transition = "transform 0.65s ease-in-out";
  p.style.transition = "transform 0.65s ease-in-out";

  const IconoCorazon = document.querySelector(".bx");
  IconoCorazon.classList.add("bx-rotada");

  setTimeout(() => {
    ElementoSuperior.style.zIndex = -1;
    const ElementoMensaje = document.querySelector(".mensaje");
    ElementoMensaje.classList.add("abrir-mensaje");
  }, 700);
});

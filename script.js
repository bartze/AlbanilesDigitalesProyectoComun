const contenido = document.querySelector(".form-select");

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const respuesta = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
    );
    const datos = await respuesta.json();
    console.log(datos);
    mostrarHTMLAPI(datos);
  } catch (error) {
    console.log(error);
  }

  console.log("Se ha cargado la web");
});

const mostrarHTMLAPI = (datos) => {
  const list = document.createElement("ul");
  datos.meals.forEach((meal) => {
    const listItem = document.createElement("li");
    listItem.textContent = meal.strArea;
    list.appendChild(listItem);
  });
  contenido.appendChild(list);
};

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
  let html = "";
  const paises = datos.meals;
  paises.forEach((perfil) => {
    const { strArea } = perfil;
    html += `
              <option value="${strArea}">${strArea}</option>
          `;
  });
  contenido.innerHTML = html;
};

const obtenerDatosAPI = async () => {
  const pais = contenido.value;
  console.log(pais);
  try {
    const respuesta = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${pais}`
    );
    const resultado = await respuesta.json();
    mostrarHTMLAPI2(resultado);
  } catch (error) {
    console.log(error);
  }
};

const mostrarHTMLAPI2 = (datos) => {
  const contenido = document.querySelector("#lista");
  contenido.innerHTML = "";

  const paises = datos.meals;
  paises.forEach((perfil) => {
    const { strMeal, strMealThumb, idMeal } = perfil;

    const card = document.createElement("div");
    card.classList.add("card-custom"); // Clase CSS personalizada
    contenido.appendChild(card);

    const img = document.createElement("img");
    img.src = `${strMealThumb}`;
    img.classList.add("card-img-custom"); // Clase CSS personalizada
    img.alt = "imagen comidas";
    card.appendChild(img);

    const cardSub = document.createElement("div");
    cardSub.classList.add("card-body-custom"); // Clase CSS personalizada
    card.appendChild(cardSub);

    const nombre = document.createElement("h4");
    nombre.classList.add("card-title-custom"); // Clase CSS personalizada
    nombre.textContent = `${strMeal}`;
    cardSub.appendChild(nombre);

    const id = document.createElement("p");
    id.classList.add("card-text-custom"); // Clase CSS personalizada
    id.textContent = `ID: ${idMeal}`;
    cardSub.appendChild(id);
  });
};

contenido.addEventListener("change", obtenerDatosAPI);

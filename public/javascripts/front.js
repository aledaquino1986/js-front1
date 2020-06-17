alert("Bienvenidos a mi sitio.");

let pelicula = {
  nombre: "Avengers",
  director: "Joss Whedon",
  duracion: 152,
  actor: "Robert Downey JR.",
};

let arrayHobbies = [];

let avanzarOretroceder = () => {
  let mensaje = confirm("¿Está seguro de que deseas avanzar?");
  let titulo = document.querySelector("h2");
  console.log(mensaje);

  if (mensaje == false) {
    titulo.innerHTML =
      "Lamentamos que no quieras continuar tu visita por este maravilloso sitio.";
  } else {
    titulo.innerHTML =
      "Qué alegría que quieras seguir con la visita por este maravilloso sitio.";
  }
};

let confirmarNombre = () => {
  let nombreUsuario = prompt("¿Podrías decirnos tu nombre?");
  let bienvenida = document.querySelector("h1");
  bienvenida.innerHTML = `Bienvenido ${nombreUsuario}`;
};

let confirmarEdad = () => {
  let edadUsuario = prompt("¿Podríamos decirnos tu edad?");
  let containerGeneral = document.querySelector(".container-general");
  let containerBloqueado = document.querySelector("#contenido-bloqueado");
  console.log(edadUsuario);
  if (edadUsuario < 18) {
    containerGeneral.style.display = "none";
    containerBloqueado.style.display = "inline-block";
  }
};

let preguntarHobbies = () => {
  let hobbiesUsuario = prompt(
    "Por favor, díganos cuáles son sus hobbies, separados por comas"
  ).toLowerCase();
  let listaHobbies = hobbiesUsuario.split(",").join(" ");
  arrayHobbies.push(hobbiesUsuario.split(","));
  let backgroundImage = document.querySelector("main div.background-img");
  console.log(backgroundImage);

  if (
    listaHobbies.includes("programacion") ||
    listaHobbies.includes("programar")
  ) {
    alert("Qué bueno que te guste la programación!");
    backgroundImage.style.backgroundImage = "url(../img/programmer.jpeg)";
  } else {
    alert("Qué lástima que no te guste la programación!");
    backgroundImage.style.backgroundImage = "url(../img/gatito.jpeg)";
  }

  let article = document.querySelector("article");
  let newOl = document.createElement("ol");
  article.appendChild(newOl);

  let sitiosWebhobbies = [];
  for (let i = 0; i < arrayHobbies[0].length; i++) {
    let insertElement = arrayHobbies[0][i];
    sitiosWebhobbies.push({
      paginaWeb: prompt(
        `¿Podrías recomendarnos un sitio web para este Hobbie : ${insertElement}`
      ),
      sitio: insertElement,
    });

  }

  let ol = document.querySelector("ol");

  sitiosWebhobbies.forEach(function (element) {
    let a = document.createElement("a");
    a.setAttribute("href", `https://${element.paginaWeb}`);
    a.innerHTML = element.sitio;
    let li = document.createElement("li");
    li.appendChild((document.innerHTML = a));
    ol.appendChild(li);
  });
};

let cambiarAvatar = function () {
  let avatar = document.querySelector(".avatar");
  let preguntarAvatarUsuario = prompt(
    "¿Quieres cambiar el avatar? Si quieres, inserta un link a una imagen"
  );

  if (preguntarAvatarUsuario !== null) {
    avatar.setAttribute("src", preguntarAvatarUsuario);
  }
  console.log(preguntarAvatarUsuario);
};

const segundaTanda = () => {
  let colorFavorito = prompt("¿Podrías decirnos cuál es tu color favorito?");
  console.log(colorFavorito);
  let nombre = prompt("¿Cómo te llamás?");

  let title = document.querySelector("h1");

  title.innerHTML = "<h1>Bienvendido <span>" + nombre + "</span>!</h1> ";
  let span = document.querySelector(
    "body > div.container-general > main > div.container.bienvenida > h1 > h1 > span"
  );
  console.log(span);
  span.classList.add("color-preferido");
};

let peliculaUsuario = function () {
  let pregunta1 = prompt("Qué película te gusta?");
  let pregunta2 = prompt("Quien la dirige?");
  let pregunta3 = prompt("Cuanto dura?");
  let pregunta4 = prompt("Qué actor tiene?");

  let nombrePelicula = document.querySelector("#nombre");
  let nombreDirector = document.querySelector("#director");
  let duracion = document.querySelector("#duracion");
  let nombreActor = document.querySelector("#actor");

  pelicula.nombre = pregunta1;
  pelicula.director = pregunta2;
  pelicula.duracion = pregunta3;
  pelicula.actor = pregunta4;

  let display = document.querySelector("#pelicula.contenido-bloqueado");
  nombrePelicula.innerText = pelicula.nombre;
  nombreDirector.innerText = pelicula.director;
  duracion.innerText = pelicula.duracion;
  nombreActor.innerText = pelicula.actor;

  display.style.setProperty("display", "inline");
};

function changeToOl() {
  let ul = document.querySelector("#pelicula ul");
  let ulParent = ul.parentNode;
  let ol = document.createElement("ol");

  ulParent.replaceChild(ol, ul);

  for (let key in pelicula) {
    let li = document.createElement("li");
    let text = document.createTextNode(`${key}: ${pelicula[key]}`);
    li.appendChild(text);
    ol.appendChild(li);
  }
}

let styleLi = function () {
  let listyle = document.querySelector("ol");
  listyle.className += "styleol";
};

let addMovieUrl = function () {
  let preguntaUrlUsuario = prompt("Podrías darnos la url de la película?");
  pelicula.url = preguntaUrlUsuario;

  let peli = document.querySelector("ol li");

  let a = document.createElement("a");
  a.setAttribute("href", "https://" + pelicula.url);
  a.innerHTML = pelicula.nombre;
  //peli.innerHTML = document.innerHTML = a;
  peli.innerText = "";
  peli.appendChild(a);
};

avanzarOretroceder();
confirmarNombre();
confirmarEdad();
preguntarHobbies();
segundaTanda();
cambiarAvatar();
peliculaUsuario();
changeToOl();
styleLi();
addMovieUrl();

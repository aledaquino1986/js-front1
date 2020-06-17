let preguntaUsuario = confirm("¿Quiere empezar el proceso?");

let confirmarFamilia;
let integranteYgasto = [];

const preguntarFamiliaUsuario = function () {
  if (!preguntaUsuario) {
    alert("Lamentamos que no quieras seguir.");
    window.location.replace("http://www.netflix.com");
  } else {
    confirmarFamilia = prompt(
      "Podrías decirnos cuántas personas viven con vos?"
    );
    if (isNaN(confirmarFamilia)) {
      alert("Necesita ingresar un número");
      confirmarFamilia = prompt(
        "Podrías decirnos cuántas personas viven con vos?"
      );
    } else if (confirmarFamilia < 2) {
      alert("por favor, ingresá un número mayor a 2");
      confirmarFamilia = prompt(
        "Podrías decirnos cuántas personas viven con vos?"
      );
    }
  }
};

preguntarFamiliaUsuario();

for (let i = 0; i < confirmarFamilia; i++) {
  let nombreFamiliar = prompt(
    "Podría decirme el nombre de un integrante de su familia?"
  );
  let gastoFamiliar = prompt(`Podría decirnos cuánto gastó ${nombreFamiliar}?`);

  integranteYgasto.push({ nombre: nombreFamiliar, gastos: gastoFamiliar });
}

const valorAnteriorDisplay = document.getElementById("valor-anterior");
const valorActualDisplay = document.getElementById("valor-actual");
const buttonNumbers = document.querySelectorAll(".number");
const buttonOperadores = document.querySelectorAll(".opereitor");
const calculadora = new Calculadora();
const display = new Display(valorAnteriorDisplay, valorActualDisplay);

buttonNumbers.forEach((botton) => {
  botton.addEventListener("click", () =>
    display.agregarNumber(botton.innerHTML)
  );
  buttonOperadores.forEach((botton) => {
    botton.addEventListener("click", () => display.computar(botton.value));
  });
});

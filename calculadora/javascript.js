class Calculadora {
  sumar(num1, num2) {
    return num1 + num2;
  }
  restar(num1, num2) {
    return num1 - num2;
  }
  multiplicar(num1, num2) {
    return num1 * num2;
  }
  dividir(num1, num2) {
    return num1 / num2;
  }
}

// DISPLAY

class Display {
  constructor(valorAnteriorDisplay, valorActualDisplay) {
    this.valorAnteriorDisplay = valorAnteriorDisplay;
    this.valorActualDisplay = valorActualDisplay;
    this.tipoOperacion = undefined;
    this.calculador = new Calculadora();
    this.ValorActual = "";
    this.valorAnterior = "";
    this.signos = {
      sumar: "+",
      restar: "-",
      multiplicar: "x",
      dividir: "/",
    };
  }
  agregarNumber(number) {
    if (number === "." && this.ValorActual.includes(".")) return;
    this.ValorActual = this.ValorActual + number;
    this.printValor();
  }
  borrarAdd() {
    this.ValorActual = "";
    this.valorAnterior = "";
    this.tipoOperacion = undefined;
    this.printValor();
  }
  borrar() {
    this.ValorActual = this.ValorActual.toString().slice(0, -1);
    this.printValor();
  }
  computar(tipo) {
    this.tipoOperacion !== "igual" && this.calcular();
    this.tipoOperacion = tipo;
    this.valorAnterior = this.ValorActual || this.valorAnterior;
    this.ValorActual = "";
    this.printValor();
  }
  printValor() {
    this.valorActualDisplay.textContent = this.ValorActual;
    this.valorAnteriorDisplay.textContent = `${this.valorAnterior} ${
      this.signos[this.tipoOperacion] || ""
    }`;
  }
  calcular() {
    const valorAnterior = parseFloat(this.valorAnterior);
    const ValorActual = parseFloat(this.ValorActual);

    if (isNaN(ValorActual) || isNaN(valorAnterior)) return;
    this.ValorActual = this.calculador[this.tipoOperacion](
      ValorActual,
      valorAnterior
    );
  }
}

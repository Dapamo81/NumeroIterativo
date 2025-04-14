function sumaIterativa(){
    let continuar = "S";
    let sumaTotal = 0; // Acumulador de todas las sumas

    while (continuar.toUpperCase() === "S") {
      let num1 = parseFloat(prompt("Ingresa el primer número:"));
      let num2 = parseFloat(prompt("Ingresa el segundo número:"));

      // Validamos que los valores ingresados sean números
      if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa números válidos.");
        continue;
      }

      let suma = num1 + num2;
      sumaTotal += suma;

      alert("La suma de " + num1 + " + " + num2 + " es: " + suma);

      continuar = prompt("¿Quieres continuar? (S/N)");
    }

    alert("Gracias por usar el programa. La suma total acumulada fue: " + sumaTotal);
}

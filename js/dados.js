let dado1 = 0;
let dado2 = 0;

function lanzarDado(player) {
  const numero = Math.floor(Math.random() * 6) + 1;
  if (player === 1) {
    dado1 = numero;
    document.getElementById("resultado1").innerHTML = "🎲 " + numero;
  } else {
    dado2 = numero;
    document.getElementById("resultado2").innerHTML = "🎲 " + numero;
  }

  // Verificar si ambos ya lanzaron
  if (dado1 > 0 && dado2 > 0) {
    mostrarGanador();
  }
}

function mostrarGanador() {
  let mensaje = "";
  if (dado1 > dado2) {
    mensaje = "🏆 ¡PLAYER 1 ha ganado!";
  } else if (dado2 > dado1) {
    mensaje = "🏆 ¡PLAYER 2 ha ganado!";
  } else {
    mensaje = "🤝 ¡Es un empate!";
  }
  document.getElementById("ganador").innerHTML = mensaje;
}

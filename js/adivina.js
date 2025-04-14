function adivinaNumero(){
    const num = Math.floor(Math.random()*10+1);
    let intento;
    let contador = 1;

    do{
        intento = parseInt(prompt("Adivina el numero (entre1 y 10):"));
        contador++;

        if(isNaN(intento)){
            alert("Por favor, escribe un numero válido.");
        }else if (intento !== num){
            alert("¡Incorrecto!, intenta de nuevo.")
            document.getElementById("resultado").innerHTML = '¡Adivinastes el numero es: <strong>' + contador + ' </strong> intento(s)!';
        }
    }while(intento!==num);

    alert("¡Felicidades, has acertado! El númeor era " + num);
    

}
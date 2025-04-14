function adivinaNumero(){
    const num = Math.floor(Math.random()*10+1);
    let intento;

    do{
        intento = parseInt(prompt("Adivina el numero (entre1 y 10):"));

        if(isNaN(intento)){
            alert("Por favor, escribe un numero válido.");
        }else if (intento !== num){
            alert("¡Incorrecto!, intenta de nuevo.")

        }
    }while(intento!==num);

    alert("¡Felicidades, has acertado! El númeor era " + num);
    

}
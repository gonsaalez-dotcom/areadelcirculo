function areaDelCirculo() {
    let diametro = parseInt(prompt("Ingrese el diámetro (cm)"));
    let radio= (diametro / 2);
    let area=(Math.PI * Math.pow(radio, 2));

    if (area > 0){

        console.log  ("El área del círculo es: "+area +"cm2" );
        alert ("El área del círculo es: "+area +"cm2");

        document.getElementById('resultado').innerHTML = "El área del círculo es: "+area +" cm2";
    } else{ 
        document.getElementById('resultado').innerHTML = "Ingrese un diámetro válido";

    }

}
areaDelCirculo ()
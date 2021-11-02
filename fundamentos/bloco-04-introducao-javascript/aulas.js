/*         Condições If e Else       */

/* const nota = 25;

if (nota >= 80){
    console.log("Parabéns, você foi aprovado(a)");
}
else if (nota <= 80 && nota >= 60){
    console.log("Você está na nossa lista de espera");
}
else {
    console.log("Você foi reprovado(a)");
} */
    


/*         Operadores Lógicos       */

/* const currentHour = 3;
let message;

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour <18 ) {
    message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour <14) {
    message = "Hora do almoço!!!";
} else if (currentHour >= 4 && currentHour <11) {
    message = "Hmmm, cheiro de café recém passado";
} 
    console.log(message)
    
let weekDay = "sexta-feira";

    if (weekDay === "segunda-feira" || weekDay === "teça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira"){
        console.log("Oba, mais um dia de aprendizado na Trybe >:D");
    } else {
        console.log("FINALMENTE, descanso merecido UwU")
    } */




/*         Operadores Lógicos       */
 /*    let candidato = "aaaa";
    
    switch (candidato) {
        case "verde":
            console.log("Aprovado");
            break;
        case "amarelo":
            console.log("lista");
            break;
        case "vermelho":
            console.log("Reprovado");
            break;
        default:
            console.log("Não temos seus dados");
    } */




/*         Arrays        */
/* 
let pizzas = ['mussarela', '4 queijos', 'marguerita', 'bacon'];

console.log('sabores de: ' + pizzas);

 */
/* let frase = "dale meu povo"

for ( let i = 0; i < frase.length; i++){
    if( frase[i] == "a"){
      frase.replace("a", "1");
    } else if (frase[i] == "e"){
      frase.replace("e", "2");
    } else if (frase[i] == "i"){
      frase.replace("i", "3");
    } else if (frase[i] == "o"){
      frase.replace("o", "4");
    } else if (frase[i] == "u"){
      frase.replace("u", "5");
    }
  }

console.log(frase)
 */

let frase = 'Frase que começa com um palavra-feia e tem outra palavra-feia no final';

    for(i=0;i<frase.length;i++){
        if(frase[i] = "e"){
            frase = frase.replace("e", "2")
        } 
        if(frase[i] = "a"){
            frase = frase.replace("a", "1")
        } 
    } 
  console.log(frase);





    
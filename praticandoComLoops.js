/*Repetir como um papagaio

Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”.

*/

for ( let volta = 1; volta <=5 ; volta ++) {
    console.log ("Olá mundo")
};

/* Contando números ímpares

Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console.

*/

for ( let numero = 1; (numero % 2 != 0) && (numero <=10 ); numero ++) {
    console.log ("Repetição número " + numero)
};

/* Criando a tabuada

Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for).
 */

for (let contador = 1; contador <= 10 ; contador++){
  console.log("Tabuada do "+ contador);
  for (let fator = 1; fator <= 10; fator++){
      console.log( contador + " x " + fator + " = "+ (contador*fator));
  }
}

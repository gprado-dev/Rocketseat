/* 
1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
    
    💡 Para saber o tipo de dado você pode usar o operador `typeof`
    
4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
*/

let wellcome = alert("Hello World!")

let n1 = Number(prompt("Digite um número"))
let n2 = Number(prompt("Digite mais um número"))
let sum = n1 + n2


let resultSum = alert(`A soma entre os números ${n1} e ${n2} é igual a ${sum}.`)

let number = () => {
  if(typeof sum === typeof 0) {
    alert(`O valor "${sum}" é um número.`)
  } 
  else {
    alert(`O valor "${sum}" não é um número.`)
  }
}
number()

let string = () => {
  if(typeof sum === typeof "txt") {
    alert(`O valor "${sum}" é uma string.`)
  } 
  else {
    alert(`O valor "${sum}" não é uma string.`)
  }
}
string()

let boolean = () => {
  if(typeof sum === typeof true) {
    alert(`O valor "${sum}" é um booleano.`)
  } 
  else {
    alert(`O valor "${sum}" não é um booleano.`)
  }
}
boolean()

let sub = n1 - n2
let resultSub = alert(`A subtração entre os números ${n1} e ${n2} é igual a ${sub}.`)

let multi = n1 * n2
let resultMulti = alert(`A multiplicação entre os números ${n1} e ${n2} é igual a ${multi}.`)

let div = (n1 / n2).toFixed(2)
let resultDiv = alert(`A divisão entre os números ${n1} e ${n2} é igual a ${div}.`)

let even = () => {
  if(sum % 2 == 0 ) {
    alert(`O valor "${sum}" é um número par.`)
  } 
  else {
    alert(`O valor "${sum}" é um número ímpar.`)
  }
}
even()
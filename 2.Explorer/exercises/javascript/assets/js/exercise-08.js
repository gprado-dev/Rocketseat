/*
  1. Quais os dados de entrada que terei? (inputs)
  2. Quais as variáveis?
  3. Qual o caminho ideal? (fluxo ideal)
  4. Qual(is) o(s) caminho(s) alternativo(s)? (fluxo alternativo)
  5. Quais tratamentos de dados preciso fazer?
  6. Qual é a saída, ou quais os dados de saída, esperada? (outputs)

  ------------

  Faça um programa que tenha um menu e apresente a seguinte mensagem:

  Olá, usuário! Digite o número da opção desejada:
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa

  O programa deverá capturqar o número digitado pelo usuário e mostrar os seguintes comentários:

    a. Caso o usuário digite 1, ele poderá cadastrqar um item em uma lista;
    
    b. Caso o usuário digite 2, ele poderá ver os itens cadastrados.
      - Se não houver nenhum item cadastrado, mostrar a mensagem: "Não existem itens cadastrados."
    
    c. Caso o usuário digite 3, a  aplicação deverá ser encerrada.
*/

/*
  1. Itens de entrada:
  a. número desejado
  b. item da lista

  2. Variáveis:
  a. opção digitada
  b. lista de itens

  3. Fluxo ideal:
  Qualquer um dos 3 caminhos

  4. Fluxo alternativo:
  Dentro da opção 2

  5. Tratamentos de dados
  a. Transformar a string do prompt em número
  b. Guardar itens numa lista
*/ 

// opção digitada
let option;
// lista de itens
let items = []

// fluxo da operação
while(option != 3) {
  // menu
  option = Number(prompt(`
  Olá, usuário! Digite o número da opção desejada:

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa
  `))

  switch(option) {
    case 1:
      let item = prompt("Digite o nome do item que deseja cadastrar na lista:")
    
      items.push(item)
      break;

    case 2:
      if (items.length == 0) {
        alert("Não existem itens cadastrados.")
      } 
      else {
        alert(items)
      }
      break;
    
    case 3:
      alert("A aplicação foi encerrada.")
      break;
    
    default:
      alert("Opção inválida! Tente novamente.")
      break;
  }
}
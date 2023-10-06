/*
  Capture 10 itens para compor a lista de um supermercado.

  Após capturá-los, os imprima separando-os por vírgulas.
*/

let items = [];

for(let item = 0; item < 10; item++) {
  // items.push(prompt("Digite o item " + (item + 1) + ":"));

  let itemName = prompt("Digite o item " + (item + 1) + ":");

  items[item] = itemName;
}

alert(items);
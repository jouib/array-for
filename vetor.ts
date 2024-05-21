// Armazene 10 números usando teclado em um Array usando o for, e mostre os 10 números usando o for
// Nome: Joui Bomfim Mendonça

console.clear();
let teclado = require(`prompt-sync`)();

let meuArray : number [] = new Array();

for (let cont = 0; cont<=9; cont++){
    meuArray[cont] = parseInt(teclado(`Digite o número: `));
} 

for (let x = 0; x<10; x++){
    console.log(meuArray[x]);
}
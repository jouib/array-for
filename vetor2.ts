/* Faça um laço de repetição que contenha uma operação aritmética qualquer , esse laço vai se repetir 10x utilizando 
entrada de dados (prompt Sync), os resultados de cada operação serão armazenados em um vetor, após o término do 
laço de repetição os resultados de cada operação armazenada deve ser exibido (com laço de repetição ou não). */
// Nome: Joui Bomfim Mendonça

// índice 0                      0  1  2  3  4   5   6   7   8   9   10
let vetorOperacao : number [] = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]  

for(let rep = 0; rep <= 10;rep++){
    console.log(`2 x 0 = ${vetorOperacao[0]}`);
    console.log(`2 x 1 = ${vetorOperacao[1]}`);
    console.log(`2 x 2 = ${vetorOperacao[2]}`);
    console.log(`2 x 3 = ${vetorOperacao[3]}`);
    console.log(`2 x 4 = ${vetorOperacao[4]}`);
    console.log(`2 x 5 = ${vetorOperacao[5]}`);
    console.log(`2 x 6 = ${vetorOperacao[6]}`);
    console.log(`2 x 7 = ${vetorOperacao[7]}`);
    console.log(`2 x 8 = ${vetorOperacao[8]}`);
    console.log(`2 x 9 = ${vetorOperacao[9]}`);
    console.log(`2 x 10 = ${vetorOperacao[10]}`);
}

console.log(`Os resultados são ${vetorOperacao[0]}, ${vetorOperacao[1]}, ${vetorOperacao[2]}, ${vetorOperacao[3]}, ${vetorOperacao[4]}, ${vetorOperacao[5]}, ${vetorOperacao[6]}, ${vetorOperacao[7]}, ${vetorOperacao[8]}, ${vetorOperacao[9]}, ${vetorOperacao[10]}`);

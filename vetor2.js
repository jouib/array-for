/* Faça um laço de repetição que contenha uma operação aritmética qualquer , esse laço vai se repetir 10x utilizando
entrada de dados (prompt Sync), os resultados de cada operação serão armazenados em um vetor, após o término do
laço de repetição os resultados de cada operação armazenada deve ser exibido (com laço de repetição ou não). */
// índice 0                      0  1  2  3  4   5   6   7   8   9   10
var vetorOperacao = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
for (var rep = 0; rep <= 10; rep++) {
    console.log("2 x 0 = ".concat(vetorOperacao[0]));
    console.log("2 x 1 = ".concat(vetorOperacao[1]));
    console.log("2 x 2 = ".concat(vetorOperacao[2]));
    console.log("2 x 3 = ".concat(vetorOperacao[3]));
    console.log("2 x 4 = ".concat(vetorOperacao[4]));
    console.log("2 x 5 = ".concat(vetorOperacao[5]));
    console.log("2 x 6 = ".concat(vetorOperacao[6]));
    console.log("2 x 7 = ".concat(vetorOperacao[7]));
    console.log("2 x 8 = ".concat(vetorOperacao[8]));
    console.log("2 x 9 = ".concat(vetorOperacao[9]));
    console.log("2 x 10 = ".concat(vetorOperacao[10]));
}
console.log("Os resultados s\u00E3o ".concat(vetorOperacao[0], ", ").concat(vetorOperacao[1], ", ").concat(vetorOperacao[2], ", ").concat(vetorOperacao[3], ", ").concat(vetorOperacao[4], ", ").concat(vetorOperacao[5], ", ").concat(vetorOperacao[6], ", ").concat(vetorOperacao[7], ", ").concat(vetorOperacao[8], ", ").concat(vetorOperacao[9], ", ").concat(vetorOperacao[10]));

/* 1 – Faça dois vetores, um que contenha cada dia da semana, o outro que contenha sete atividades/hobby. 
Crie uma frase para cada dia da semana usando todos os índices dos dois vetores.*/
// Nome: Joui Bomfim Mendonça

// índice                  0             1         2        3         4         5         6
let semana : string [] = [`domingo`, `segunda`, `terça`, `quarta`, `quinta`, `sexta`, `sábado`]
// índice                    0           1        2         3          4          5          6
let hobbies : string [] = [`ler`, `escrever`, `dançar`, `desenhar`, `viajar`, `desenhar`, `costurar`]

console.log(`Todo ${semana[0]}, Dona Ivete gosta de ${hobbies[0]}, porém de ${semana[1]} ela prefere
${hobbies[1]}. De ${semana[2]} gosta de ${hobbies[2]}, enquanto de ${semana[3]} eu prefere 
${hobbies[3]}. Ademais  de ${semana[4]} Dona Ivete adora ${hobbies[4]}, contudo de ${semana[5]} 
ela gosta de ${hobbies[5]}. Por fim, ${semana[6]} Ivete gosta de ${hobbies[6]}, enquanto de 
${semana[7]} gosta de ${hobbies[7]}.`);
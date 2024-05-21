/* 1 – Faça dois vetores, um que contenha cada dia da semana, o outro que contenha sete atividades/hobby.
Crie uma frase para cada dia da semana usando todos os índices dos dois vetores.*/
// índice                  0             1         2        3         4         5         6
var semana = ["domingo", "segunda", "ter\u00E7a", "quarta", "quinta", "sexta", "s\u00E1bado"];
// índice                    0           1        2         3          4          5          6
var hobbies = ["ler", "escrever", "dan\u00E7ar", "desenhar", "viajar", "desenhar", "costurar"];
console.log("Todo ".concat(semana[0], ", Dona Ivete gosta de ").concat(hobbies[0], ", por\u00E9m de ").concat(semana[1], " ela prefere\n").concat(hobbies[1], ".De ").concat(semana[2], " gosta de ").concat(hobbies[2], ", enquanto de ").concat(semana[3], " eu prefere \n").concat(hobbies[3], ". Ademais  de ").concat(semana[4], " Dona Ivete adora ").concat(hobbies[4], ", contudo de ").concat(semana[5], " \nela gosta de ").concat(hobbies[5], ". Por fim, ").concat(semana[6], " Ivete gosta de ").concat(hobbies[6], ", enquanto de \n").concat(semana[7], " gosta de ").concat(hobbies[7], "."));

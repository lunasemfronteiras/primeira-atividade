// 8 - Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

    //- Se a media for igual ou maior que 7 - Aprovado
    //- Se a media for maior e igual a cinco e menor que 7 - Recuperação
    //- Se a media for menor que 5 - Reprovado

let num1 = 2
let num2 = 4
let num3 = 3

let media = (num1 + num2 + num3) /3
if(media >= 7){
    console.log("Aprovado")
}
else if (media >=5 && media <7){
    console.log("Recuperação")
}
else if (media < 5){
    console.log("Reprovado") 
}
var num = [6,8,7,34,65]
num[5] = 9 //Vetores começam com índice 0, nessa caso adiciona no índice 5
num.push(10) // Aqui o JS cria automático o espaço e aloca o valor
num.sort() //Ordena o vetor
console.log(`${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(num)

let valores = [1,6,3,89,100]
for(let pos=0;pos<valores.length;pos++){
    console.log(valores[pos])
}

//outro modo de for para arrays
/*

for(let pos in valores){
    console.log(valores[pos])
}

*/

let pos = valores.indexOf(10)
if (pos == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`Posição: ${pos}`)
}
function parimpar(n){
    if (n % 2 == 0){
        return  'Par'
    }else{
        return 'Impar'
    }
}

let res = parimpar(34)
console.log(res)

//-------------------------------------------------------

function soma(a=0, b=0){
    return a + b
}
console.log(soma(908,70))

//-------------------------------------------------------


let v = function(x){
    return x*2
}
console.log(v(5))

//--------------------------------------------------------

function fatorial(n){
    let fat=1
    for(let c =n; c >1;c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))

//------------------------------------------------------

function fatoriall(n){
    if(n==1){
        return 1
    }else {
        return n*fatoriall(n-1)
    }
}

console.log(fatoriall(5))

//-----------------------------------------------------

function square (n){
    return n*n
}
console.log(square(5))

//---------------------------------------------------
var num1 = 20
var num2 = 3
function multiplica() {
    return num1 * num2
  }
  console.log(multiplica())
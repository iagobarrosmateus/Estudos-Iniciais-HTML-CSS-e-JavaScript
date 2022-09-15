function contar(){
    //let = var
    let ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Faltam dados')
    }else{
        res.innerHTML = 'Contando: <br> '
        let i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p<=0){
            window.alert('Passo inválido!')
        }
        if(i<f){
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} `
            }
        }else{
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} `
            }
        }
        res.innerHTML += ` \u{1F3C1} Fim !`
    }
}
    
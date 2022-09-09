function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Erro')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Sua idade é: ${idade}`
        var gen = ''
        if (fsex[1].checked){
            gen = 'Mulher'
        }else{(fsex[0].checked)
            gen = 'Homem'
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
    }
}
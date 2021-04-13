function somar(s){
    var num = document.getElementById('numSoma')
    var num2 = document.getElementById('numSoma2')
    var res = document.getElementById('res')
    n1 = Number(num.value)
    n2 = Number(num2.value)
    s = n1 + n2
    res.innerHTML = `A soma entre ${n1} + ${n2} é igual a ${s}`
}
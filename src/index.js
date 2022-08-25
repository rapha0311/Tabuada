function gerar() {
    let txtn = document.getElementById('txtnum')
    let selt = document.getElementById('seltab')
    if (txtn.value.length == 0) {
        alert('Por favor preencha um número!')
    } else {
        let n = Number(txtn.value)
        let c = 1
        selt.innerHTML = 'Digite um número acima'

        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n * c}`
            item.value = `selt${c}`
            selt.appendChild(item)
            c++
        }

    }
}
let form = document.querySelector('.form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
})
let start = document.getElementById('start')
let end = document.querySelector('#end')
let pular = document.getElementsByName('passo')[0]
let btn = document.querySelector('.btn')
let r = document.getElementsByClassName('resultado')[0]

btn.addEventListener('click', function () {
    let Start = Number(start.value)
    let End = Number(end.value)
    let Pular = Number(pular.value)
    r.innerHTML = `<p>Início da contagem: <strong>${Start}</strong></p>`
    r.innerHTML += `<p>Fim da contagem: <strong>${End}</strong></p>`
    r.innerHTML += `<p>Passo: <strong>${Pular}</strong></p>`
    if (Pular == 0) {
        r.innerHTML += `<p>Insira um valor maior que 0(zero) nos campos obrigatórios.</p>`
    }
    else {
        for (Start; Start <= End; Start += Pular) {
            r.innerHTML += `${Start}&nbsp;&nbsp;`
        }
        for (Start; Start >= End; Start -= Pular) {
            r.innerHTML += `${Start}&nbsp;&nbsp;`
        }
    }
})
function initForm(){
    getNavbar()
    getTipos()
}

function getTipos(){
    const tipo = document.getElementById('tipos')
    fetch('http://localhost:3000/tipos')
    .then(res=> res.json())
    .then(data=> {
        tipo.innerHTML += `<option selected>Escolha um tipos.../option>`
        for(i in data){
            let op =
            `<option value"${data[i].idtipo}">${data[i].designacao}</option>`
            tipo.innerHTML += op
        }
    })
    .catch((err)=>{
        alert('Errro no pedido...')
    })

}

function adicionar(){
    let nome = document.getElementById('nome')
   
    let rua = document.getElementById('rua')

    let numero = document.getElementById('numero')

    let email = document.getElementById('email')

    let tel = document.getElementById('tel')

    let nascimento = document.getElementById('nascimento')

    let tipos = document.getElementById('tipo')
   
    let objeto = {
        nomeutilizador: nome,
        moradarua: morada_rua,
        moradanumero: morada_numero,
        datanascimento: dnasc,
        telemovel: tel,
        email: email,
        idtipos: tipos

    }
    //Transformar o objeto em JSON
    let objetoJSON = JSON.stringify(obj)
    const option= {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: objetoJSON

    }
    fetch('https://localhost:3000/inserirutilizador ',options)
    .then(res => res.text)
    .then(text => {
        alert(text)
    })
    .catch((err)=>{
        alert('Ocorreu um erro no pedido...')
    })
    }

function getNavbar(){
    const nbar = document.getElementById('nbar')
    fetch('http://localhost:3000/navbar.html')
    .then(res => res.text())
    .then((html)=> [
        nbar.innerHTML += html
    ])
    .catch(function(err){
        alert('ocureu um erro')
    })
}
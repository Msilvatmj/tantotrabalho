function getNavbar(){
    const nbar = document.getElementById('nbar')
    fetch('http://localhost:3000/navbar.html')
    .then(res => res.text())
    .then(html =>[ 
        nbar.innerHTML += html
    ])
    .catch(function(err){
          alert('Ocorreu um problema...')
    })

}
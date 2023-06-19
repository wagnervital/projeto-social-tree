function toggleMode() {
    const html = document.documentElement
    
    // O QUE O TOGGLE FAZ:
    //if(html.classList.contains('light')) {
     //   html.classList.remove('light')
    //} else {
     //   html.classList.add('light')
    //}
    html.classList.toggle('light')

    //pegar a tag img
    const img = document.querySelector('#profile img') // query = pesquisa
    //substituir a imagem
    if(html.classList.contains('light')) {
    //se tiver light mode, adicionar a imagem light
        img.setAttribute('src', './/assets/avatar-light.png') //modificar algum atributo
    } else {
    //se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/WhatsApp Image 2023-04-14 at 14.38.58.jpeg')
    }

    if(html.classList.contains('light')) {
        img.setAttribute('alt', 'foto do Mayke')
    } else {
        img.setAttribute('alt', 'foto do Wagner')
    }
        


}
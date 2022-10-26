function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours();
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas` + '<br>'
   
//    hora = 1.00;
   

   if (hora >= 0 && hora < 5){
    msg.innerHTML += ('<strong>Boa Madrugada!</strong>')
    img.src = "imagens/madrugada-red.png"
    document.body.style.background = '#26201b'
   } else if (hora >= 5 && hora < 12) {
    msg.innerHTML += ('<strong>Bom dia!</strong>')
           img.src = "imagens/manhared.png"
           document.body.style.background = "#dcc38d"
   } else if (hora >= 12 && hora < 18) {
    msg.innerHTML += ('<strong>Boa tarde!</strong>')
           img.src = "imagens/tardered.png"
           document.body.style.background = "#624312"
           document.getElementById('msg').style.color = "#6D8A9C"
   } else{
    msg.innerHTML += ('<strong>Boa Noite!</strong>')
           img.src = "imagens/noitered.png"
           document.body.style.background = '#26201b'
   }
}



// if (hora >= 5 && hora <=12){
//     console.log ('Bom dia !')
// } else if (hora > 12 && hora <= 18 ){
//     console.log('Boa tarde !');
// } else if(hora > 18 && hora < 24){
//     console.log ('Boa noite');
// } else{
//     console.log('Boa Madrugada');
// }
var estadoLicuadora = false;
var licuadora = document.getElementById('blender');
var sonidoLicuadora = document.getElementById('blenderSound');
var sonidoBotonLicuadora = document.getElementById('blenderButtonSound');

function controlarLicuadora(){
   estadoLicuadora = !estadoLicuadora;
   if(estadoLicuadora) {
        licuadora.classList.add('active');
        Sonido();
    }
   else {
        licuadora.classList.remove('active');
        Sonido();
    }
///verificar funcionamiento:
//   if(estadoLicuadora) console.log('me encendiste');
//   else console.log('me apagaste');
}

function Sonido (){
    if(sonidoLicuadora.paused){
        sonidoBotonLicuadora.play();
        sonidoLicuadora.play()
    }else{
        sonidoBotonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}
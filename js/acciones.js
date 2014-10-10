//JavaScript
	
$(document).ready(function(e){//esperar que el documento este ready
    document.addEventListener("deviceready",function(){
		//espera que el dispositivo este listo para empezar a escuchar los eventos los atrapemos para hacer algo
		//para los dispositivos existen el evento de tap que se encuentra en la libreria jquery.mobile
	$('#beep').tap(function(){
		   navigator.notification.beep(1);
	});//tap beep
	$('#vibrar').tap(function(){
		   navigator.notification.vibrate(1000);
	});//tap vibrar
	},false);//deviceready
});//ready

	
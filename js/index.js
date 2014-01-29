var pictureSource;
var destinationType;

var app = {

	// contrutor da aplicacao
	initialize: function() {
		this.bindEvents();
	},

	// Bind Event Listeners
	//
	// Vincular eventos que são necessários na inicialização. Eventos comuns são:
	// 'load', 'deviceready', 'offline', e 'online'.
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},

	// deviceready Event Handler
	//
	// O escopo de "this" é o evento. A fim de chamar o 'receivedEvent'
	// função, devemos explicitamente chamar 'app.receivedEvent (...);' -> exemplo anterior
	onDeviceReady: function() {
		pictureSource = navigator.camera.PictureSourceType;
		destinationType = navigator.camera.DestinationType;
	},

	capturePhoto: function() {
		navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
			quality: 50,
			destinationType: destinationType.DATA_URL
		});
	},

	onPhotoDataSuccess: function(imageData) {
		var image = document.getElementById('photoImage'); // pegando elemento img
		image.style.display = 'block'; // aplica block ao elemento image
		image.src = "data:image/jpeg;base64," + imageData; // jogando a imagem no elemento
	},

	onFail: function(message) {
		alert('Erro: '+message)
	}

};
$(document).ready(function () {
	$('.home').delay('6000').fadeIn('slow');
	var boxLogo = $("#box-logo");
	boxLogo.animate({
		height: '250px'
	}, "slow");
	boxLogo.animate({
		width: '250px',
		opacity: '0.4'
	}, "slow");
	boxLogo.animate({
		height: '50px',
		width: '50px',
		opacity: '0.6'
	}, "slow");
	boxLogo.animate({
		width: '250px',
		opacity: '1.0'
	}, "slow");
	boxLogo.animate({
		width: '250px',
		height: '250px',
		opacity: '1.0'
	}, "slow");
	boxLogo.animate({
		width: '250px',
		height: '250px',
		opacity: '0.6'
	}, "slow");
	boxLogo.animate({
		width: '250px',
		height: '250px',
		opacity: '1.0'
	}, "slow");

	for (var i of restaurantes) {
		var imgRestaurante = i.image;
		var imgHtml = '<img class="img-Restaurante mb-2" src="' + imgRestaurante + '" alt="">';
		$("#box-img").append(imgHtml);
	};

	$('.filtrar').click(function () {
		alert('deu certo');

	});


});








function initMap() {
	// The location of Uluru
	var uluru = {
		lat: -25.344,
		lng: 131.036
	};
	// The map, centered at Uluru
	var map = new google.maps.Map(
		document.getElementById('map'), {
			zoom: 4,
			center: uluru
		});
	// The marker, positioned at Uluru
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}

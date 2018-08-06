$(document).ready(function () {
	$('.home').delay('6000').fadeIn('slow');
	var boxLogo = $("#box-logo");
	boxLogo.animate({
		height: '300px'
	}, "slow");
	boxLogo.animate({
		width: '300px',
		opacity: '0.4'
	}, "slow");
	boxLogo.animate({
		height: '50px',
		width: '50px',
		opacity: '0.6'
	}, "slow");
	boxLogo.animate({
		width: '300px',
		opacity: '1.0'
	}, "slow");
	boxLogo.animate({
		width: '300px',
		height: '300px',
		opacity: '1.0'
	}, "slow");
	boxLogo.animate({
		opacity: '0.6'
	}, "slow");
	boxLogo.animate({
		opacity: '1.0'
	}, "slow");

	for (var i of restaurantes) {
		var imgRestaurante = i.image;
		var nameId = i.name;
		var imgHtml = '<div class="d-flex flex-column justify-content-center div-Box mb-4 mx-2" id="' + nameId + '" data-toggle="modal" data-target="#exampleModal"><p class="titulo align-self-center">' + nameId + '</p><img class="align-self-center img-Restaurante" src="' + imgRestaurante + '" alt="" ></div>';
		$("#box-img").append(imgHtml);
	};



	$('.filtrar').click(function () {
		var typedWord = $('#filter').val();
		$('.img-Restaurante').remove();
		$('.titulo').remove();
		$('.div-Box').remove();
		for (var restaurante of restaurantes) {
			if (typedWord === restaurante.type || typedWord === restaurante.name) {
				var idName = restaurante.name;
				var imgTyped = restaurante.image;
				var imgRest = '<div class="d-flex flex-column justify-content-center div-Box mb-4 mx-2" id="' + idName + '" data-toggle="modal" data-target="#exampleModal"><p class="titulo align-self-center">' + idName + '</p><img class="align-self-center img-Restaurante mb-2" src="' + imgTyped + '" alt="" id="' + idName + '"></div>';
				$("#box-img").append(imgRest);
			}
		}
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

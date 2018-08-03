$(document).ready(function () {
	$('.home').delay('5000').fadeIn('slow');
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

	var map, infoWindow;

	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {
				lat: -34.397,
				lng: 150.644
			},
			zoom: 6
		});
		infoWindow = new google.maps.InfoWindow;

		// Try HTML5 geolocation.
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				var pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};

				infoWindow.setPosition(pos);
				infoWindow.setContent('Location found.');
				infoWindow.open(map);
				map.setCenter(pos);
			}, function () {
				handleLocationError(true, infoWindow, map.getCenter());
			});
		} else {
			// Browser doesn't support Geolocation
			handleLocationError(false, infoWindow, map.getCenter());
		}
	}

	function handleLocationError(browserHasGeolocation, infoWindow, pos) {
		infoWindow.setPosition(pos);
		infoWindow.setContent(browserHasGeolocation ?
			'Error: The Geolocation service failed.' :
			'Error: Your browser doesn\'t support geolocation.');
		infoWindow.open(map);
	}

});

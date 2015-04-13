var main = function() {
	var request = new XMLHttpRequest();
	request.open("GET", "https://morning-peak-4677.herokuapp.com/add", true);

	request.onreadystatechange = function () {

		if (request.readystate == 4 && request.status == 200) {
			
			var bookinfos = JSON.parse(request.responseText);

			for (var i = 0; i < bookinfos.length; i++) {
				$('<li>').text(array[i].title).prependTo('.bookinfo');
			}
		}

	};

	request.send();

}

$(document).ready(main);

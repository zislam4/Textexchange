var main = function() {
	var request = new XMLHttpRequest();
	request.open("GET", "https://morning-peak-4677.herokuapp.com/", true);

	request.onreadystatechange = function () {
		console.log(request.readyState);
		console.log(request.status);
		if (request.readyState == 4 && request.status == 200) {
			var bookinfos = JSON.parse(request.responseText);
			console.log(bookinfos[1]["title"]);
			for (var i = 0; i < bookinfos.length; i++) {
				if (bookinfos[i]["title"] != null) {
					$('<li>').text(bookinfos[i]["title"]).prependTo('.bookinfo');
				}
			}
		}

	};

	request.send();

}

$(document).ready(main);

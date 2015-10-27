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
				if (bookinfos[i]["seller_name"] != null) {
					var li = $('<li>').text(bookinfos[i]["title"]);
					li.addClass("bookItem");

					$(".bookinfo").append(li);
					$(".bookinfo").append("<div class='hide'> hello </div>");
					console.log(bookinfos[i]["title"]);

				}
			}
			$(".bookinfo").find(".hide").hide();
			$("li.bookItem").click(function() {
				console.log($(this).text());
				$(this).next().append("li.bookItem".title);
				$(this).next().toggle();
			});	
			
		}

	};
	request.send();
};

$(document).ready(main);


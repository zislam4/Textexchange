var main = function() {
	var request = new XMLHttpRequest();
	request.open("GET", "https://morning-peak-4677.herokuapp.com/", true);

	request.onreadystatechange = function () {
		// console.log(request.readyState);
		// console.log(request.status);
		if (request.readyState == 4 && request.status == 200) {
			var bookinfos = JSON.parse(request.responseText);
			for (var i = 0; i < bookinfos.length; i++) {
				if (bookinfos[i]["seller_name"] != null) {
					var li = $('<li>').text(bookinfos[i]["title"] + bookinfos[i]['price']);
					li.addClass("bookItem");

					$(".bookinfo").append(li);
					$(".bookinfo").append(
						"<div class='hide'>" + 
						"<p class='info author'>" + bookinfos[i]['author'] + "</p>" +
						"<p class='info vol'>" + bookinfos[i]["vol"] + "</p>" +
						"<p class='info edition'>" + bookinfos[i]['edition'] + "</p>" +
						"<p class='info classname'>" + bookinfos[i]["classname"] + "</p>" +
						"<p class='info coursenum'>" + bookinfos[i]["coursenum"] + "</p>" +
						"<p class='info prof'>" + bookinfos[i]['prof'] + "</p>" +
						"<p class='info condition'>" + bookinfos[i]['condition'] + "</p>" +
						"<p class='info seller_name'>" + bookinfos[i]["seller_name"] + "</p>" +
						// "<p class='info price'>" +  + "</p>"
						"</div>");
				}
			}
			$(".bookinfo").find(".hide").hide();
			$("li.bookItem").click(function() {
				$(this).next().append("li.bookItem".title);
				$(this).next().toggle();
			});	
			
		}

	};
	request.send();
};

$(document).ready(main);


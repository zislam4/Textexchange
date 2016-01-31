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
					var li = $('<li>');
					li.addClass("bookItem");
					li.append("<p class= 'title'>" + bookinfos[i]["title"] + "</p>"
							+ "<p class='price'>$" + bookinfos[i]['price'] + "</p>"
							+ "<img class='arrow' src='../img/dropdown_arrow2.png'/>");
					$(".bookinfo").append(li);
					$(".bookinfo").append(
						"<div class='hide'>" + 
							"<div class='bookdetails'>" +
								"<p class='info author'>" + bookinfos[i]['author'] + "</p>" +
								"<p class='info vol'> Volume: " + bookinfos[i]["vol"] + "</p>" +
								"<p class='info edition'>Edition: " + bookinfos[i]['edition'] + "</p>" +
							"</div>" +
							"<div class='classdetails'>" +
								"<p class='info classname'>Class: " + bookinfos[i]["classname"] + "</p>" +
								"<p class='info coursenum'>Class ID: " + bookinfos[i]["coursenum"] + "</p>" +
								"<p class='info prof'>Professor: " + bookinfos[i]['prof'] + "</p>" +
							"</div>" +
							"<p class='info condition'>Condition: " + bookinfos[i]['condition'] + "</p>" +
							"<p class='info seller_name'>Sold by: " + bookinfos[i]["seller_name"] + "</p>" +
						"</div>"
					);
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


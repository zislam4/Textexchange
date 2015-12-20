var main = function() {
	$('#add-books-form').hide();
	// Saving user_info from sellerhome.html

	// var seller_name = user_info.name;
	// var seller_id = user_info.id;

	// Printing seller's books
	// var request = new XMLHttpRequest();
	// var url = "https://morning-peak-4677.herokuapp.com/managebooks?"+"seller_id="+seller_id;
	// request.open("GET", url, true);

	// request.onreadystatechange = function () {
	// 	if (request.readyState == 4 && request.status == 200) {
	// 		var bookinfos = JSON.parse(request.responseText);
	// 		for (var i = 0; i < bookinfos.length; i++) {
	// 			if (bookinfos[i]["title"] != null) {
	// 				// $('<li>').text(bookinfos[i]["title"]).prependTo('.mybookinfo');
	// 				var li = $('<li>').text(bookinfos[i]["title"]);
	// 				li.addClass("bookItem");

	// 				$(".mybookinfo").append(li);
	// 				$(".mybookinfo").append("<div class='hide'> hello </div>");
	// 			}
	// 		}
		
	// 	$(".bookinfo").find(".hide").hide();
	// 	$("li.bookItem").click(function() {
	// 		$(this).next().append("li.bookItem".title);
	// 		$(this).next().toggle();
	// 	});	
	// 	}
	// };

	// request.send();


	// Begin interactive functions

		// Creates the form 
		// var form = "<div id = 'add-books-form'> FORM IS HERE </div>";
		// $("#form").next().append(form);

	$('.add-books-button').click(function(){
			$(this).next().toggle();
			console.log("in toggle");
			console.log($(this));
			console.log($(this).next());
	});


	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

	$('.title-box').keyup(function() {
		var title_length = $(this).val().length;

		if (title_length <= 0) {
			$('.btn').addClass('disabled');
		} else {
			$('.btn').removeClass('disabled');
		}
	});

	$('.button-group').click(function() {
		var xhr = new XMLHttpRequest();
		xhr.open("post", "https://morning-peak-4677.herokuapp.com/add", true);

		var title = $('.title-box').val(); 
		var author = $('.author-box').val();
		var vol = $('.vol-box').val(); 
		var edi = $('.edi-box').val(); 
		var clname = $('.class-box').val(); 
		var cnum = $('.course-box').val(); 
		var prof = $('.prof-box').val(); 
		var price = $('.price-box').val(); 
		var cond = $('.cond-box').val(); 		

		var bookinfo = "seller_name="+seller_name+"&seller_id="+seller_id+"&title="+title+"&author="+author+"&vol="+vol		+"&edition="+edi+"&classname="+clname+"&coursenum="+cnum+"&prof="+prof+"&price="+price+"&condition="+cond;
		console.log(bookinfo);
		
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.setRequestHeader("Content-length", bookinfo.length);
		xhr.setRequestHeader("Connection", "close");

		xhr.send(bookinfo);

		// $('<li>').text(title).prependTo('.posts');
		// $('<li>').text(title).prependTo('.manage-books');
		// $('<li>').text(author).prependTo('.posts');
		// $('<li>').text(vol).prependTo('.posts');
		// $('<li>').text(edi).prependTo('.posts');
		// $('<li>').text(clname).prependTo('.posts');
		// $('<li>').text(cnum).prependTo('.posts');
		// $('<li>').text(prof).prependTo('.posts');
		// $('<li>').text(price).prependTo('.posts');
		// $('<li>').text(cond).prependTo('.posts');

		$('.title-box').val('');
		$('.author-box').val('');
		$('.vol-box').val('');
		$('.edi-box').val('');
		$('.class-box').val('');
		$('.course-box').val('');
		$('.prof-box').val('');
		$('.price-box').val('');
		$('.cond-box').val('');

		$('.btn').addClass('disabled');	
	});

	$('.btn').addClass('disabled');
}

$(document).ready(main);

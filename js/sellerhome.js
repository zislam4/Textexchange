var main = function() {
	$('#add-books-form').hide();

	var user_info;
// This is called with the results from from FB.getLoginStatus().
	function statusChangeCallback(response) {
		// The response object is returned with a status field that lets the
		// app know the current login status of the person.
		// Full docs on the response object can be found in the documentation
		// for FB.getLoginStatus().
		if (response.status === 'connected') {
		// Logged into your app and Facebook.
		testAPI();
		} else if (response.status === 'not_authorized') {
		// The person is logged into Facebook, but not your app.
		document.getElementById('status').innerHTML = 'Please log ' +
		'into this app.';
		} else {
		// The person is not logged into Facebook, so we're not sure if
		// they are logged into this app or not.
		document.getElementById('status').innerHTML = 'Please log ' +
		'into Facebook.';
		}
	}

// This function is called when someone finishes with the Login
// Button. See the onlogin handler attached to it in the sample
// code below.
	function checkLoginState() {
		FB.getLoginStatus(function(response) {
			statusChangeCallback(response);
		});
	}

	window.fbAsyncInit = function() {
		FB.init({
			appId : '870286709733829',
			cookie : true, // enable cookies to allow the server to access
			// the session
			xfbml : true, // parse social plugins on this page
			version : 'v2.2' // use version 2.2
		});

		// Now that we've initialized the JavaScript SDK, we call
		// FB.getLoginStatus(). This function gets the state of the
		// person visiting this page and can return one of three states to
		// the callback you provide. They can be:
		//
		// 1. Logged into your app ('connected')
		// 2. Logged into Facebook, but not your app ('not_authorized')
		// 3. Not logged into Facebook and can't tell if they are logged into
		// your app or not.
		//
		// These three cases are handled in the callback function.

		FB.getLoginStatus(function(response) {
			statusChangeCallback(response);
		});

	};

	// Load the SDK asynchronously
	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	// Here we run a very simple test of the Graph API after login is
	// successful. See statusChangeCallback() for when this call is made.
	function testAPI() {
		console.log('Welcome! Fetching your information.... ');
		FB.api('/me', function(response) {
			user_info = response;
			main();
			document.getElementById('status').innerHTML =
			'Thanks for logging in, ' + response.name + '!';
			get_seller_books();
		});
	}

	function get_seller_books () {
		var seller_name = user_info.name;
		var seller_id = user_info.id;
		console.log(seller_name);
		console.log(seller_id);
		var request = new XMLHttpRequest();
		var url = "https://morning-peak-4677.herokuapp.com/managebooks?seller_id="+seller_id;
		request.open("GET", url, true);

		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var bookinfos = JSON.parse(request.responseText);
				for (var i = 0; i < bookinfos.length; i++) {
					if (bookinfos[i]["title"] != null) {
						var li = $('<li>').text(bookinfos[i]["title"]);
						li.addClass("bookItem");

						$(".mybookinfo").append(li);
						$(".mybookinfo").append("<div class='hide'> hello </div>");
					}
				}
			
				$(".bookinfo").find(".hide").hide();
				$("li.bookItem").click(function() {
					console.log('here');
					$(this).next().append("li.bookItem".title);
					$(this).next().toggle();
				});	
			}
		};

		request.send();
	}

	$('.add-books-button').click(function(){
		$('#add-books-form').toggle();
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

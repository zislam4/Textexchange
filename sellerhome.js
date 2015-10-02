var main = function() {

	console.log("We're in main!");
	console.log(user_info);
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

	$('.title-box').keyup(function() {
		var title_length = $(this).val().length;

		if (title_length <= 0) {
			$('.btn').addClass('disabled');
		} else {
			$('.btn').removeClass('disabled');
		}
	});

	$('.btn').click(function() {
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


		var bookinfo = "title="+title+"&author="+author+"&vol="+vol+"&edition="+edi+"&classname="+clname+"&coursenum="+cnum+"&prof="+prof+"&price="+price+"&condition="+cond;

		
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.setRequestHeader("Content-length", bookinfo.length);
		xhr.setRequestHeader("Connection", "close");

		xhr.send(bookinfo);
/*
		$('<li>').text(title).prependTo('.posts');
		$('<li>').text(title).prependTo('.manage-books');
		$('<li>').text(author).prependTo('.posts');
		$('<li>').text(vol).prependTo('.posts');
		$('<li>').text(edi).prependTo('.posts');
		$('<li>').text(clname).prependTo('.posts');
		$('<li>').text(cnum).prependTo('.posts');
		$('<li>').text(prof).prependTo('.posts');
		$('<li>').text(price).prependTo('.posts');
		$('<li>').text(cond).prependTo('.posts');
*/
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

//$(document).ready(main);

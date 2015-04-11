var main = function() {
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

	$('.btn').click(function() {
		var post = $('.status-box').val();
		$('<li>').text(post).prependTo('.posts');
		$('.status-box').val('');
		$('.btn').addClass('disabled');
	});

	$('.status-box').keyup(function() {
		var post_length = $(this).val().length;

		if (post_length <= 0) {
			$('.btn').addClass('disabled');
		} else {
			$('.btn').removeClass('disabled');
		}
	});

	$('.btn').addClass('disabled');
}

$(document).ready(main);
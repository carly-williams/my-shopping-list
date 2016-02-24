$(document).ready(function(){
	$('.list-group').on('click', '.fa-square-o', function(event){
	  // fires when any LIs are clicked on
	  // including LIs that aren't on the page when it is initially loaded
	  $(this).before('<i class="fa fa-check-square-o fa-lg"></i>');
	  $(this).next().css({'text-decoration': 'line-through', 'color': '#969696'});
	  $(this).remove();
	});

	$('.list-group').on('click', '.fa-check-square-o', function(event){
	  $(this).before('<i class="fa fa-square-o fa-lg"></i>');
	  $(this).next().css({'text-decoration': 'none', 'color': 'black'});
	  $(this).remove();
	});

	$('.list-group').on('click', '.fa-times', function(event){
	  $(this).parent().remove();
	}); 

	$('.item').keydown(function(event) {
		if (event.keyCode === 13) {
			var item = $('.item').val();
			$('.list-group').prepend(
				'<div class="list-item">' +
					'<div class="checkbox-item">' +
						'<i class="fa fa-square-o fa-lg"></i>' +
						'<div class="item-name">' + item + '</div>' +
					'</div>' +
					'<i class="fa fa-times"></i>' +
				'</div>');
			$('.item').val('');
		}
	});
});
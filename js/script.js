$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			 $(".success").toggleClass("show__form");
             
             $(".overlay").toggleClass("show__form");
		});
		return false;
	});

});
$(document).ready(function() {
	
	$("#image_list a").each(function() {
		var image = new Image();
		image.src = $(this).attr("href");
	});
	
	$("#image_list a").click(function(evt) {

		var imageLink = $(this).attr("href");
        var caption = $(this).attr("title");
		
      //here we fade out caption and image and then we reload new version.
        $("#caption, #image").fadeOut(800, function () {
            $("#image").attr("src", imageLink);
            $("#caption").text(caption);
            $("#caption, #image").fadeIn(800);
        });

	    evt.preventDefault();
	});

	$("li:first-child a").focus();
}); 
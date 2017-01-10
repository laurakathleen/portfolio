$(function(){
	$(document).ready();
	console.log('sanity check');

	fadeInUp('#about-me-blurb', 370);
	fadeInUp('.all-steps', 855);
	fadeInUp('.work-flow-text', 855);
	fadeInUp("#a-few-short-miles", 1280);
	fadeInUp("#few-short-miles-preview", 1280);
	fadeInUp("#within-reach", 1860);
	fadeInUp("#within-reach-preview", 1860);
	fadeInUp("#the-best-hour", 2430);
	fadeInUp("#best-hour-preview", 2430);
	fadeInUp(".contact-text", 3135);
	fadeInUp(".icon-container", 3135);
	fadeInUp(".icon-container", 3135);
	fadeInUp('#copyright', 3135);

	function fadeInUp(element, height){
    $(window).scroll(function() { 
        if ($(this).scrollTop() > height) { 
            $(element).css('visibility','visible');   
            $(element).addClass('animated fadeInUp');  
        } 
    });
};

});
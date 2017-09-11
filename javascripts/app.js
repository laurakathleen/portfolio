// $(function(){
// 	$(document).ready();
// 	console.log('sanity check');

// 	fadeInUp('#about-me-blurb', 370);
// 	fadeInUp('.all-steps', 855);
// 	fadeInUp('.work-flow-text', 855);
// 	fadeInUp("#a-few-short-miles", 1280);
// 	fadeInUp("#few-short-miles-preview", 1280);
// 	fadeInUp("#within-reach", 1860);
// 	fadeInUp("#within-reach-preview", 1860);
// 	fadeInUp("#the-best-hour", 2430);
// 	fadeInUp("#best-hour-preview", 2430);
// 	fadeInUp(".contact-text", 3135);
// 	fadeInUp(".icon-container", 3135);
// 	fadeInUp(".icon-container", 3135);
// 	fadeInUp('#copyright', 3135);

// 	function fadeInUp(element, height){
//     $(window).scroll(function() { 
//         if ($(this).scrollTop() > height) { 
//             $(element).css('visibility','visible');   
//             $(element).addClass('animated fadeInUp');  
//         } 
//     });
// };

// });

// $(document).ready(function () {
// 	console.log('sanity check');

// 	scrollBackgroundColor("#about", "#CDD5D1", "#D8C0B8");
    
// });

// function scrollBackgroundColor(page, newColor, originalColor){
// 	var scrollPos = 0;
//     $(document).scroll(function () {
//         scrollPos = $(page).scrollTop();
//         if (scrollPos > 210) {
//             $(page).css('background-color', newColor);
//         } else {
//             $(page).css('background-color', originalColor);
//         }
//         console.log(scrollPos);
//     });
// }
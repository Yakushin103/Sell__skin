$(document).ready(function(){
  // высота 100%
// $('.header').height($(window).height());
//прокрутка до выброного в меню блока
 $(".navbar__link a").click(function(){
 	$("body,html").animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top
 	},1000)

  })
})

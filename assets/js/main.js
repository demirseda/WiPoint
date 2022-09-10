$(document).ready( function(){
    $(window).scroll(function(){
		if($(window).scrollTop() <= 40){
            $(".navbar_menu").removeClass("navbar_fixed");
			
		} else {
			$(".navbar_menu").addClass("navbar_fixed");
		}
	});

	$(".nav_responsive_menu").click(function(){
		$(".navbar_wrapper").addClass("res_active");
	});
	$(".navbar_res_menu_close").click(function(){
		$(".navbar_wrapper").removeClass("res_active");
	});
});
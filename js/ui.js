
/*$(window).scroll(function() {  
  if ($(".sub_header").length > 0 ) {
    if ($(".sub_header").offset().top > 0){
      $(".sub_header").addClass("bgfff");
    } else {
      $(".sub_header").removeClass("bgfff");
    }
  }
});*/

$(window).scroll(function() {  
	if ($("header").offset().top > 50){
		$(".top_util").addClass("dpnone");
		$(".header_line").addClass("bgfff");
	} else {
		$(".top_util").removeClass("dpnone");
		$(".header_line").removeClass("bgfff");
    }
});


$(document).ready(function () {
		jQuery('.see_btn').click(function () {  
    if($(".pop_search").css("display") == "none"){   
        jQuery('.pop_search').show();
    } else {  
        jQuery('.pop_search').hide();
    }
  });
});

$(document).ready(function () {
	jQuery('.pop_sr_btn').click(function () {
		jQuery('.pop_search').hide();
  });
});


$( document ).ready(function() {
	$('.selb_link').click(function(){
		if(!$(this).hasClass('selb_on'))
			$('.selb_link').removeClass('selb_on');
			$(this).toggleClass('selb_on');
			$(this).next(".add_menu").slideToggle().siblings(".add_menu:visible").slideToggle();
		})
	});


jQuery(document).ready(function () {
    var offset = 200;
    var duration = 500;
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });

    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollBottom: 0 }, duration);
        return false;
    });
});


function check1()
{
  $(".genbt01").addClass('ondid');
  $(".genbt02").removeClass('ondid');
}
function check2()
{
  $(".genbt01").removeClass('ondid');
	$(".genbt02").addClass('ondid');
}
//Add Hover effect to menus
jQuery('ul.nav li.dropdown').hover(function() {
  jQuery(this).find('.dropdown-menu').stop(true, true).delay(300).fadeIn();
  jQuery(this).addClass('active');
 // jQuery(this).find('a').removeAttr("title");  
}, function() {
  jQuery(this).find('.dropdown-menu').stop(true, true).delay(300).fadeOut();
  jQuery(this).removeClass('active');
});
$('body').attr("spellcheck",false);
$('#closepane').click(function(){	
	$('.tab-content > .active').removeClass('fade in active');
	$('#closepane').css('display','none');
});
$('.nav-tabs a').click(function(){
	$('#closepane').css('display','inline-block');
  var tabid=$("li.active a" ).attr("href");
   $(tabid).removeClass("fade in active");
  var newtab=$(this).attr("href");
  if( $(newtab).hasClass("active")){
   $(newtab).addClass("fade in ");
  }
   else{
    $(newtab).addClass("fade in active");
  }
});
  $(function() {
  	$('#display').text('');
    $( "#dialog" ).dialog({
          autoOpen: false,
          show: {
            effect: "slide",
            duration: 1000
          },
          hide: {
            effect: "slide",
            duration: 1000
          }
        });
     $( "#dialog2" ).dialog({
          autoOpen: false,
          show: {
            effect: "slide",
            duration: 1000
          },
          hide: {
            effect: "slide",
            duration: 1000
          }
        });
    });


$(document).scroll(function(e){

	var tabid=$("li.active a" ).attr("href");
	var scrollPercent = ($(tabid).outerHeight() - window.scrollY) / $(tabid).outerHeight();
    if(scrollPercent >= 0){
    	var tabid=$('li.active a').attr("href");
        $(tabid).css('opacity', scrollPercent);
        $('#closepane').css('display','inline-block');
		$(tabid).addClass('active');
	}else{
    	$('#closepane').css('display','none');
    	$('.tab-content .active').removeClass('active');
    }
});
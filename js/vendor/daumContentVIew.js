$(document).ready(function() {
	
    var content =  $(".content.info").width();
    $(".content.info").children().each(function(index){
    		$(this).css('width','auto');
    		$(this).css('max-width',content);
    		$(this).css('word-break', ' break-word');
    })
    
    $(".content.info").find('img').each(function(index){
    	$(this).css('width','auto');
    	$(this).css('max-width',content-48+'px');  
    	$(this).css('word-break', ' break-word');
    })
     
});


$(window).resize(function() {
    var content = $('.content').css('width');
    
    $(".content.info").children().each(function(index){
        	$(this).css('width','auto');
    		$(this).css('max-width',content);
    		$(this).css('word-break', ' break-word');
})

    $(".content.info").find('img').each(function(index){
    	$(this).css('width','auto');
    	$(this).css('max-width',content-48+'px');  
    	$(this).css('word-break', ' break-word');
    })
});



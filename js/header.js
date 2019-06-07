	$(document).ready(function() {


		$(".navigation-switch").mouseover(function(){
			if(!$(".navigationContent").hasClass("active")){
				$(".navigationContent").addClass("active");
			}
		});

		$(".navigation-switch").mouseleave (function(){
			if($(".navigationContent").hasClass("active")){
				$(".navigationContent").removeClass("active");
			}
		});



			/*ul 태그*/
        var $gnbList = $("ul.theory");
        var $gnbMenu = $gnbList.find("> li");
        /*span 태그*/
        var $gnbAcc = $(".liUnder");

        /* a 태그*/
        var menuGap = parseInt($gnbMenu.find("> a").css("paddingLeft"));

        $gnbMenu.on("mouseenter.hover focusin.hover", function(){

            var gnbAccPos = $(this).find("a").offset().left;
            var gnbWidth = $(this).find("a").width()*1;

						console.log(" gnbAccPos :: " +gnbAccPos );
						console.log(" gnbWidth :: " + gnbWidth);
						console.log(" menuGap :: " + menuGap);


            if( gnbAccPos === 0 ) {
                TweenMax.to( $gnbAcc, .1, { x : gnbAccPos,width:gnbWidth } );
            } else {
                TweenMax.to( $gnbAcc, .1, { x : gnbAccPos,width:gnbWidth } );
            }
        });

        var $uberSection =$(".uberSection");
        var $uberColumn =$uberSection.find(".uberColumn");

        $uberColumn.on("mouseenter.hover focusin.hover", function(){

             var curIndex = $(this).index();

        	 var gnbAccPos = $gnbMenu.eq(curIndex).find("a").offset().left;
        	 var gnbWidth = $gnbMenu.eq(curIndex).find("a").width()*1;

        	if( gnbAccPos === 0 ) {
        		TweenMax.to( $gnbAcc, .1, { x : menuGap,width:gnbWidth } );
        	} else {
        		TweenMax.to( $gnbAcc, .1, { x : gnbAccPos,width:gnbWidth } );
        	}

        });
	});

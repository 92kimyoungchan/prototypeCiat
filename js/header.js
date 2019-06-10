	$(document).ready(function() {

				$('.mobilemenu').on('click', function(e) {
					/* 기본동작 중지코드 ex) A태그 */
					e.preventDefault();
					/*  show - hide 반복 */
					if($(this).hasClass("active")){
							showMbileMenu();
					}else{
							fadeMobileMenu();
					}
				});


				$('.overlay92').on('click', function () {

					fadeMobileMenu();

				});


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

        TweenMax.to( $gnbAcc, .1, { x : gnbAccPos,width:gnbWidth } );

    });

    var $uberSection =$(".uberSection");
    var $uberColumn =$uberSection.find(".uberColumn");

    $uberColumn.on("mouseenter.hover focusin.hover", function(){

			var curIndex = $(this).index();
			var gnbAccPos = $gnbMenu.eq(curIndex).find("a").offset().left;
			var gnbWidth = $gnbMenu.eq(curIndex).find("a").width()*1;

			TweenMax.to( $gnbAcc, .1, { x : gnbAccPos,width:gnbWidth } );


    });

	});

	function showMbileMenu(){
		var menuBig = $('.menuMobile');
		$(".mobilemenu").addClass("active");
		menuBig.css({
			right:0
		})

		$(".headerIconBox").fadeIn();

		$('.overlay92').fadeIn();

		$('html, body').css({'overflow': 'hidden'});

	}

	function fadeMobileMenu(){
		var menuBig = $('.menuMobile');
		$('.mobilemenu').removeClass("active");
		menuBig.css({
			right:-110+"%"
		});

		$(".headerIconBox").fadeOut();
		$(".innerMenu").fadeOut();
		$(".headerMenu").removeClass("arrow_rotate");

		$('.overlay92').fadeOut();

		$('html, body').css({'overflow': 'auto'});
	}

var winW;
var winH;
var es_step = "Expo.ease";
var $window = $(window);
var winSc;
var $container = $("#container");
var $subVisual = $container.find("#subVisual");

$(function(){

		var img = new Image();

		img.src = 'images/main/mainCarocel1.png';

		// 'load' event
		$(img).on('load', function() {

			TweenMax.to($(".visual_wrap"), 0, {opacity:1, display:"block",ease:es_step});
				 	main();
		});


})
function main() {
  //mainVisual
  var $mainVisual = $("#mainVisual");
  var $visualWrap = $mainVisual.find(".visual_wrap"),
      $visualWrapLi = $visualWrap.find("li"),
      _visualLength = $visualWrapLi.length;

  var $navBtn = $mainVisual.find("#navBtn"),
      $prevBtn = $navBtn.find(".prev"),
      $nextBtn = $navBtn.find(".next");

  var $indiBtn = $mainVisual.find("#indiBtn");
  TweenMax.staggerTo($visualWrapLi.eq(0).find("h3,p,a"), .3, {y: 0, opacity: 1, ease: es_step}, .2);
  var visualCrr = {};
  Object.defineProperty(visualCrr, 'number', {
      get: function () {
          return this.num || 0;
      },
      set: function (_visualCrr) {
          _visualCrr = _visualCrr % _visualLength;
          TweenMax.to($visualWrapLi, .3, {opacity:0, display:"none", ease:es_step});
          TweenMax.to($visualWrapLi.find("h3,p,a"), .5, {y: 30, opacity: 0, ease: es_step});
          TweenMax.to($visualWrapLi.eq(_visualCrr), .3, {opacity:1, display:"block", ease:es_step});
          TweenMax.staggerTo($visualWrapLi.eq(_visualCrr).find("h3,p,a"), 1, {y: 0, opacity: 1, ease: es_step}, .2);

          $indiBtn.find("li button").removeClass("active");
          $indiBtn.find("li").eq(_visualCrr).find("button").addClass("active");
          this.num = _visualCrr;
      }
  });
  $nextBtn.click(function () {
      visualCrr.number++;
  });
  $prevBtn.click(function () {
      visualCrr.number--;
  });
  $indiBtn.find("button").click(function () {
      var _this = $(this);
      var _visualCrr = _this.parent().index();

      visualCrr.number = _visualCrr;
  });

  //main Research
  var $mainResearch = $(".main_research"),
      $mainResearchUl = $mainResearch.find("ul"),
      _UlLength = $mainResearchUl.length;
  var $researchPrev = $mainResearch.find(".prev");
  var $researchNext = $mainResearch.find(".next");

  var researchCrr = 0;
  $researchNext.click(function () {
      if (!TweenMax.isTweening($mainResearchUl)) {
          researchCrr++;
          researchCrr = researchCrr % _UlLength;
          TweenMax.to($mainResearchUl, .3, {x:-400, opacity:0, display:"none", ease:es_step});
          TweenMax.fromTo($mainResearchUl.eq(researchCrr), .3,{x:400, opacity:1},{x:0, opacity:1, display:"block", ease:es_step});
      }
  });
  $researchPrev.click(function () {
      if (!TweenMax.isTweening($mainResearchUl)) {
          researchCrr--;
          researchCrr = researchCrr % _UlLength;
          TweenMax.to($mainResearchUl, .3, {x:400, opacity:0, display:"none", ease:es_step});
          TweenMax.fromTo($mainResearchUl.eq(researchCrr), .3,{x:-400, opacity:1},{x:0, opacity:1, display:"block", ease:es_step});
      }
  });

  TweenMax.staggerTo($mainResearch.find(".js-act-research"), .8, {
      y: 0, opacity: 1, ease: es_step
  }, .2);

  //forum
  var $forumWrap = $(".forum_wrap");
  var $forumArticle = $forumWrap.find("article");

  $forumArticle.each(function () {
      var _this = $(this);
      var _conLength = _this.find("li").length;
      var forumCrr = 0;
      _this.find(".next").click(function () {
          forumCrr++;
          forumCrr = forumCrr % _conLength;

          TweenMax.to($(this).parent().siblings("ul").find("li"), .3, {opacity:0, display:"none", ease:es_step});
          TweenMax.to($(this).parent().siblings("ul").find("li").eq(forumCrr), .3, {opacity:1, display:"block", ease:es_step});
      });
      _this.find(".prev").click(function () {
          forumCrr--;
          forumCrr = forumCrr % _conLength;

          TweenMax.to($(this).parent().siblings("ul").find("li"), .3, {opacity:0, display:"none", ease:es_step});
          TweenMax.to($(this).parent().siblings("ul").find("li").eq(forumCrr), .3, {opacity:1, display:"block", ease:es_step});
      });
  });
}

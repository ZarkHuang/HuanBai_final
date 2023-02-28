$(document).ready(function () {

	//桌面版下拉選單
	$('.navBar >.navBar_item').mouseenter(function () {
		$(this).find('.drop-menu').stop(true, true).slideDown();
	}).mouseleave(function () {
		$(this).find('.drop-menu').stop(true, true).slideUp();
	});
	$('.drop-menu').mouseenter(function () {
		$(this).stop(true, true).show();
	}).mouseleave(function () {
		$(this).stop(true, true).slideUp();
	});

	//RWD 漢堡選單切換動畫
	$('#ico-navMenu').click(function () {
		$(this).toggleClass('open');
	});

	//點擊icon時 menu展開收合
	$("#ico-navMenu").click(function () {
		$(".rwd_navMenu_box").toggleClass("openMenu");
	});

	//menu展開滑動效果-動畫
	var openMenu = false;
	$("#ico-navMenu").click(function () {
		if (!openMenu) {
			$(".rwd_navMenu_box").animate({
				left: "0"
			}, 500);
			openMenu = true;
		} else {
			$(".rwd_navMenu_box").animate({
				left: "-100%"
			}, 500);
			openMenu = false;
		}
	});

	//點擊主選單 出現子選單(向下滑動展開＆收合)
	$(".rwd_navMenu_item").click(function () {
		$(this).find(".rwd_navMenu_sub").slideToggle();
	});

	$('.rwd_navMenu_sub_item').click(function (event) {
		event.stopPropagation();
	});

	// Srcoll動畫
	var percent = 0;
	var timer = setInterval(function () {
		$(".percent").css("height", percent + "%")
		percent += 1
		if (percent > 100) {
			percent = 0
			clearInterval(timer)
			timer = setInterval(arguments.callee, 20); // 重新啟動計時器
		}
	}, 20);

	// 觸發滾輪事件

	$(window).on("scroll", function () {
		$(".scrollWrap").fadeOut(1500); //慢慢淡出消失
		clearInterval(timer);
	});

	//註冊
	$("#signupbtn").on("click", function () {
		$("#signinbtn").css("background-color", "");
		$("#oop").hide();
		$("#ooa").show();
		$("#signupbtn").css("background-color", "var(--mainColor-green4)");
	  })
	  $("#signinbtn").on("click", function () {
		$("#signupbtn").css("background-color", "");
		$("#oop").show();
		$("#signinbtn").css("background-color", "var(--mainColor-green4)");
		$("#ooa").hide();
	  })

});
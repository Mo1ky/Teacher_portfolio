/* ===== Переменные ===== */
const body = document.querySelector('body'),
	sidebar = body.querySelector('nav'),
	toggle = body.querySelector(".toggle"),
	searchBtn = body.querySelector(".search-box"),
	modeSwitch = body.querySelector(".toggle-switch"),
	mobiletoggle = body.querySelector(".mobile-toggle"),
	general = body.querySelector(".general"),
	closemobile = body.querySelector(".close_mobile"),
	modeText = body.querySelector(".mode-text");

/* =========================== */

/* ===== Переключение бокового меню на закрытое или открытое ===== */
toggle.addEventListener("click", () => {
		sidebar.classList.toggle("close");
	})
	/* =========================== */

/* ===== Быстрое перемещение в начало ===== */
var t;

function up() {
	console.log("dasds")
	var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
	if (top > 0) {
		window.scrollBy(0, -30);
		t = setTimeout('up()', 1);
	} else clearTimeout(t);
	return false;
}
/* =========================== */

/* ===== Переключение бокового меню на закрытое или открытое в мобильной версии ===== */
var x = window.matchMedia("(max-width: 800px)")

function myFunction(x) {
	if (x.matches) {
		sidebar.classList.add("mobile-close");
		sidebar.classList.remove("mobile-open");

		mobiletoggle.addEventListener("click", () => {

			sidebar.classList.remove("close");
			sidebar.classList.remove("mobile-close");
			sidebar.classList.add('mobile-open');

			closemobile.addEventListener("click", () => {
				sidebar.classList.remove("mobile-open");
				sidebar.classList.add("mobile-close");
			})

			general.addEventListener("click", () => {
				sidebar.classList.remove("mobile-open");
				sidebar.classList.add("mobile-close");
			})
		})


	} else {
		sidebar.classList.remove("mobile-close");
		sidebar.classList.remove("mobile-open");
	}
}
myFunction(x)
x.addListener(myFunction)
	/* ===========================*/

/* ===== Поиск ===== */

searchBtn.addEventListener("click", () => {
		sidebar.classList.remove("close");
	})
	/* =========================== */

/* ===== Переключение темы ===== */

modeSwitch.addEventListener("click", () => {
	body.classList.toggle("dark");

	if (body.classList.contains("dark")) {
		modeText.innerText = "Светлая тема";
	} else {
		modeText.innerText = "Тёмная тема";
	}
});
/* =========================== */
/* ===== Галерея ===== */

baguetteBox.run('.lightbox,.lightbox-group');

/* =========================== */
/* ===== Выпадающий список ===== */

$(".spoiler_title").click(function() {
    var container = $(this).parents(".spoiler_wrap");
    var answer = container.find(".spoiler_content");
    var trigger = container.find(".arrow-t");

    answer.slideToggle(200);

    if (trigger.hasClass("arrow-b")) {
        trigger.removeClass("arrow-b");
    } else {
        trigger.addClass("arrow-b");
    }
    if (container.hasClass("expanded")) {
        container.removeClass("expanded");
    } else {
        container.addClass("expanded");
    }
});
/* =========================== */
/* ===== Кнопка вверх ===== */
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});


btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:1}, '300');
});


jQuery(document).ready(function($){
  //open popup
  $('.cd-popup-trigger').on('click', function(event){
    event.preventDefault();
    $('.cd-popup').addClass('is-visible');
    $('body').addClass('scroll');

  });
  
  //close popup
  $('.cd-popup').on('click', function(event){
    if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
      event.preventDefault();
      $(this).removeClass('is-visible');
      $('body').removeClass('scroll');

    }
  });
  //close popup when clicking the esc keyboard button
  $(document).keyup(function(event){
      if(event.which=='27'){
        $('.cd-popup').removeClass('is-visible');
		$('body').removeClass('scroll');
      }
    });
});



jQuery(document).ready(function($){
  //open popup
  $('.cd-popup-trigge').on('click', function(event){
    event.preventDefault();
    $('.cd-popu').addClass('is-visibl');
    $('body').addClass('scroll');

  });
  
  //close popup
  $('.cd-popu').on('click', function(event){
    if( $(event.target).is('.cd-popup-clos') || $(event.target).is('.cd-popu') ) {
      event.preventDefault();
      $(this).removeClass('is-visibl');
      $('body').removeClass('scroll');

    }
  });
  //close popup when clicking the esc keyboard button
  $(document).keyup(function(event){
      if(event.which=='27'){
        $('.cd-popu').removeClass('is-visibl');
		$('body').removeClass('scroll');
      }
    });
});


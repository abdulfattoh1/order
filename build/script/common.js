"use strict";window.addEventListener("DOMContentLoaded",function(){(function slider(){function a(){i++,c()}function b(){clearInterval(d),d=setInterval(a,4e3)}function c(){i>h.length-1?i=0:0>i&&(i=h.length-1),e.style.transform="translateX(".concat(-508*i,"px)")}var d,e=document.querySelector(".slider-field"),f=document.querySelector(".slider-inner_iconPrev"),g=document.querySelector(".slider-inner_iconNext"),h=document.querySelectorAll(".slider-field__des"),i=0;d=setInterval(a,4e3),g.addEventListener("click",function(){i++,c(),b()}),f.addEventListener("click",function(){i--,c(),b()}),a()})();(function(){function a(){$(".modal").show(500),$("body").css("overflow","hidden")}function b(){$(".modal").hide(500),$("body").css("overflow","")}var c=$(".modal");c.hide(),$(".nav__btn").on("click",function(){a()}),c.on("click",function(a){var c=a.target;(c.classList.contains("modal")||c.classList.contains("modal__close"))&&b()}),window.addEventListener("scroll",function(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(a(),window.removeEventListener("scroll",scrollShowModal))})})();(function addClassNav(){var a=$(".nav__content");window.addEventListener("scroll",function(){900>window.innerWidth&&a.addClass("hello"),200<window.pageYOffset?a.addClass("nav__active"):a.removeClass("nav__active")})})();(function burgerMenu(){var a=$(".nav-menu");a.on("click",function(){$(".nav-menu__item").toggleClass("open"),$(".navbar").toggleClass("open")})})(),AOS.init(),AOS.init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:120,delay:0,duration:400,easing:"ease",once:!1,mirror:!1,anchorPlacement:"top-bottom"})});
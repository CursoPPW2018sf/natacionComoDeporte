// JavaScript Document
$(document).ready(function () {
			$(".cabecera").hide();
			$(".menu").hide();
			$(".cuerpo").hide();
			$(".pie").hide();
			
			$(".cabecera").show(3000);
			
			
			$(".menu").fadeIn(3000);
			
			$(".pie").fadeIn(3000);
			
			
			$(".cuerpo").show(6000);
			
			
			$(".cuerpo img").mouseenter(function () {
				$(this).animate({width:'+=100'}, 1000);
				$(this).animate({width:'-=100'}, 1000);
				
			});
			$(".cuerpo iframe").mouseenter(function () {
				$(this).animate({width:'+=50'}, 1000);
				$(this).animate({width:'-=50'}, 1000);
				
			});
			
			
		});

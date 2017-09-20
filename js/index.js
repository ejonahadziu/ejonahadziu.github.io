$(document).ready(function() {
	
	$('#menu').on({click: function () {
			if ($('.menuoptions').hasClass('showModal')){
				$('.menuoptions').removeClass('showModal');
			} else{
				$('.menuoptions').addClass('showModal');
			}
		}
	});

	$('#about').on({
		click: function () {
			if ($('.abouttext').hasClass('showModal')){
				$('.abouttext').removeClass('showModal');
			} else{
				$('.abouttext').addClass('showModal');
			}
		}
	});

	var quotes = [ 
		"With enough coffee anything is possible",
		"A coffee a day keeps the grumpy way",
		"I only drink coffee on days ending in 'Y' ",
	];

	var i = 0;

	function previousQuote() {
		i--;
		if (i === -1) {
			i = quotes.length - 1;
		}
		changeQuote();
	}

	function nextQuote(){
		i++;
		if (i === quotes.length) {
			i = 0;
		}
		changeQuote();
	}

	function changeQuote(){
		$("#quote").text(quotes[i]); 
	}

	$("#next").on("click", nextQuote);
	$("#prev").on("click", previousQuote);
	
	$("#location").on("click", function() { 

		$("#myModal").addClass("showModal");


    });

	$(".close").on("click", function() { 

		$("#myModal").removeClass("showModal");
    });

 	setInterval(nextQuote, 3000);
	
	 $('.line').click(function(){
	 	$().show('nav');

	 });
	

});
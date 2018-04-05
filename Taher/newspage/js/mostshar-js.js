$('img').on('dragstart', function(event) { event.preventDefault(); });

$('.owl-carousel').owlCarousel({
	loop:false,
	margin:30,
	dots:false,
	dotsEach:false,
	dotsData:false,
	nav:true,
	navContainer:false,
	navText: ["<i class='fas fa-long-arrow-alt-left gold'style='font-size: 29px;'></i>","<i class='gold fas fa-long-arrow-alt-right' style='font-size: 29px;'></i>"],
	responsive:{
		0:{
			items:1,
			margin:0
		},
		600:{
			items:2,
			nav:true,
			margin:50
		},
		800:{
			items:3,
			nav:true,
			margin:130
		},
		1000:{
			items:4,
			nav:true,
			margin:30
		}
	}
})
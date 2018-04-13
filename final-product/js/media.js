$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    margin:0,
    singleItem:true,
    addClassActive:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:3
        }
    },
    mouseDrag:false,
    dots:false,
    navText: ["<a role='button' class='prev'><img src='assets/prev.png'/></a>","<a role='button' class='next'><img src='assets/next.png'/></a>"],
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true
})

$('.owl-carousel').on('changed.owl.carousel',function(property){
    var current = property.item.index+1;
    $(".owl-item").find("img").css("opacity", "0.4");
    $(".owl-item").find("div").find(".slider-item").css("display", "none");
    $(".owl-item").eq(current).find("img").css("opacity", "1");
    $(".owl-item").eq(current).find("div").find(".slider-item").css("display", "block");
    var width = window.innerWidth;
    var height = window.innerHeight;
    if(width < 1000) {
        $(".owl-item").find("img").css("opacity", "1");
        $(".owl-item").find("div").find(".slider-item").css("display", "block");
    }
    console.log('Image current is ' + current);
});


$(document).ready(function(){
    $(".card-hover-overlay").hover(function(){
            var index = $(this).index();
            $(".card-hover-overlay").eq(index).find("div").find(".display-overlay").css("display", "block");
            console.log(index);
        },
        function(){
            var index = $(this).index();
            $(".card-hover-overlay").eq(index).find("div").find(".display-overlay").css("display", "none");
            console.log("pop");
        });
});
$(".owl-item.active").find("img").css("opacity", "0.4");
$(".owl-item.active").eq(1).find("img").css("opacity", "1");
$(".owl-item.active").eq(1).find("div").find(".slider-item").css("display", "block");
var width = window.innerWidth;
console.log("passed");
if(width < 1000) {
    $(".owl-item.active").find("img").css("opacity", "1");
    $(".owl-item.active").find("div").find(".slider-item").css("display", "block");
    console.log("<1000");
}
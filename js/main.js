var $navbar = $('.navbar');
$navbar.waypoint(function(direction){
    if(direction == 'down'){
        $navbar.addClass('fixed-top');
    }
    else {
        $navbar.removeClass('fixed-top');
    }   
})





$("#cover .wall-sticker a").on('click', function(e) {
   e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 
    800, 
    function(){
       window.location.hash = hash;
    });
});


$("#cover .scroll-to-down-button a").on('click', function(e) {
   e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 
    800, 
    function(){
       window.location.hash = hash;
    });
});


$("#section-parallax .parallax-btn a").on('click', function(e) {
   e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 
    800, 
    function(){
       window.location.hash = hash;
    });
});


$(".footer .scroll-to-top-button a").on('click', function(e) {
   e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 
    800, 
    function(){
       window.location.hash = hash;
    });
});





$('.js-wp-1').waypoint(function(direction) {
    if (direction === 'down') {
        $(this.element).addClass("animate__animated animate__fadeInDown")
    }
    }, 
    {
        offset: 'bottom-in-view'
    }
)

$('.js-wp-2').waypoint(function(direction) {
    if (direction === 'down') {
        $(this.element).addClass("animate__animated animate__fadeInLeft")
    }
    }, 
    {
        offset: 'bottom-in-view'
    }
)

$('.js-wp-3').waypoint(function(direction) {
    if (direction === 'down') {
        $(this.element).addClass("animate__animated animate__fadeInRight")
    }
    }, 
    {
        offset: 'bottom-in-view'
    }
)

$('.js-wp-4').waypoint(function(direction) {
    if (direction === 'down') {
        $(this.element).addClass("animate__animated animate__fadeInUp")
    }
    }, 
    {
        offset: 'bottom-in-view'
    }
)

$('.js-wp-5').waypoint(function(direction) {
    if (direction === 'down') {
        $(this.element).addClass("animate__animated animate__fadeInUp")
    }
    }, 
    {
        offset: 'bottom-in-view'
    }
)

$('.js-wp-6').waypoint(function(direction) {
    if (direction === 'down') {
        $(this.element).addClass("animate__animated animate__fadeInUp")
    }
    }, 
    {
        offset: 'bottom-in-view'
    }
)

$('.js-wp-8').waypoint(function(direction) {
    if (direction === 'down') {
        $(this.element).addClass("animate__animated animate__fadeInDown animate__delay-0.3s")
    }
    }, 
    {
        offset: 'bottom-in-view'
    }
)

$('.js-wp-9').waypoint(function(direction) {
    if (direction === 'down') {
        $(this.element).addClass("animate__animated animate__fadeInUp")
    }
    }, 
    {
        offset: 'bottom-in-view'
    }
)






jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});








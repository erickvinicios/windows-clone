var rtime = function() {
    var time = new Date();
    $('.time p').text(time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
}
setInterval(rtime, 1000);

$( '.item').draggable();


$(document).bind("contextmenu", function (event) {
    event.preventDefault();
    
    $(".right-btn-menu").finish().toggle(100).
    
    css({
        top: event.pageY + "px",
        left: event.pageX + "px"
    });
});


$(document).bind("mousedown", function (e) {
    
    if (!$(e.target).parents(".right-btn-menu").length > 0) {
        
        $(".right-btn-menu").hide(100);
    }
});


$(".right-btn-menu li").click(function(){
    
    switch($(this).attr("data-action")) {
        
        case "first": $("body").css({"background": 'url("../img/w2.jpg") center / cover no-repeat'}); break;
    }
  
    $(".right-btn-menu").hide(100);
  });

console.log('%c By Erick Vinicios', 'color: #00ff75; font-size: 40px;');
console.log('%c https://github.com/erickvinicios', 'color: #6812f4; font-size: 16x;');

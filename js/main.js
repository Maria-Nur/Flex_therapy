$(document).ready(function(){
$(".nav-item .active-class").click(function(){
    $(".nav-item .active-class").removeClass("current-menu");
        $(this).addClass("current-menu");
    });
});
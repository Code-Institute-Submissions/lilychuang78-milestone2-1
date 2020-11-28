$('.make_bigger').hover(bigger, smaller);
function bigger(){
    $(this).css({height: '+=5%', width: '+=5%', filter: 'none'});
}
function smaller(){
    $(this).css({height: "", width: ""});
}


$('.pop').hover(after, before);
function after(){
    $(this).css({filter: 'none'});
}
function before(){
    $(this).css({filter: 'brightness(50%)'});
}

$(document).ready(function(){
    $(".pop").hover(function() {
    $('.cuisine-name').fadeIn('slow')
},function() {
    $('.cuisine-name').fadeOut('slow')
    });  
});
 /*credit: https://css-tricks.com/snippets/jquery/simple-auto-playing-slideshow/*/
 
$(".img-case:gt(0)").hide();
setInterval(function() {
  $('.img-case:first')
    .fadeOut(3000)
    .next()
    .fadeIn(3000)
    .end()
    .appendTo('#slideshow');
}, 4000);
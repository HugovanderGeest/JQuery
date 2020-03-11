$(document).ready( function() {
   
    // $('main').hide(3000).delay(1000).show(500);

    $('figure img').mouseenter( function() {
        $(this).fadeTo(1600, .01);

    }).mouseout(function() {
        $(this).fadeTo(1100, 1);

    }).click (function() {
        $(this).next().toggle(700);
    });

    $('footer').click(function(){
        $(this).animate({
            left: '-=50px',
        }, 900)
    }).dblclick (function(){
        $(this).animate( {
            top: '0',
            opacity: '1'

        }, 900)
    })
});
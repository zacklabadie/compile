$(document).ready(function() {

    var mouseX;
    var mouseY;
    $(document).mousemove( function(e) {
       mouseX = e.pageX;
       mouseY = e.pageY;
    });

    $('#btn-1').hover(function(){
      $('#nav-card-1').css({'top':mouseY-60, 'display':'flex'}).fadeIn('200');
    });
    $('#btn-1').mouseout(function(){
        $('#nav-card-1').fadeOut();
    });
    $('#btn-2').hover(function(){
      $('#nav-card-2').css({'top':mouseY-60, 'display':'flex'}).fadeIn('200');
    });
    $('#btn-2').mouseout(function(){
        $('#nav-card-2').fadeOut();
    });
    $('#btn-3').hover(function(){
      $('#nav-card-3').css({'top':mouseY-60, 'display':'flex'}).fadeIn('200');
    });
    $('#btn-3').mouseout(function(){
        $('#nav-card-3').fadeOut();
    });
    $('#btn-4').hover(function(){
      $('#nav-card-4').css({'top':mouseY-60, 'display':'flex'}).fadeIn('200');
    });
    $('#btn-4').mouseout(function(){
        $('#nav-card-4').fadeOut();
    });
    $('#btn-5').hover(function(){
      $('#nav-card-5').css({'top':mouseY-60, 'display':'flex'}).fadeIn('200');
    });
    $('#btn-5').mouseout(function(){
        $('#nav-card-5').fadeOut();
    });
    $('#btn-6').hover(function(){
      $('#nav-card-6').css({'top':mouseY-60, 'display':'flex'}).fadeIn('200');
    });
    $('#btn-6').mouseout(function(){
        $('#nav-card-6').fadeOut();
    });
    $('#btn-7').hover(function(){
      $('#nav-card-7').css({'top':mouseY-60, 'display':'flex'}).fadeIn('200');
    });
    $('#btn-7').mouseout(function(){
        $('#nav-card-7').fadeOut();
    });
    $('#btn-8').hover(function(){
      $('#nav-card-8').css({'top':mouseY-60, 'display':'flex'}).fadeIn('200');
    });
    $('#btn-8').mouseout(function(){
        $('#nav-card-8').fadeOut();
    });
    $('#btn-9').hover(function(){
      $('#nav-card-9').css({'top':mouseY-60, 'display':'flex'}).fadeIn('200');
    });
    $('#btn-9').mouseout(function(){
        $('#nav-card-9').fadeOut();
    });
    $('#btn-10').hover(function(){
      $('#nav-card-10').css({'top':mouseY-60, 'display':'flex'}).fadeIn('200');
    });
    $('#btn-10').mouseout(function(){
        $('#nav-card-10').fadeOut();
    });

    function matchQuoteHeights(box1, box2) {
    var box1Height = $(box1).outerHeight();
    console.log(box1Height);
        $(box2).height(box1Height);
    }


$(document).ready(function() {
    matchQuoteHeights('#dec-quote', '#dec-checkerboard');
});


});

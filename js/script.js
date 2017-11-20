$(document).ready(function() {

    // Skrollr for smooth scrolling and parallax effects
    var s = skrollr.init();
    skrollr.menu.init(s);

    // Falling time animation, inspired by Captain Anonymous https://codepen.io/anon/pen/jaYmrj
    // Number of words created for home page hero
    var wordCount = 500;
    // Random number range function
    function randRange( minNum, maxNum) {
      return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
    }
    // Function to generate words
    function createTime() {
    	for( i=1;i<wordCount;i++) {
    	var wordLeft = randRange(0,920);
    	var wordTop = randRange(-1000,500);
        var fontSize = randRange(10,22);
    	$('.drop-container').append('<div class="time-drop" id="time'+i+'">TIME</div>');
    	$('#time'+i).css('left',wordLeft);
    	$('#time'+i).css('top',wordTop);
        $('#time'+i).css('font-size',fontSize+'px');
    	}
    };
    // Make it rain
    createTime();

    // // Lazy Load
    $(function() {
        $('.lazy').Lazy({
            delay: 5000
        });
    });

    var largestHeight = 0;
    // Loop through elements children to find & set the biggest height
    $(".relative-container *").each(function(){
     // If this elements height is bigger than the biggestHeight
     if ($(this).height() > largestHeight ) {
       // Set the biggestHeight to this Height
       largestHeight = $(this).height();
     }
    });
    // Set the container height
    $(".relative-container").height(largestHeight);


    //Get mouse position
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


    //Measure box height, set following box to same height
    function matchQuoteHeights(box1, box2) {
    var box1Height = $(box1).outerHeight();
    console.log(box1Height);
        $(box2).height(box1Height);
    }

    //Match checkboard box to height of quote
    $(document).ready(function() {
        matchQuoteHeights('#dec-quote', '#dec-checkerboard');
    });


});

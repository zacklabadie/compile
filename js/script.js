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


    $('#close-mobile-warning').click(function() {
        $('#mobile-warning').css({
            'transform': 'scaleY(0)'
        });
    });


    var largestHeight = 0;
    // Loop through elements children to find & set the largest height
    $(".relative-container *").each(function(){
     // If this elements height is larger than the largestHeight
     if ($(this).height() > largestHeight ) {
       // Set the largestHeight to this Height
       largestHeight = $(this).height();
     }
    });
    // Set the container height
    $(".relative-container").height(largestHeight);


    //Get mouse position for nav cards
    var mouseX;
    var mouseY;
    $(document).mousemove( function(e) {
       mouseX = e.pageX;
       mouseY = e.pageY;
    });

    $('#btn-1').hover(function(){
      $('#nav-card-1').css({'top':mouseY-50, 'display':'flex'}).fadeIn('100');
    });
    $('#btn-1').mouseout(function(){
        $('#nav-card-1').fadeOut();
    });
    $('#btn-2').hover(function(){
      $('#nav-card-2').css({'top':mouseY-50, 'display':'flex'}).fadeIn('100');
    });
    $('#btn-2').mouseout(function(){
        $('#nav-card-2').fadeOut();
    });
    $('#btn-3').hover(function(){
      $('#nav-card-3').css({'top':mouseY-50, 'display':'flex'}).fadeIn('100');
    });
    $('#btn-3').mouseout(function(){
        $('#nav-card-3').fadeOut();
    });
    $('#btn-4').hover(function(){
      $('#nav-card-4').css({'top':mouseY-50, 'display':'flex'}).fadeIn('100');
    });
    $('#btn-4').mouseout(function(){
        $('#nav-card-4').fadeOut();
    });
    $('#btn-5').hover(function(){
      $('#nav-card-5').css({'top':mouseY-50, 'display':'flex'}).fadeIn('100');
    });
    $('#btn-5').mouseout(function(){
        $('#nav-card-5').fadeOut();
    });
    $('#btn-6').hover(function(){
      $('#nav-card-6').css({'top':mouseY-50, 'display':'flex'}).fadeIn('100');
    });
    $('#btn-6').mouseout(function(){
        $('#nav-card-6').fadeOut();
    });
    $('#btn-7').hover(function(){
      $('#nav-card-7').css({'top':mouseY-50, 'display':'flex'}).fadeIn('100');
    });
    $('#btn-7').mouseout(function(){
        $('#nav-card-7').fadeOut();
    });
    $('#btn-8').hover(function(){
      $('#nav-card-8').css({'top':mouseY-50, 'display':'flex'}).fadeIn('100');
    });
    $('#btn-8').mouseout(function(){
        $('#nav-card-8').fadeOut();
    });
    $('#btn-9').hover(function(){
      $('#nav-card-9').css({'top':mouseY-50, 'display':'flex'}).fadeIn('100');
    });
    $('#btn-9').mouseout(function(){
        $('#nav-card-9').fadeOut();
    });
    $('#btn-10').hover(function(){
      $('#nav-card-10').css({'top':mouseY-50, 'display':'flex'}).fadeIn('100');
    });
    $('#btn-10').mouseout(function(){
        $('#nav-card-10').fadeOut();
    });


    //Measure box1 height, set box2 to same height
    function matchHeights(box1, box2) {
    var box1Height = $(box1).outerHeight();
    console.log(box1Height);
        $(box2).height(box1Height);
    }

    //Match checkboard box to height of quote
    $(document).ready(function() {
        matchHeights('#dec-quote', '#dec-checkerboard');
    });
    $(document).ready(function() {
        matchHeights('.nyc-text', '.nyc-cam');
    });
    $(document).ready(function() {
        matchHeights('.full-landscape', '.landscapes-hero');
    });



var slideIndex = 1;
showSlides(slideIndex);

document.getElementById("end-prev").onclick = function() {plusSlides(-1)};
document.getElementById("end-next").onclick = function() {plusSlides(1)};

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("end-text");
    var bg = document.getElementsByClassName("end-image");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < slides.length; i++) {
      bg[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
    bg[slideIndex-1].style.display = "block";
}

particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#7dbb24"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 6
      },
    },
    "opacity": {
      "value": 0.4,
      "random": false,
      "anim": {
        "enable": false,
        "speed": .5,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#7dbb24",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});





});

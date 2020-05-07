/**
function to handle auto typing of the intro text
 */
var typed = new Typed(".intro-text", {
  strings: ["",
  "I'm a fullstack software engineer.",
  "I enjoy writing and building software products.",
  "I also love to play the piano :)."
  // "I design and develop web applications.",
  // "I design and develop corporate websites.",
  // "I design and develop ERP applications.",
  // "I also build and structure databases."
  ],
  stringsElement: null,
  smartBackspace: true, // Default value
  typeSpeed: 80,
  startDelay: 0,
  // backspacing speed
  backSpeed: 80,
  // time before backspacing
  backDelay: 2000,
  // loop
  loop: true,
  // false = infinite
  loopCount: false,
  // show cursor
  showCursor: true,
  // character for cursor
  cursorChar: "|",
});

$(document).ready(function(){
  // load materialize side nav
  $('.sidenav').sidenav();

  // set smooth scrolling to all sections
  $('.nav-link').on('click', function(event) {
    event.preventDefault();

    const hash = this.hash;
    window.location.hash = hash;
    const offset = ($(hash).offset().top - 64); // subtracting 64 here because of the sticky navbar
    $('html').animate({
      scrollTop: offset
    }, 50, function() {});
  });
});

//Init AOS animation library
AOS.init({
  disable: 'mobile',
  once: true,
});

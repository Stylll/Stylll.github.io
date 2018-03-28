/**
function to handle auto typing of the intro text
 */
var typed = new Typed(".intro-text", {
  strings: ["",
  "I design and develop web applications.",
  "I design and develop corporate websites.",
  "I design and develop ERP applications.",
  "I also build and structure databases."
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

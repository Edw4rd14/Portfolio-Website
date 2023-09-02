// Typing effect code
const typedTextSpan = document.getElementById("typed-text");
const cursorSpan = document.getElementById("cursor");
const textArray = ["Hello, I'm Edward."];
var textArrayIndex = 0,charIndex = 0;
// Function to type
function type() {
  setTimeout(3000)
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  }
}

type();

// Change theme
const elementClicked = document.getElementById("photo");
var colors = ["#ff565b","#5f4e80","#4587a1"];
var filters = ["invert(74%) sepia(76%) saturate(5356%) hue-rotate(323deg) brightness(99%) contrast(121%)","invert(32%) sepia(51%) saturate(411%) hue-rotate(219deg) brightness(89%) contrast(91%)","invert(46%) sepia(61%) saturate(368%) hue-rotate(151deg) brightness(93%) contrast(88%)"];
var colorsIndex = 0;
elementClicked.addEventListener("click",()=>{
  document.documentElement.style.setProperty("--main-color",colors[colorsIndex]);
  document.documentElement.style.setProperty("--main-filter",filters[colorsIndex]);
  colorsIndex += 1;
  if (colorsIndex >= colors.length) {
    colorsIndex = 0;
  }
});

//Scroll animation
$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".fade");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});

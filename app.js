//

$(document).ready(function() {

  $(".hamburger").click(function(){
    $(this).toggleClass('hamburger-active');
  });
  // Define an array of words to replace the text with
  var wordsArray = ["Helhetslösningar av solsystem hos privatpersoner, bostadsrättsföreningar och företag", 
  "Är ni några grannar som funderat på solceller?",
   "Framtidssäkra din anläggning: Årlig kostnadsfri teknisk genomgång av din anläggning.",
    "Varför ska jag passa på att installera laddbox till min elbil?"];
  
  var currentIndex = 0;

  // Function to replace text in the span with the ID "words"
  function replaceText() {
      // Get the span element
      var $span = $("#mainp1");

      // Check if we have reached the end of the array
      if (currentIndex >= wordsArray.length) {
          currentIndex = 0; // Reset to the beginning
      }

      // Replace the text in the span with the next word from the array
      $span.text(wordsArray[currentIndex]);

      // Increment the index for the next word
      currentIndex++;
  }

  // Call the replaceText function every 2 seconds
  setInterval(replaceText, 4000);
});

$(document).ready(function() {
  // Define an array of words to replace the text with
  var wordsArray = ["", 
  "Nu får ni extra rabatter som tack för att ni tillsammans tar steget mot en grönare framtid,utöver våra redan fantastiska priser Kontakta oss redan idag.",
   "Vi erbjuder er som har en anläggning från oss på Sydväst Montage en kostnadsfri anläggningsinspektion under dem 5 första åren.Våra tekniker kör ut till er och går igenom er anläggning för att framtidssäkra och optimera din anläggning.",
    "Du har skattereduktion på 50%, utöver rabatterat paketpris med solpaneler inkluderat, för att inte tänka på en grönare värld. Dessutom har vi batterier för att skapa en perfekt helhetslösning för dig. "];
  
  var currentIndex = 0;

  // Function to replace text in the span with the ID "words"
  function replaceText() {
      // Get the span element
      var $span = $("#mainp2");

      // Check if we have reached the end of the array
      if (currentIndex >= wordsArray.length) {
          currentIndex = 0; // Reset to the beginning
      }

      // Replace the text in the span with the next word from the array
      $span.text(wordsArray[currentIndex]);

      // Increment the index for the next word
      currentIndex++;
  }

  // Call the replaceText function every 2 seconds
  setInterval(replaceText, 4000);
});


$(document).ready(function(){
  $("#readM").click(function(){
    $("#knkParagraph").toggle(1000);
  });
   $("#readM1").click(function(){
    $("#knkParagraph1").toggle(1000);
  });
  $("#readM2").click(function(){
    $("#knkParagraph2").toggle(1000);
  });
  $("#readM3").click(function(){
    $("#knkParagraph3").toggle(1000);
  });
  $("#readM4").click(function(){
    $("#knkParagraph4").toggle(1000);
  });
  $("#readM5").click(function(){
    $("#knkParagraph5").toggle(1000);
  });
  

});



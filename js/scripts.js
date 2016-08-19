//==BUSINESS=LOGIC==


//==UI=LOGIC==
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#numberInput").val());
    pingPong(userInput);
  });
});

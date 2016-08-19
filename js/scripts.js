//==BUSINESS=LOGIC==
var numbers = [];
var indexCounter = 0;
var pingPong = function(number) {
  for(i=1; i <= number; i++) {
    if (i % 3 === 0) {
      numbers.push("ping");
    } else {
      numbers.push(i);
    }
  }
}

//==UI=LOGIC==
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    $("#outputUl").empty();
    var userInput = parseInt($("input#numberInput").val());
    pingPong(userInput);
    numbers.forEach(function() {
      $("#outputUl").append("<li>" + numbers[indexCounter] + "</li>");
      indexCounter++;
    });
    numbers.length = 0;
    indexCounter = 0;
  });
});

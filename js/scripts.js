//==BUSINESS=LOGIC==
var numbers = [];
var indexCounter = 0;
var pingPong = function(number) {
  for(i=1; i <= number; i++) {
    numbers.push(i);
  }
}

//==UI=LOGIC==
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#numberInput").val());
    pingPong(userInput);
    numbers.forEach(function() {
      $("#outputUl").append("<li>" + numbers[indexCounter] + "</li>");
      indexCounter++;
    });
    numbers.length = 0;
  });
});

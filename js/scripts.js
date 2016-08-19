//==BUSINESS=LOGIC==
var numbers = [];
var indexCounter = 0;
var pingPong = function(number) {
  for(i=1; i <= number; i++) {
    if (i % 15 === 0) {
      numbers.push("ping-pong");
    } else if (i % 5 === 0) {
      numbers.push("pong");
    } else if (i % 3 == 0){
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
      if ((indexCounter + 1) % 3 === 0 || (indexCounter + 1) % 5 === 0 || (indexCounter + 1) % 15 === 0) {
        $("#outputUl").append("<li class='resultLiOrange'>" + numbers[indexCounter] + "</li>");
        indexCounter++;
      } else {
        $("#outputUl").append("<li class='resultLi'>" + numbers[indexCounter] + "</li>");
        indexCounter++;
      }
    });
    numbers.length = 0;
    indexCounter = 0;
  });
});

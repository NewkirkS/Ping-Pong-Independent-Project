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
    $("#outputUl").empty();
    var userInput = parseInt($("input#numberInput").val());
    pingPong(userInput);
    numbers.forEach(function() {
      debugger;
      $("#outputUl").append("<li>" + numbers[indexCounter] + "</li>");
      indexCounter++;
    });
    //Potential but inelegent fix to multiple submission problem
    // $(".btn-success").hide();
    numbers.length = 0;
    indexCounter = 0;
  });
});

var button = $(".button");
      
      button[0].onclick = function(){
      $("#questions").toggleClass("open");
      return false;
      };
//////////////
var number = 100;

    var intervalId;

        
    setTimeout(outOftime, 1000 * 2);
    
    function outOftime(){
        $("show-number").html("<img src=images.jpg/>");
    }

    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;

      $("#show-number").html("<h2>" + number + "</h2>");

      if (number === 0) {

        stop();

        alert("Time Up!");
      }
    }

    function stop() {

      clearInterval(intervalId);
    }

    run();

/////////////////////////

var button = $(".button");
      
      button[0].onclick = function(){
      $("#questions").toggleClass("open");
      return false;
      };
      



////////////////
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	
	var correct = 0;


	if (question1 == "Oliver Twist") {
		correct++;
}
	if (question2 == "Adventures of Huckleberry Finn") {
		correct++;
}	
	if (question3 == "Harper Lee") {
		correct++;
	}

	if (question4 == "George Orwell") {
		correct++;
	}

	
	
	var pictures = ["assets/images/great.jpg", "assets/images/mediocore.jpg", "assets/images/bad-2.jpg"];
	var messages = ["Great job!!!", "Mediocore Job!!", "Try Harder!!"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 4) {
		score = 1;
	}

	if (correct == 4) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}


////////////////
	
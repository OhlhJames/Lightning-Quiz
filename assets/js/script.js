var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var headerEl = document.getElementById('header');
var startBtn = document.getElementById('startBtn');
var quizTimer = 5;
function setTime() {
  var timerInterval = setInterval(function() {
    quizTimer--;
    timeEl.textContent = quizTimer + " seconds left.";
    if(quizTimer === 0) {
      clearInterval(timerInterval);
      highScore();
    }
  }, 300);
}

var initialsPrompt = document.getElementById('initialsPrompt');
var initialsInput = document.createElement('input');
initialsPrompt.appendChild(initialsInput);
var goBackBtn = document.createElement('button');
initialsPrompt.appendChild(goBackBtn);
goBackBtn.textContent = 'Go Back';
initialsPrompt.style.display ='none'

function highScore(){
  quizTimer = 0;
  timeEl.textContent = '';
  headerEl.textContent = 'Congrats!';
  mainEl.textContent = 'You got correct answers! To add your high score, input your initials below!'
  initialsPrompt.style.display = 'flex'
  startBtn.style.display = 'none'
  goBackBtn.textContent = 'Go Back';
};
setTime()
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var headerEl = document.getElementById('header');
var startBtn = document.getElementById('startBtn');
var quizTimer = 5;
startBtn.addEventListener('click', setTime)
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
goBackBtn.addEventListener('click', frontPage());
  function frontPage(){
    header.textContent = "Lightning Quiz!";
    mainEl.textContent = "Welcome to the Lightning Quiz! once you press the 'Start Quiz' button, you will have one minute to answer up to 6 questions as correctly and as fast as you can! I hope your ready for a challenge! "
    startBtn.style.display = 'block';
    initialsPrompt.style.display = 'none';
    highScoreTracker.style.display ='none';
    answerList.style.display = 'none';
  }
function highScore(){
  quizTimer = 0;
  timeEl.textContent = '';
  headerEl.textContent = 'Congrats!';
  mainEl.textContent = 'You got correct answers! To add your high score, input your initials below!'
  initialsPrompt.style.display = 'flex'
  startBtn.style.display = 'none'
  goBackBtn.textContent = 'Go Back';
};
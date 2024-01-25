//defines and appends all variables that will be needed within the quiz so that when questions change we can easily adjust what is shown and which text is showing for answers and questions
var timeEl = document.querySelector('.time');
var header = document.getElementById('header');
var mainEl = document.getElementById("main");
var startBtn = document.getElementById('startBtn');
var questionLine = document.createElement('h1');
var answerList = document.getElementById('answerList')
var answerOne = document.createElement('button'); 
var answerTwo = document.createElement('button');
var answerThree = document.createElement('button');
var answerFour = document.createElement('button');
var highScoreTracker = document.querySelector(".message");
var initialsPrompt = document.getElementById('initialsPrompt');
var initials = document.createElement('input');
var goBackBtn = document.createElement('button');
var submitBtn = document.createElement('button');
initials.setAttribute('type', 'text');
submitBtn.textContent = 'Submit';
answerList.appendChild(answerOne);
answerList.appendChild(answerTwo);
answerList.appendChild(answerThree);
answerList.appendChild(answerFour);
initialsPrompt.appendChild(initials);
initialsPrompt.appendChild(goBackBtn);
initialsPrompt.appendChild(submitBtn);
answerList.style.display = 'none';
initialsPrompt.style.display = 'none';
//sets quiz timer
var quizTimer = 60
//is the "brain" of the quiz checks to see when answer buttons are clicked and moves on to the next question while displaying messages and checking to see if it is the correct answer and if so incrementing correct score
answerOne.addEventListener('click', function(event){
  if (event.target.textContent === 'HTML'){
    highScoreTracker.textContent ='Wrong!'
    questionTwo();
  }else if (event.target.textContent === 'Safari'){
    highScoreTracker.textContent ='Wrong!'
    questionThree();
  }else if (event.target.textContent === 'Number'){
    highScoreTracker.textContent ='Wrong!'
    questionFour();
  }else if (event.target.textContent === '256'){
    highScoreTracker.textContent ='Correct!'
    correct ++;
    questionFive();
  }else if (event.target.textContent === 'Internet Explorer'){
    highScoreTracker.textContent ='Wrong!'
    questionSix();
  }else{
    highScoreTracker.textContent ='Wrong!'
    highScore();
  }
});
answerTwo.addEventListener('click', function(event){
  if (event.target.textContent === 'Binary'){
    highScoreTracker.textContent ='Wrong!'
    questionTwo();
  }else if (event.target.textContent === 'Opus'){
    highScoreTracker.textContent ='Correct!'
    correct ++;
    questionThree();
  }else if (event.target.textContent === 'Boolean'){
    highScoreTracker.textContent ='Wrong!'
    questionFour();
  }else if (event.target.textContent === '149,813'){
    highScoreTracker.textContent ='Wrong!'
    questionFive();
  }else if (event.target.textContent === 'Thunderbird'){
    highScoreTracker.textContent ='Wrong!'
    questionSix();
  }else{
    highScoreTracker.textContent ='Wrong!'
    highScore();
  }
});
answerThree.addEventListener('click', function(event){
  if (event.target.textContent === 'Viper'){
    highScoreTracker.textContent ='Wrong!'
    questionTwo();
  }else if (event.target.textContent === 'Internet Explorer'){
    highScoreTracker.textContent ='Wrong!'
    questionThree();
  }else if (event.target.textContent === 'Div'){
    highScoreTracker.textContent ='Correct!'
    correct ++;
    questionFour();
  }else if (event.target.textContent === '36'){
    highScoreTracker.textContent ='Wrong!'
    questionFive();
  }else if (event.target.textContent === 'MS DOS'){
    highScoreTracker.textContent ='Wrong!'
    questionSix();
  }else{
    highScoreTracker.textContent ='Correct!'
    correct ++
    highScore();
  }
});
answerFour.addEventListener('click', function(event){
  if (event.target.textContent === 'JavaScript'){
    highScoreTracker.textContent ='Correct!'
    correct++;
    questionTwo();
  }else if (event.target.textContent === 'Opera'){
    highScoreTracker.textContent ='Wrong!'
    questionThree();
  }else if (event.target.textContent === 'Div'){
    highScoreTracker.textContent ='Correct!'
    correct ++;
    questionFour();
  }else if (event.target.textContent === '206'){
    highScoreTracker.textContent ='Wrong!'
    questionFive();
  }else if (event.target.textContent === 'Mosaic'){
    highScoreTracker.textContent ='Correct!'
    correct ++
    questionSix();
  }else{
    highScoreTracker.textContent ='Wrong!'
    highScore();
  }
});
//This function resets the main page and adds it back when the go back button is pushed
function frontPage(){
  header.textContent = "Lightning Quiz!";
  mainEl.textContent = "Welcome to the Lightning Quiz! once you press the 'Start Quiz' button, you will have one minute to answer up to 6 questions as correctly and as fast as you can! I hope your ready for a challenge! "
  startBtn.style.display = 'block';
  initialsPrompt.style.display = 'none';
  highScoreTracker.style.display ='none';
  answerList.style.display = 'none';
}
//this function sets the timer for the quiz insuring that all participants get the proper alloted time
function setTime() {
    var timerInterval = setInterval(function() {
      quizTimer--;
      timeEl.textContent = quizTimer + " seconds left.";
      if(quizTimer <= 0) {
        clearInterval(timerInterval);
        highScore();
        timeEl.textContent = ''
      } 
    }, 1000);
};
//This function sets displays at the start of a quiz and starts the questions and the timer
function startQuiz(){
  initialsPrompt.style.display = 'none'
  highScoreTracker.style.display = 'none'
  startBtn.style.display = 'none'
  answerList.style.display = 'flex'
  correct = 0;
  quizTimer = 60
  questionOne();
  setTime();
};
// Calls start Quiz function when start quiz button clicked  
startBtn.addEventListener('click', startQuiz)
//sets the text to display for each question and answer set so that users know what questions to answer and what choices are available
function questionOne(){
  header.textContent = 'Question One:'
  mainEl.textContent = 'Which of these is a basic programming language used by websites for logic?'
  answerList.style.display = 'flex'
  answerOne.textContent = 'HTML'
  answerTwo.textContent = 'Binary'
  answerThree.textContent = 'Viper'
  answerFour.textContent = 'JavaScript'
};
function questionTwo(){
  answerList.style.display = 'flex'
  initialsPrompt.style.display = 'none'
  header.textContent = 'Question Two:'
  mainEl.textContent = 'Which of these is not a web browser?'
  answerOne.textContent = 'Safari'
  answerTwo.textContent = 'Opus'
  answerThree.textContent = 'Internet Explorer'
  answerFour.textContent = 'Opera'
};
function questionThree(){  
  answerList.style.display = 'flex'
  initialsPrompt.style.display = 'none'
  header.textContent = 'Question Three:';
  mainEl.textContent = 'Which of these is not a data type?';
  answerOne.textContent = 'Number';
  answerTwo.textContent = 'Boolean';
  answerThree.textContent = 'Div';
  answerFour.textContent = 'String';
};
function questionFour(){
  answerList.style.display = 'flex'
  initialsPrompt.style.display = 'none'
  header.textContent = 'Question Four:';
  mainEl.textContent = 'How many ASCII characters are there?';
  answerOne.textContent = '256';
  answerTwo.textContent = '149,813';
  answerThree.textContent = '36';
  answerFour.textContent = '206';
};
function questionFive(){
  answerList.style.display = 'flex';
  initialsPrompt.style.display = 'none';
  header.textContent = 'Question Five:';
  mainEl.textContent = 'Which of These was an early web browser that changed how we interacted with the internet?';
  answerOne.textContent = 'Internet Explorer';
  answerTwo.textContent = 'Thunderbird';
  answerThree.textContent = 'MS DOS';
  answerFour.textContent = 'Mosaic';
};
function questionSix(){ 
  answerList.style.display = 'flex';
  initialsPrompt.style.display = 'none';
  header.textContent = 'Question Six:';
  mainEl.textContent = 'What Year did the first mass-market Graphical User Interface computer become available?';
  answerOne.textContent = '1974';
  answerTwo.textContent = '1985';
  answerThree.textContent = '1983';
  answerFour.textContent = '1992';
};
//Shows users their score and asks them for initials to add a high score
function highScore(){
  quizTimer = 0;
  timeEl.textContent = '';
  header.textContent = 'Congrats!';
  mainEl.textContent = 'You got ' + correct +' correct answers! To add your high score, input your initials below!'
  answerList.style.display = 'none';
  initialsPrompt.style.display = 'flex';
  goBackBtn.textContent = 'Go Back';
  goBackBtn.addEventListener('click',frontPage)
};
//Allows users to insert their high score into local data and displays it 
function displayScore() {
  var lastScore = JSON.parse(localStorage.getItem("High Score"));
  if (lastScore !== null) {
    highScoreTracker.style.display = 'flex'
    highScoreTracker.textContent = lastScore.initials + 
    " : " + lastScore.score;
  };
};
submitBtn.addEventListener('click',function(event) {
  event.stopPropagation();
  event.preventDefault(); 
  var scoreKeeper = {
    initials: initials.value.trim(),
    score: correct,
  };
  localStorage.setItem("High Score", JSON.stringify(scoreKeeper));
  displayScore();
  correct = 0;
});
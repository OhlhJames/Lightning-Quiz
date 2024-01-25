var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var headerEl = document.getElementById('header');
var startBtn = document.getElementById('startBtn');
var questionLine = document.createElement('h1');
var answerList = document.getElementById('answerList')
var answerOne = document.createElement('button'); 
var answerTwo = document.createElement('button');
var answerThree = document.createElement('button');
var answerFour = document.createElement('button');
var goBackBtn = document.createElement('button');
var initialsPrompt = document.getElementById('initialsPrompt');
var initialsInput = document.createElement('input');
answerList.appendChild(answerOne);
answerList.appendChild(answerTwo);
answerList.appendChild(answerThree);
answerList.appendChild(answerFour);
initialsPrompt.appendChild(initialsInput);
initialsPrompt.appendChild(goBackBtn);
goBackBtn.textContent = 'Go Back';
answerList.style.display = 'none';
initialsPrompt.style.display ='none'
var quizTimer = 60;

startBtn.addEventListener('click', setTime)

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

function frontPage(){
  header.textContent = "Lightning Quiz!";
  mainEl.textContent = "Welcome to the Lightning Quiz! once you press the 'Start Quiz' button, you will have one minute to answer up to 6 questions as correctly and as fast as you can! I hope your ready for a challenge! "
  startBtn.style.display = 'block';
  initialsPrompt.style.display = 'none';
  highScoreTracker.style.display ='none';
  answerList.style.display = 'none';
}
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
function highScore(){
  quizTimer = 0;
  timeEl.textContent = '';
  headerEl.textContent = 'Congrats!';
  mainEl.textContent = 'You got correct answers! To add your high score, input your initials below!'
  initialsPrompt.style.display = 'flex'
  startBtn.style.display = 'none'
  goBackBtn.textContent = 'Go Back';
  goBackBtn.addEventListener('click', frontPage());
};
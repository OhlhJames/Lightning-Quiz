var body = document.body;
var initialsPrompt = document.getElementById('initialsPrompt');
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
var goBackBtn = document.createElement('button');
initialsPrompt.setAttribute('style', 'width:30%; display:flex; align-items:center; justify-content:center'); 
answerList.appendChild(answerOne);
answerList.appendChild(answerTwo);
answerList.appendChild(answerThree);
answerList.appendChild(answerFour);
initialsPrompt.appendChild(goBackBtn);
answerList.style.display = 'none'
var mainTimer = 60
function frontPage(){
  header.textContent = "Lightning Quiz!";
  mainEl.textContent = "Welcome to the Lightning Quiz! once you press the 'Start Quiz' button, you will have one minute to answer up to 6 questions as correctly and as fast as you can! I hope your ready for a challenge! "
  startBtn.style.display = 'block';
  initialsPrompt.style.display = 'none';
  highScoreTracker.style.display ='none';
  answerList.style.display = 'none';
}
body.setAttribute('style', 'display: flex; flex-direction: column; align-items:center');
header.setAttribute("style", "margin:auto; width:50%; text-align:center;");
mainEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
header.textContent = "Lightning Quiz!"
mainEl.textContent = "Welcome to the Lightning Quiz! once you press the 'Start Quiz' button, you will have one minute to answer up to 6 questions as correctly and as fast as you can! I hope your ready for a challenge! "
answerList.setAttribute("style", "display: flex; margin:auto; width:50%; text-align:center; flex-direction: column; align=items:center");
function setTime() {
    var timerInterval = setInterval(function() {
      mainTimer--;
      timeEl.textContent = mainTimer + " seconds left.";
      if(mainTimer === 0) {
        clearInterval(timerInterval);
        highScore();
        timeEl.textContent = ''
      }else if (mainTimer <=0){
        clearInterval(timerInterval);
        timeEl.textContent = ''
      }
    }, 1000);
}
function startQuiz(){
  initialsPrompt.style.display = 'none'
  highScoreTracker.style.display = 'none'
  startBtn.style.display = 'none'
  answerList.style.display = 'flex'
  correct = 0;
  questionOne();
  setTime();
};  
startBtn.addEventListener('click', startQuiz)
function questionOne(){
  header.textContent = 'Question One:'
  mainEl.textContent = 'Which of these is a basic programming language used by websites for logic?'
  answerList.style.display = 'flex'
  answerOne.textContent = 'HTML'
  answerTwo.textContent = 'Binary'
  answerThree.textContent = 'Viper'
  answerFour.textContent = 'JavaScript'
  answerFour.addEventListener('click', function(event){
    event.stopPropagation()
    correct ++
    questionTwo()
  });
  answerThree.addEventListener('click', function(event){
    event.stopPropagation()
    questionTwo()
  });
  answerTwo.addEventListener('click', function(event){
    event.stopPropagation()
    questionTwo()
  });
  answerOne.addEventListener('click', function(event){
    event.stopPropagation()
    questionTwo()
  });
}
function questionTwo(){
  answerList.style.display = 'flex'
  initialsPrompt.style.display = 'none'

  header.textContent = 'Question Two:'
  mainEl.textContent = 'Which of these is not a web browser?'
  answerOne.textContent = 'Safari'
  answerTwo.textContent = 'Opus'
  answerThree.textContent = 'Internet Explorer'
  answerFour.textContent = 'Opera'
  answerTwo.addEventListener('click', function(event){
    event.stopPropagation()
    correct ++
    questionThree()
  });
  answerThree.addEventListener('click', function(event){
    event.stopPropagation()
    questionThree()
  });
  answerFour.addEventListener('click', function(event){
    event.stopPropagation()
    questionThree()
  });
  answerOne.addEventListener('click', function(event){
    event.stopPropagation()
    questionThree()
  });
}
function questionThree(){
  answerList.style.display = 'flex'
  initialsPrompt.style.display = 'none'
  header.textContent = 'Question Three:';
  mainEl.textContent = 'Which of these is not a data type?';
  answerOne.textContent = 'Number';
  answerTwo.textContent = 'Boolean';
  answerThree.textContent = 'Div';
  answerFour.textContent = 'String';
  answerThree.addEventListener('click', function(event){
    event.stopPropagation();
    correct ++;
    questionFour();
  });
  answerTwo.addEventListener('click', function(event){
    event.stopPropagation();
    questionFour();
  });
  answerFour.addEventListener('click', function(event){
    event.stopPropagation();
    questionFour();
  });
  answerOne.addEventListener('click', function(event){
    event.stopPropagation();
    questionFour();
  });
}
function questionFour(){
  answerList.style.display = 'flex'
  initialsPrompt.style.display = 'none'
  header.textContent = 'Question Four:';
  mainEl.textContent = 'How many ASCII characters are there?';
  answerOne.textContent = '256';
  answerTwo.textContent = '149,813';
  answerThree.textContent = '36';
  answerFour.textContent = '206';
  answerOne.addEventListener('click', function(event){
    event.stopPropagation();
    correct ++;
    questionFive();
  });
  answerTwo.addEventListener('click', function(event){
    event.stopPropagation();
    questionFive();
  });
  answerFour.addEventListener('click', function(event){
    event.stopPropagation();
    questionFive();
  });
  answerThree.addEventListener('click', function(event){
    event.stopPropagation();
    questionFive();
  });
}
function questionFive(){
  answerList.style.display = 'flex'
  initialsPrompt.style.display = 'none'
  header.textContent = 'Question Five:'
  mainEl.textContent = 'Which of These was an early web browser that changed how we interacted with the internet?'
  answerOne.textContent = 'Internet Explorer'
  answerTwo.textContent = 'Thunderbird'
  answerThree.textContent = 'MS DOS'
  answerFour.textContent = 'Mosaic'
  answerFour.addEventListener('click', function(event){
    event.stopPropagation();
    correct ++
    questionSix();
  });
  answerTwo.addEventListener('click', function(event){
    event.stopPropagation();
    questionSix();
  });
  answerOne.addEventListener('click', function(event){
    event.stopPropagation();
    questionSix();
  });
  answerThree.addEventListener('click', function(event){
    event.stopPropagation();
    questionSix();
  });
}
function questionSix(){ 
  answerList.style.display = 'flex'
  initialsPrompt.style.display = 'none'
  header.textContent = 'Question Six:'
  mainEl.textContent = 'What Year did the first mass-market Graphical User Interface computer become available?'
  answerOne.textContent = '1974'
  answerTwo.textContent = '1985'
  answerThree.textContent = '1983'
  answerFour.textContent = '1992'
  answerThree.addEventListener('click', function(event){
    event.stopPropagation();
    correct ++
    highScore();
  });
  answerTwo.addEventListener('click', function(event){
    event.stopPropagation();
    highScore();
  });
  answerFour.addEventListener('click', function(event){
    event.stopPropagation();
    highScore();
  });
  answerOne.addEventListener('click', function(event){
    event.stopPropagation();
    highScore();
  });
};
function highScore(){
  mainTimer = 0;
  timeEl.textContent = '';
  header.textContent = 'Congrats!';
  mainEl.textContent = 'You got ' + correct +' correct answers! To add your high score, input your initials below!'
  answerList.style.display = 'none'
  initialsPrompt.style.display = 'flex'
  goBackBtn.textContent = 'Go Back';
  goBackBtn.addEventListener('click',frontPage)
};
function displayScore() {
  var lastScore = JSON.parse(localStorage.getItem("High Score"));
  if (lastScore !== null) {
    highScoreTracker.textContent = lastScore.initials + 
    " : " + lastScore.score;
  };
};
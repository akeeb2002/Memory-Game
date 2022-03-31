// global constants
var n;
var timeleft=7;
var clueHoldTime = 450; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence


//Global Variables
var pattern = [2, 7, 2, 4, 8, 5, 3, 8, 1, 5, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var mistakes;

function createPattern()
{
  var thePattern = [];
  for(let i=0; i<8; i++)
    {
      thePattern[i] = Math.floor(Math.random() * 8) + 1;
    }
  console.log(thePattern);
  return thePattern;
}

function startGame(){
  timeleft=7;
  mistakes = 0;
    pattern = createPattern();
    progress = 0;
    gamePlaying = true;
document.getElementById("startBtn").classList.add("hidden");
document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  n= setInterval(function(){document.getElementById("seconds").innerHTML=String(timeleft); timeleft--; if(timeleft==0){
      clearInterval(n); timeleft=7;loseGame();
    }},1000);
}



function stopGame(){
document.getElementById("startBtn").classList.remove("hidden");
document.getElementById("stopBtn").classList.add("hidden");
    gamePlaying = false;
  clearInterval(n);
}



// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 500,
  6: 450,
  7: 300,
  8: 600
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
  document.getElementById("button" + btn + "img").classList.add("pressed");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
  document.getElementById("button" + btn + "img").classList.remove("pressed");
}


function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    clueHoldTime = clueHoldTime-20
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You Lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You Won!");
}

function showImage(btn) {
  document.getElementById("button" + btn + "img").classList.add("pressed");
}

function removeImage(btn) {
  document.getElementById("button" + btn + "img").classList.remove("pressed");
}




function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
    if(pattern[guessCounter] == btn){
      timeleft=7;
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    mistakes++;
    if(mistakes==1){
      alert("WARNING: One Mistake");
    }
    if(mistakes==2){
      alert("WARNING: Two Mistake");
    }
    if(mistakes==3){
      alert("WARNING: Three Mistake");
    }
    //Guess was incorrect
    //GAME OVER: LOSE!
    if(mistakes>=4){
      loseGame();
    }
  }
}


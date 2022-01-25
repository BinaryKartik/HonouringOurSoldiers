var confettiSettings = { target: 'my-canvas' };
var canvas = document.getElementById("my-canvas")
var confetti = new ConfettiGenerator(confettiSettings);
var aud = document.getElementById("aud")
var btn = document.getElementById("take")
var speech = new SpeechSynthesisUtterance()


confetti.render()
setTimeout(() =>{
  canvas.style.opacity = '1'
}, 2000)
setTimeout(() =>{
  canvas.style.opacity = '0'
}, 5000)
setTimeout(() =>{
  canvas.remove()
}, 6000)
var playing = false
var manualPause = false
window.onload = () => {
    if (speech){
    speech.lang = "en-IE"
    speech.rate = "0.8"
    }
    else{
      btn.remove()
    }
}
window.onscroll = function(){
    ProgressBar()
    awards()
    if(!playing && !manualPause){
      aud.volume = 0.2
      aud.play()
    playing = true
    }
}
function mute(){
  var icon  = document.getElementById("icon")
  if (manualPause){
    manualPause = false
  aud.play()
  icon.classList.remove("fa-volume-mute")
  icon.classList.add("fa-volume-up")
  }
  else{
    manualPause = true
    aud.pause()
    icon.classList.remove("fa-volume-up")
    icon.classList.add("fa-volume-mute")
  }
}
function ProgressBar(){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementsByClassName("progress")[0].style.width = scrolled + "%";
}

function awards(){
  var award = document.getElementById("awards")
  var awardName = document.getElementById("award-name")
  if (awardName.textContent === "Awards"){
  if (window.scrollY >= (award.offsetTop - 300)){
    var vir = document.getElementsByClassName("vir")[0]
    var parakram = document.getElementsByClassName("parakram")[0]
    var seva = document.getElementsByClassName("seva")[0]
    var siachen = document.getElementsByClassName("siachen")[0]
    var sainya = document.getElementsByClassName("sainya-seva")[0]
    var special = document.getElementsByClassName("special")[0]
    var nine = document.getElementsByClassName("nine-year")[0]
    function show(elem, name){
      elem.style.opacity = "1"
      awardName.innerHTML = name
    }
    setTimeout(show(vir, "Vir Chakra"), 2000)
    setTimeout(() =>{show(parakram, "Parakram Padak")}, 2000)
    setTimeout(() => {show(seva, "Samanya Seva Medal")}, 4000)
    setTimeout(() => {show(siachen, "Siachen Glacier Medal")}, 6000)
    setTimeout(() => {show(sainya, "General Service Medal")}, 8000)
    setTimeout(() => {show(special, "Special Service Medal")}, 10000)
    setTimeout(() => {show(nine, "Nine Year Long Service Medal")}, 12000)
  }
}
}
btn.addEventListener("click", (e) =>{
  speech.text = document.getElementById("pledge_content").textContent
  speechSynthesis.speak(speech)
  speech.onend = ()=>{
    if (!manualPause){
    mute()}}
    speech.onstart = ()=>{
      aud.pause()
    }
})

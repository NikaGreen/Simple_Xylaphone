
  function playNote(note) {
    const audioElement = document.querySelector(`audio[data-key="${note}"]`);
    const buttonElement = document.querySelector(`button[data-key="${note}"]`);
    buttonElement.classList.add('playing');
    audioElement.currentTime = 0;
    audioElement.play();
    buttonElement.addEventListener('transitionend', removeStyles);
  }

  document.getElementById("h1").onmouseover= function() {myFunction()};

  function myFunction() {
    var audio = new Audio('xylophone-sweep.wav');
    audio.play();
  }
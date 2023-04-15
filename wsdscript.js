const gifLogo = document.getElementById('your-gif-logo-id-here');
const loopCount = 1; // change this value to set the number of loops before stopping

gifLogo.addEventListener('load', function() {
  let loopCounter = 0;

  const loop = setInterval(function() {
    loopCounter++;

    if (loopCounter >= loopCount) {
      clearInterval(loop);
      setTimeout(function() {
        gifLogo.src = gifLogo.src;
      }, 100); // change this delay value if necessary
    }
  }, gifLogo.duration);
});

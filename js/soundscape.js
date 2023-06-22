function createPlayerPlusPanner(url, positionX, positionY, positionZ) {
    const panner = new Tone.Panner3D({
        //creates an object that is used to position the audio source in 3D space using the HRTF panning model, accompanied by the X, Y and Z coordinates
      panningModel: "HRTF",
      positionX,
      positionY,
      positionZ
      //final destination output for the audio
    }).toDestination();
    // a loop object that gets the audio from an URL and loops it constantly.
    const player = new Tone.Player({
      url,
      loop: true
    }).connect(panner).sync().start(0);
  }
  //4 different audio sources that are positioned in the 3D soundscape using the X, Y and Z coordinates.
  createPlayerPlusPanner("sounds/BirdChirpingSoundEffec.mp3", 2, 0, 0);
  createPlayerPlusPanner("sounds/ChimesFreeSoundEffectsHDwithdownloadlinkYouTub.mp3", 0, 0, 2);
  createPlayerPlusPanner("sounds/Tibetanbellsoundeveryminutfortenminute.mp3", -2, 0, 2);
  // createPlayerPlusPanner("https://tonejs.github.io/audio/berklee/thump1.mp3", -2, 0, -2);
  // Toggles the tone on or off
  document.querySelector("tone-play-toggle").addEventListener("start", () => Tone.Transport.start());
  document.querySelector("tone-play-toggle").addEventListener("stop", () => Tone.Transport.stop());
  //this sets the tone listener object's foreward vector based on an angle value. This simulates the 3D spatial audio.
  function setRotation(angle) {
    Tone.Listener.forwardX.value = Math.sin(angle);
    Tone.Listener.forwardY.value = 0;
    Tone.Listener.forwardZ.value = -Math.cos(angle);
  }
  //These eventlisteners constantly update the position of the audio when the sliders are changed.
  document.querySelector("#xSlider").addEventListener("input", (e) => Tone.Listener.positionX.value = parseFloat(e.target.value));
  document.querySelector("#zSlider").addEventListener("input", (e) => Tone.Listener.positionY.value = parseFloat(e.target.value));
  document.querySelector("#rotation").addEventListener("input", (e) => setRotation(parseFloat(e.target.value)));
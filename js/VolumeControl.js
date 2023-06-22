const container = document.getElementById("container");
	container.addEventListener("click", (event) => {
	  const isButton = event.target.nodeName === "BUTTON";
	  if (!isButton) {
		return;
	  }
	  event.target.focus();
	});

	$('.play').click((e) => {
  var _this = e.target;
  var id = _this.id;
  $(_this).toggleClass('active');
  if ($(_this).hasClass('active')) {
    $(_this).text('Pause');
    document.getElementById(`sound${id}`).play();
  } else {
    $(_this).text('Play');
    document.getElementById(`sound${id}`).pause();
  }
})

var mediaClip;
var volume1;
var mediaClip1;
var volume2;
var mediaClip2;
var volume3;

function init()
{
    mediaClip = document.getElementById("mediaClip");
    volume1 = document.getElementById("volume1");
	mediaClip1 = document.getElementById("mediaClip1");
    volume2 = document.getElementById("volume2");
	mediaClip2 = document.getElementById("mediaClip2");
    volume3 = document.getElementById("volume3");

    mediaClip.play();
	mediaClip1.play();
	mediaClip2.play();
}

function setVolume() {
    var mediaClip = document.getElementById("mediaClip");
    mediaClip.volume = document.getElementById("volume1").value;
	var mediaClip1 = document.getElementById("mediaClip1");
    mediaClip1.volume = document.getElementById("volume2").value;
	var mediaClip2 = document.getElementById("mediaClip2");
    mediaClip2.volume = document.getElementById("volume3").value;
	
}


function play() {
    var audio = document.getElementById("mediaClip");
	var audio1 = document.getElementById("mediaClip1");
	var audio2 = document.getElementById("mediaClip2");
    
	audio.play();
	audio1.play();
	audio2.play();
}

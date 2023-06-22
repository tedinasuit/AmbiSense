window.addEventListener("orientationchange", function() { //call popup function when orientation is on vertical mode.
    if (window.orientation == 0 || window.orientation == 180) {

        $(document).ready(function(){
    var imgURLs = [
      'https://cdn.discordapp.com/attachments/885989425186738216/1105486167262101587/2d65cdd06f669d9a26125962f3440c1995a90324efee9158512f3b6d8baaaf56_3.jpg',
       "https://cdn.discordapp.com/attachments/885989425186738216/1105486167262101587/2d65cdd06f669d9a26125962f3440c1995a90324efee9158512f3b6d8baaaf56_3.jpg"
    ];
    var randomIndex = Math.floor(Math.random() * imgURLs.length);
    var imgURL = imgURLs[randomIndex];
  
    
    
    setTimeout(function(){
        lightcase.start({
          href: imgURL,
          // more options like width, height, etc.
        });
     },1000); // 1000 to load it after 1 second from page load
    
  });
}
}, false);
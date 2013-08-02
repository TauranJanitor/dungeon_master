PreloadSounds();
    
function PreloadSounds() {
    	if (navigator.appName == 'Microsoft Internet Explorer') {	// proxy test for ie
		$("#sounds").append("<embed src='sounds/Door4.mp3' hidden=true id='SndDoor' autostart=false>");
    	}
    	else {
    		//use audio tag for HTML5 compliant
		$("#sounds").append("<audio src='sounds/Door4.mp3' hidden=true id='SndDoor'>");
    	}
}

function PlaySound(surl) {
  document.getElementById("dummyspan").innerHTML=
    '<embed src="'+surl+'" hidden=true autostart=true type="audio/mpeg" loop=false>';
	
}

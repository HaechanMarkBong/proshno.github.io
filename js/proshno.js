function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

var aud = document.getElementById("bgsong");
var icon = document.getElementById("icon");
function mute() {
	
	if(aud.muted == true) {
		aud.muted = false;
		icon.className = "glyphicon glyphicon-volume-up";
	}
	else {
		aud.muted = true;
		icon.className = "glyphicon glyphicon-volume-off";
	}
}
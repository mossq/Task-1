(function() {
	var	myBox = document.getElementById("myBox");
		
	myBox.onclick = function() {
		var clickCount = document.getElementById("clickCount"),
			numOfClicks = parseInt(clickCount.innerHTML, 10);
			clickCount.innerHTML = ++numOfClicks;
	};			
})();

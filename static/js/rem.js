(function(){
	var html = document.documentElement;
	var hWidth = html.getBoundingClientRect().width;
	// console.log(hWidth);
	html.style.fontSize = hWidth/30 + 'px';
})()
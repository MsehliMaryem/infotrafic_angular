
 function chiffres(event) {
	// Compatibilit� IE / Firefox
	if(!event && window.event) {
		event=window.event;
	}
 
	var code = event.keyCode; 
	var which = event.which;
 
	// IE
	if ((code < 48 || code > 57) && code != 46 && code != 8 && code != 9 && code != 16 && code != 13) {
		event.returnValue = false;
		event.cancelBubble = true;
		
	}
 
	// DOM (dont Firefox)
	if ((which < 48 || which > 57) && (code < 37 || code > 40) && code != 46 && code != 8 && code != 9 && code != 16 && code != 13 || event.ctrlKey) {
		event.preventDefault();
		event.stopPropagation();
		
	}
}
 

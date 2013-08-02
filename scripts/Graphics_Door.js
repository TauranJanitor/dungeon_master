function updateDoor(){
	clear_door();
	var frntx;
	var frnty;
	var leftx;
	var lefty;
	var ritex;
	var ritey;
	
	switch(curDir) {
		case 0: frntx =  0; frnty = -1; leftx = -1; lefty =  0; ritex = +1; ritey =  0; break;
		case 1: frntx = +1; frnty =  0; leftx =  0; lefty = -1; ritex =  0; ritey = +1; break;
		case 2: frntx =  0; frnty = +1; leftx = +1; lefty =  0; ritex = -1; ritey =  0; break;
		case 3: frntx = -1; frnty =  0; leftx =  0; lefty = +1; ritex =  0; ritey = -1; break;
	}

	//front 1
	try {
		switch(curmap[curX + frntx][curY + frnty].type) {
			case 2:
				$('.doorFront1_inner').css('background-image', 'url(\'' + curmap[curX + frntx][curY + frnty].door.innerGraphic + '\')');
				disblock('.doorFront1');
				disblock('.doorFront1_inner');
				disblock('.doorFront1_button');
				$('.doorFront1_inner').css('height', curmap[curX + frntx][curY + frnty].door.position + 'px');
				$('.doorFront1_button').click(function() {
					curmap[curX + frntx][curY + frnty].door.openclose(curX + frntx, curY + frnty);
				});
			break;
			default:
				hideblock('.doorFront1');
				hideblock('.doorFront1_inner');
				hideblock('.doorFront1_button');
				clearevents('.doorFront1_button');
		}
	}
	catch (err) {
	}

	//front 2
	try {
		switch(curmap[curX + frntx * 2][curY + frnty * 2].type) {
			case 2:
				$('.doorFront2_inner').css('background-image', 'url(\'' + curmap[curX + frntx * 2][curY + frnty * 2].door.innerGraphic2 + '\')');
				disblock('.doorFront2');
				disblock('.doorFront2_inner');
				$('.doorFront2_inner').css('height', (curmap[curX + frntx * 2][curY + frnty * 2].door.position * 0.67) + 'px');
			break;
			default:
				hideblock('.doorFront2');
				hideblock('.doorFront2_inner');
		}
	}
	catch (err) {
	}
    
	//right 1
	try {
		switch(curmap[curX + ritex + frntx][curY + ritey + frnty].type) {
			case 2:
				$('.doorSide1_2_inner').css('background-image', 'url(\'' + curmap[curX + ritex + frntx][curY + ritey + frnty].door.innerGraphic + '\')');
				disblock('.doorSide1_2');
				disblock('.doorSide1_2_inner');
				$('.doorSide1_2_inner').css('height', curmap[curX + ritex + frntx][curY + ritey + frnty].door.position + 'px');
			break;
			default:
				hideblock('.doorSide1_2');
				hideblock('.doorSide1_2_inner');
		}
	}
	catch (err) {
	}

	//right 2
	try {
		switch(curmap[curX + ritex + frntx * 2][curY + ritey + frnty * 2].type) {
			case 2:
				$('.doorSide2_2_inner').css('background-image', 'url(\'' + curmap[curX + ritex + frntx * 2][curY + ritey + frnty * 2].door.innerGraphic2 + '\')');
				disblock('.doorSide2_2');
				disblock('.doorSide2_2_inner');
				$('.doorSide2_2_inner').css('height', (curmap[curX + ritex + frntx * 2][curY + ritey + frnty * 2].door.position * 0.67) + 'px');
			break;
			default:
				hideblock('.doorSide2_2');
				hideblock('.doorSide2_2_inner');
		}
	}
	catch (err) {
	}
    
	//left 1
	try {
		switch(curmap[curX + leftx + frntx][curY + lefty + frnty].type) {
			case 2:
				$('.doorSide1_1_inner').css('background-image', 'url(\'' + curmap[curX + leftx + frntx][curY + lefty + frnty].door.innerGraphic + '\')');
				disblock('.doorSide1_1');
				disblock('.doorSide1_1_inner');
				$('.doorSide1_1_inner').css('height', curmap[curX + leftx + frntx][curY + lefty + frnty].door.position + 'px');
			break;
			default:
				hideblock('.doorSide1_1');
				hideblock('.doorSide1_1_inner');
		}
	}
	catch (err) {
	}

	//left 2
	try {
		switch(curmap[curX + leftx + frntx * 2][curY + lefty + frnty * 2].type) {
			case 2:
				$('.doorSide2_1_inner').css('background-image', 'url(\'' + curmap[curX + leftx + frntx * 2][curY + lefty + frnty * 2].door.innerGraphic2 + '\')');
				disblock('.doorSide2_1');
				disblock('.doorSide2_1_inner');
				$('.doorSide2_1_inner').css('height', (curmap[curX + leftx + frntx * 2][curY + lefty + frnty * 2].door.position * 0.67) + 'px');
			break;
			default:
				hideblock('.doorSide2_1');
				hideblock('.doorSide2_1_inner');
		}
	}
	catch (err) {
	}
}

function clear_door(){
	$('div[class*=door]').css('display', 'none');
	clearevents('.doorFront1_button');
}
function updateMap() {
	var outstring = '';
	for (var y = 0; y < curmap[0].length; y++) {
		for (var x = 0; x < curmap.length; x++) {
			if (x == curX && y == curY) {
				outstring += 'N';
			}
			else {
				switch (curmap[x][y].type) {
					case 0:
						outstring += '()';
					break;
					case 1:
						outstring += '[]';
					break;
				}
			}
		}
		outstring += '<br/>';
	}
	$('#outer').html(outstring);
}

function updateViewport(){
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

//	Start LONG wall routine. Consolidated from 800 lines down to 140
	try {
		if (curmap[curX + leftx][curY + lefty].type == 1) disblock('.wallLside0');
		else hideblock('.wallLside0');
	} 
	catch (err) {
		disblock('.wallLside0');
	}
	    
	try {
		if (curmap[curX + ritex][curY + ritey].type == 1) disblock('.wallRside0');
		else hideblock('.wallRside0');
	}
	catch (err) {
		disblock('.wallRside0');
	}
    
	try {
		if (curmap[curX + leftx + frntx][curY + lefty + frnty].type == 1) disblock('.wallLside1');
		else hideblock('.wallLside1');
        }
	catch (err) {
		disblock('.wallLside1');
	}
    
	try {
		if (curmap[curX + ritex + frntx][curY + ritey + frnty].type == 1) disblock('.wallRside1');
		else hideblock('.wallRside1');
        }
	catch (err) {
		disblock('.wallRside1');
	}
    
	try {
		if (curmap[curX + leftx + frntx * 2][curY + lefty + frnty * 2].type == 1) disblock('.wallLside2');
		else hideblock('.wallLside2');
        }
	catch (err) {
		disblock('.wallLside2');
	}
    
	try {
		if (curmap[curX + ritex + frntx * 2][curY + ritey + frnty * 2].type == 1) disblock('.wallRside2');
		else hideblock('.wallRside2');
        }
	catch (err) {
		disblock('.wallRside2');
	}
    
	try {
		if (curmap[curX + leftx + frntx * 3][curY + lefty + frnty * 3].type == 1) disblock('.wallLside3');
		else hideblock('.wallLside3');
        }
	catch (err) {
		disblock('.wallLside3');
	}
    
	try {
		if (curmap[curX + ritex + frntx * 3][curY + ritey + frnty * 3].type == 1) disblock('.wallRside3');
		else hideblock('.wallRside3');
        }
	catch (err) {
		disblock('.wallRside3');
	}
    
	try {
		if (curmap[curX + frntx][curY + frnty].type == 1) disblock('.wallFront1');
		else hideblock('.wallFront1');
	}
	catch (err) {
		disblock('.wallFront1');
	}
    
	try {
		if (curmap[curX + leftx + frntx][curY + lefty + frnty].type == 1) disblock('.wallSide1_1');
		else hideblock('.wallSide1_1');
	}
	catch (err) {
		disblock('.wallSide1_1');
	}
    
	try {
		if (curmap[curX + ritex + frntx][curY + ritey + frnty].type == 1) disblock('.wallSide1_2');
		else hideblock('.wallSide1_2');
	}
	catch (err) {
		disblock('.wallSide1_2');
	}

	try {
		if (curmap[curX + frntx * 2][curY + frnty * 2].type == 1) disblock('.wallFront2');
		else hideblock('.wallFront2');
        }
	catch (err) {
		disblock('.wallFront2');
	}
    
	try {
		if (curmap[curX + leftx + frntx * 2][curY + lefty + frnty * 2].type == 1) disblock('.wallSide2_1');
		else hideblock('.wallSide2_1');
	}
	catch (err) {
		disblock('.wallSide2_1');
	}
    
	try {
		if (curmap[curX + ritex + frntx * 2][curY + ritey + frnty * 2].type == 1) disblock('.wallSide2_2');
		else hideblock('.wallSide2_2');
	} 
	catch (err) {
		disblock('.wallSide2_2');
	}
    
	try {
		if (curmap[curX + frntx * 3][curY + frnty * 3].type == 1) disblock('.wallFront3');
		else hideblock('.wallFront3');
	}
	catch (err) {
		disblock('.wallFront3');
	}
    
	try {
		if (curmap[curX + leftx + frntx * 3][curY + lefty + frnty * 3].type == 1) disblock('.wallSide3_1');
		else hideblock('.wallSide3_1');
	}
	catch (err) {
		disblock('.wallSide3_1');
	}
    
	try {
		if (curmap[curX + ritex + frntx * 3][curY + ritey + frnty * 3].type == 1) disblock('.wallSide3_2');
		else hideblock('.wallSide3_2');
	} 
	catch (err) {
		disblock('.wallSide3_2');
	}
	// end LONG wall routine
		
	updateDecore();
	updateDoor();
}

// start updateDecore. should consolidate like walls, reduced from 400 lines to 180

function updateDecore(){
	clear_decor();

	var frntx;
	var frnty;
	var leftx;
	var lefty;
	var ritex;
	var ritey;
	var frontblock1;
	var frontblock2;
	var leftblock1;
	var leftblock2;
	var rightblock1;
	var rightblock2;
	
	var frontface1;
	var frontface2;
	var leftface1;
	var leftface2;
	var rightface1;
	var rightface2;
	
	switch(curDir) {
		case 0: frntx =  0; frnty = -1; leftx = -1; lefty =  0; ritex = +1; ritey =  0; 
		break;
		case 1: frntx = +1; frnty =  0; leftx =  0; lefty = -1; ritex =  0; ritey = +1; 
		break;
		case 2: frntx =  0; frnty = +1; leftx = +1; lefty =  0; ritex = -1; ritey =  0; 
		break;
		case 3: frntx = -1; frnty =  0; leftx =  0; lefty = +1; ritex =  0; ritey = -1; 
		break;
	}

	// front face 1
	try {
		frontblock1 = curmap[curX + frntx][curY + frnty];
		switch(curDir) {
			case 0: frontface1 = frontblock1.s; break;
			case 1: frontface1 = frontblock1.w; break;
			case 2: frontface1 = frontblock1.n; break;
			case 3: frontface1 = frontblock1.e; break;
		}
		if (frontface1.length > 0) {
			for (x in frontface1) {
				switch (frontface1[x].objType) {
					case 'wallText':
						$('.wallFront1').html(frontface1[x].text);
					break;
					case 'stair':
						disblock_decor('.stairsFront1_decor', frontface1[x].image1);
					break;
					case 'wallDecor':
						$('.wallFront1').html(frontface1[x].img1);
						$(".portrait").click(function() {
							//alert($(this).attr("name"));
							$("#character_sheet").css("display", "block");
						});
					break;
				}
			}
		}
		else {
		}
	}
	catch (err) {
	}
	// front face 2
	try {
		frontblock2 = curmap[curX + frntx * 2][curY + frnty * 2];
		switch(curDir) {
			case 0: frontface2 = frontblock2.s; break;
			case 1: frontface2 = frontblock2.w; break;
			case 2: frontface2 = frontblock2.n; break;
			case 3: frontface2 = frontblock2.e; break;
		}
		if (frontface2.length > 0) {
			for (x in frontface2) {
				switch (frontface2[x].objType) {
					case 'wallText':
						disblock_decor('.wallFront2_walldecor', 'wallFront2_text.png');
					break;
					case 'stair':
						disblock_decor('.stairsFront2_decor', frontface2[x].image2);
					break;
					case 'wallDecor':
						$('.wallFront2_walldecor').html(frontface2[x].img2);
						$('.wallFront2_walldecor').css('display', 'block');
					break;
				}
			}
		}
		else {
		}
	}
	catch (err) {
	}
	
	// Right side 1
	try {
		rightblock1 = curmap[curX + ritex][curY + ritey];
		switch(curDir) {
			case 0: rightface1 = rightblock2.w; break;
			case 1: rightface1 = rightblock2.n; break;
			case 2: rightface1 = rightblock2.e; break;
			case 3: rightface1 = rightblock2.s; break;
		}
		if (rightface1.length > 0) {
			for (x in rightface1) {
				switch (rightface1[x].objType) {
					case 'wallText':
//						disblock_decor('.wallRside0_walldecor', 'wallRSide0_text.png');
					break;
				}
			}
		}
		else {
		}
	}
	catch (err) {
	}

	// Right side 2
	try {
		rightblock2 = curmap[curX + ritex + frntx][curY + ritey + frnty];
		switch(curDir) {
			case 0: rightface2 = rightblock2.w; break;
			case 1: rightface2 = rightblock2.n; break;
			case 2: rightface2 = rightblock2.e; break;
			case 3: rightface2 = rightblock2.s; break;
		}
		if (rightface2.length > 0) {
			for (x in rightface2) {
				switch (rightface2[x].objType) {
					case 'wallText':
						disblock_decor('.wallRside1_walldecor', 'wallRSide1_text.png');
					break;
					case 'wallDecor':
						$('.wallRside1_walldecor').html(rightface2[x].imgR2);
						$('.wallRside1_walldecor').css('display', 'block');
					break;
				}
			}
		}
		else {
		}
	}
	catch (err) {
	}
	//end of right side2
	
	// Right facing 2
	try {
		rightblock2 = curmap[curX + ritex + frntx * 2][curY + ritey + frnty * 2];
		switch(curDir) {
			case 0: rightface2 = rightblock2.s; break;
			case 1: rightface2 = rightblock2.w; break;
			case 2: rightface2 = rightblock2.n; break;
			case 3: rightface2 = rightblock2.e; break;
		}
		if (rightface2.length > 0) {
			for (x in rightface2) {
				switch (rightface2[x].objType) {
//					case 'wallText':
//						disblock_decor('.wallRside1_walldecor', 'wallRSide1_text.png');
//					break;
					case 'wallDecor':
						$('.wallRside2_2_walldecor').html(rightface2[x].imgRF2);
						$('.wallRside2_2_walldecor').css("display", "block");
					break;
				}
			}
		}
		else {
		}
	}
	catch (err) {
	}
	//end of right facing 2
	
	
	//Left side 1
	try {
		leftblock1 = curmap[curX + leftx][curY + lefty];
		switch(curDir) {
			case 0: leftface1 = leftblock1.e; break;
			case 1: leftface1 = leftblock1.s; break;
			case 2: leftface1 = leftblock1.w; break;
			case 3: leftface1 = leftblock1.n; break;
		}
		if (leftface1.length > 0) {
			for (x in leftface1) {
				switch (leftface1[x].objType) {
					case 'wallText':
//						disblock_decor('.wallLside0_walldecor', 'wallLSide0_text.png');
					break;
				}
			}
		}
		else {
		}
	}
	catch (err) {
	}

	// left 2
	try {
		leftblock2 = curmap[curX + leftx + frntx][curY + lefty + frnty];
		switch(curDir) {
			case 0: leftface2 = leftblock2.e; break;
			case 1: leftface2 = leftblock2.s; break;
			case 2: leftface2 = leftblock2.w; break;
			case 3: leftface2 = leftblock2.n; break;
		}
		if (leftface2.length > 0) {
			for (x in leftface2) {
				switch (leftface2[x].objType) {
					case 'wallText':
						disblock_decor('.wallLside1_walldecor', 'wallLSide1_text.png');
					break;
					case 'wallDecor':
						$(".wallLside1_walldecor").html(leftface2[x].imgL2);
						$(".wallLside1_walldecor").css("display", "block");
					break;
				}
			}
		}
		else {
		}
	}
	catch (err) {
	}
	//end of left side 2
	
	// Left facing 2
	try {
		leftblock2 = curmap[curX + leftx + frntx * 2][curY + lefty + frnty * 2];
		switch(curDir) {
			case 0: leftface2 = leftblock2.s; break;
			case 1: leftface2 = leftblock2.w; break;
			case 2: leftface2 = leftblock2.n; break;
			case 3: leftface2 = leftblock2.e; break;
		}
		if (leftface2.length > 0) {
			for (x in leftface2) {
				switch (leftface2[x].objType) {
//					case 'wallText':
//						disblock_decor('.wallRside1_walldecor', 'wallRSide1_text.png');
//					break;
					case 'wallDecor':
						$('.wallLside2_1_walldecor').html(leftface2[x].imgLF2);
						$('.wallLside2_1_walldecor').css("display", "block");
					break;
				}
			}
		}
		else {
		}
	}
	catch (err) {
	}
	//end of left facing 2
}

function doStep(povDir){
	checkEvent(povDir);
	$("div[class*='side'], div[class*='Side'], .floor, .roof").each(function(index){
		var curbck = $(this).css('background-image')
		
		if (curbck.indexOf('alt') == -1) {
			$(this).css('background-image', curbck.replace('nor.', 'alt.'));
		}
		else {
			$(this).css('background-image', curbck.replace('alt.', 'nor.'));
		} 
	});
}

function disblock(xclass){
	$(xclass).css('display', 'block');
}

function hideblock(xclass){
	$(xclass).css('display', 'none');
}

function clearevents(xclass){
	$(xclass).unbind();
}

function disblock_decor(xclass, img){
	$(xclass).css('background-image', 'url(' + img + ')');
	$(xclass).css('display', 'block');
}

function clear_decor(){
	$('.wallFront1').html('');
	$('div[class*=decor]').css('background-image', '');
	$('div[class*=decor]').css('display', 'none');
	$('div[class*=decor]').html('');
	$('div[class*=door]').css('display', 'none');
	clearevents('.doorFront1_button');
}

function updateCompass(){
	switch (curDir) {
		case 0:
			document.getElementById('cmp').innerHTML = 'N';
		break;
		case 1:
			document.getElementById('cmp').innerHTML = 'E';
		break;
	        case 2:
			document.getElementById('cmp').innerHTML = 'S';
		break;
		case 3:
			document.getElementById('cmp').innerHTML = 'W';
		break;
	}
}

function tmpLightswitch(){
	if ($('#overLay').css('display') == 'block') $('#overLay').css('display', 'none');
	else $('#overLay').css('display', 'block');
}
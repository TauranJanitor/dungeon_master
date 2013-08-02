function moveMe(povDir)
{
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

	var enablestep = false;

	switch (povDir)
	{
		case "u":
			var temploc = curmap[curX + frntx][curY + frnty];
			if (temploc.type == 0 || (temploc.type == 2 && temploc.door.position < 1)) {
				curX += frntx;
				curY += frnty;
				enablestep = true;
			}
		break;
		case "r":
			var temploc = curmap[curX + ritex][curY + ritey];
			if (temploc.type == 0 || (temploc.type == 2 && temploc.door.position < 1)) {
				curX += ritex;
				curY += ritey;
				enablestep = true;
			}
		break;
		case "d":
			var temploc = curmap[curX - frntx][curY - frnty];
			if (temploc.type == 0 || (temploc.type == 2 && temploc.door.position < 1)) {
				curX -= frntx;
				curY -= frnty;
				enablestep = true;
			}
		break;
		case "l":
			var temploc = curmap[curX + leftx][curY + lefty];
			if (temploc.type == 0 || (temploc.type == 2 && temploc.door.position < 1)) {
				curX += leftx;
				curY += lefty;
				enablestep = true;
			}
		break;
		case "l90":
			if (curDir > 0) curDir--;
			else curDir = 3;
		break;
		case "r90":
			if (curDir < 3) curDir++;
			else curDir = 0;
		break;
	}
	if (enablestep) doStep(curDir);

	checkLevelChange();
	
	updateCompass();
	updateMap();
	updateViewport();
}
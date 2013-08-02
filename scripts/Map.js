function cell() {
	this.type = 0;
	this.n = new Array();
	this.e = new Array();
	this.s = new Array();
	this.w = new Array();
	this.onWalkover = null;
	this.door = null;
}

function cellEvent(hasrun, runonce, funct,callback) {
	this.onEvent_hasrun = hasrun;
	this.onEvent_runonce = runonce;
	this.myEvent = funct;
	this.myCallback = callback;
}

function wallText(xstring) {
	this.objType = 'wallText';
	this.text = '<div class=\'wallfrontTEXT\'>'+xstring+'</div>';	
}

function wallDecor(ximgUrl, ximgLeft, ximgTop, xfunc_click) {
	this.objType = 'wallDecor';
//	this.img = '<img style="position: absolute; left: ' + ximgL + 'px" src="' + ximgF + '" width="' + width + 'px" />';
	this.img = '<img style="position: absolute; left: ' + ximgLeft + 'px; top: ' + ximgTop + 'px;" src="' + ximgUrl + '" />';
	this.image = ximgUrl;
}

function stair(ximgF) {
	this.objType = 'stair';
	var width = 480 - 166;
	this.image1 = 'stairs' + ximgF + 'Front1.png';
	this.image2 = 'stairs' + ximgF + 'Front2.png';
}

function checkLevelChange() {
	// going to hack in the level changes into this spot with ugly code
	// Level 1 going down to 2
	if (curZ == 1 && curX == 15 && curY == 3) {
		loadLevel2();
		curDir = 0;
		curX = 4;
		curY = 1;
		curZ = 2;
	}
	//Level 2 going up to 1
	if (curZ == 2 && curX == 4 && curY == 2) {
		loadLevel1();
		curDir = 3;
		curX = 14;
		curY = 3;
		curZ = 1;
	}
	//Level 2 going down to 3
	if (curZ == 2 && curX == 7 && curY == 27) {
		loadLevel3();
		curDir = 1;
		curX = 3;
		curY = 31;
		curZ = 3;
	}
	
	//Level 3 going up to 2
	if (curZ == 3 && curX == 2 && curY == 31) {
		loadLevel2();
		curDir = 2;
		curX = 7;
		curY = 28;
		curZ = 2;
	}
	
	//Level 3 going down to 4
	if (curZ == 3 && curX == 26 && curY == 22) {
		loadLevel4();
		curDir = 0;
		curX = 31;
		curY = 31;
		curZ = 4;
	}
	
	//Level 4 going up to 3
	if (curZ == 4 && curX == 31 && curY == 32) {
		loadLevel3();
		curDir = 2;
		curX = 26;
		curY = 23;
		curZ = 3;
	}
	
	//Level 4 going down to 5
	if (curZ == 4 && curX == 7 && curY == 9) {
		alert("Level 5 under construction...");
	}
}

var LEVEL1 = new Array(
"00000000000000000000",
"01110000000000111100",
"01010000011110100110",
"01010011111110110100",
"01110111010010100200",
"00101110011110101100",
"00101100011110101100",
"00101000000101101100",
"00101011100100100000",
"01111111111112100000",
"01110000010000000000",
"01010001110000111100",
"01111101010000100100",
"00011101110000100110",
"00011111111010100100",
"00011100001110100100",
"00000000000011100100",
"00000000000010000100",
"00000000000000000000");

var curmap = new Array();

loadLevel1();

function loadLevel1() {
	writemap(1);

	curmap[17][4].door = new door('wooden');
//	curmap[13][9].door = new door('portcullis');
	
	curmap[10][13].s.push(new wallText('hall of<br/>champions'));
	curmap[13][1].e.push(new wallText('altar<br/>of<br/>rebirth'));
	
	curmap[15][3].w.push(new stair('Down'));
	
	curmap[8][15].n.push(new portrait('Iaido'));
	curmap[8][12].s.push(new portrait('Zed'));
	curmap[4][16].n.push(new portrait('Chani'));
	curmap[2][14].e.push(new portrait('Hawk'));
	curmap[4][11].s.push(new portrait('Boris'));
	curmap[2][11].n.push(new portrait('Alex'));
	curmap[1][8].s.push(new portrait('Nabi'));
	curmap[10][11].w.push(new portrait('Elija'));
	curmap[9][8].s.push(new portrait('Syra'));
	curmap[11][10].n.push(new portrait('Halk'));
	curmap[11][4].s.push(new portrait('Wu'));
	curmap[8][5].e.push(new portrait('Tiggy'));
	curmap[13][5].w.push(new portrait('Daroou'));
	curmap[11][1].s.push(new portrait('Azizi'));
	curmap[10][4].n.push(new portrait('Leif'));
	curmap[7][2].s.push(new portrait('Stamm'));
	curmap[4][4].e.push(new portrait('Mophus'));
	curmap[5][7].n.push(new portrait('Leyla'));
	curmap[3][6].e.push(new portrait('Sonja'));
	curmap[6][10].n.push(new portrait('Linflas'));
	curmap[7][7].s.push(new portrait('Gando'));
	curmap[7][5].w.push(new portrait('Wuuf'));
	curmap[2][2].n.push(new portrait('Gothmog'));
	curmap[2][3].s.push(new portrait('Hissssa'));
}

function writemap(level) {
	var cells;
	
	switch(level) {
		case 1: cells = LEVEL1; break;
		case 2: cells = LEVEL2; break;
		case 3: cells = LEVEL3; break;
		case 4: cells = LEVEL4; break;
		case 5: cells = LEVEL5; break;
	}
	
	var mwidth = cells[0].length;
	var mheight = cells.length;

	curmap.length = 0;

	for (var xi = 0; xi < mwidth; xi++) {
		for (var yi = 0; yi < mheight; yi++) {
			curmap[xi] =  new Array();
		}
	}
	
	for (var x = 0; x < mwidth; x++) {
		for ( var y = 0; y< mheight; y++) {
		
			curmap[x][y] = new cell();
			switch (cells[y].charAt(x))
			{
				case is = '0':
					curmap[x][y].type = 1;
				break;
				case is = '1' :
					curmap[x][y].type = 0;
				break;
				case is = '2':
					curmap[x][y].type = 2;
					curmap[x][y].door = new door('portcullis');
				break;
			}
		}
	}
}

function portrait(Name) {
	this.objType = 'wallDecor';
	var displacement;
	switch(Name) {
		case 'Iaido': displacement = "-384px -58px"; break;
		case 'Zed': displacement = "-256px 0px"; break;
		case 'Chani': displacement = "-320px 0px"; break;
		case 'Hawk': displacement = "-384px 0px"; break;
		case 'Boris': displacement = "-448px 0px"; break;
		case 'Alex': displacement = "-192px -58px"; break;
		case 'Nabi': displacement = "-256px -116px"; break;
		case 'Elija': displacement = "0px 0px"; break;
		case 'Syra': displacement = "-128px 0px"; break;
		case 'Halk': displacement = "-64px 0px"; break;
		case 'Wu': displacement = "-128px -58px"; break;
		case 'Tiggy': displacement = "-128px -116px"; break;
		case 'Daroou': displacement = "-448px -116px"; break;
		case 'Azizi': displacement = "-320px -58px"; break;
		case 'Leif': displacement = "-64px -58px"; break;
		case 'Stamm': displacement = "0px -116px"; break;
		case 'Mophus': displacement = "0px -58px"; break;
		case 'Leyla': displacement = "-64px -116px"; break;
		case 'Sonja': displacement = "-192px -116px"; break;
		case 'Linflas': displacement = "-256px -58px"; break;
		case 'Gando': displacement = "-448px -58px"; break;
		case 'Wuuf': displacement = "-384px -116px"; break;
		case 'Gothmog': displacement = "-320px -116px;"; break;
		case 'Hissssa': displacement = "-192px 0px"; break;
	}
	this.img1 = '<div style="position: absolute; width: 91px; height: 85px; left: 116px; top: 40px; background: url(mirrorfront.png)" >';
	this.img1 +='<div class="portrait" name="' + Name + '" style="position: absolute; width: 64px; height: 58px; left: 12px; top: 12px; background: url(champions.png) ' + displacement + '; background-size: 800%" ></div></div>';
	this.img2 = '<div style="position: absolute; width: 62px; height: 58px; left: 74px; top: 26px; background: url(mirrorfront2.png)" ></div>';
	this.imgL2 = '<div style="position: absolute; width: 32px; height: 70px; left: 19px; top: 44px; background: url(mirrorLside2.png)"></div>';
	this.imgR2 = '<div style="position: absolute; width: 32px; height: 70px; left: 6px; top: 44px; background: url(mirrorRside2.png)"></div>';
	this.imgRF2 = '<div style="position: absolute; width: 46px; height: 58px; left: 74px; top: 26px; background: url(mirrorfront2.png)" ></div>';
	this.imgLF2 = '<div style="position: absolute; width: 46px; height: 58px; left: 0px; top: 26px; background: url(mirrorfront2.png) -16px" ></div>';
	this.imgL3 = '<div style=""></div>';
	this.imgR3 = '<div style=""></div>';
}


var LEVEL2 = new Array(
"0000000000000000000000000000000000",
"0121111110112110111000010011210000",
"0100100200100011111221011110010000",
"0110000101111000111001011000111000",
"0020000101101011000001010111001110",
"0010000000001011111111020111211110",
"0110121211011010111100110100000000",
"0100100000010000010001100110000010",
"0111101110010111011111100010111110",
"0100101010010111000000011110101020",
"0011102010110100001111110000101010",
"0010001000101101101000011111101010",
"0111111010101111101010100020001000",
"0100000011102000000010111011101100",
"0111211210001000011111101100100000",
"0010000000011011011111000110111110",
"0011112111110010011111010010001010",
"0001110000000110011111011111111010",
"0000000111100100011111000011111010",
"0111111100100101000200010000000000",
"0111111101100101111111110000111100",
"0101111101011100000200000111111110",
"0111000011011101110111121111110010",
"0010000020010001011101000000000010",
"0011101111011111000000000010111110",
"0000101111000000000011101110101000",
"0000100011111011100010101011101100",
"0000100101101110112110101000000000",
"0000100100110100020000101111112110",
"0000100100110111010001110010000010",
"0000100111000111100001111111111110",
"0001111001000101100001110000000000",
"0001101111000001100000000000000000",
"0000000000000000000000000000000000");

function loadLevel2() {
	writemap(2);
	
	curmap[2][1].door = new door('wooden');
	curmap[12][13].door = new door('windowed');
	curmap[4][14].door = new door('windowed');
	curmap[7][14].door = new door('reinforced');
	curmap[12][1].door = new door('wooden');
	curmap[28][5].door = new door('reinforced');

	curmap[31][3].w.push(new wallText('step inside<br/>take a ride'));
	curmap[22][9].e.push(new wallText('this wall says<br/>nothing'));
	curmap[19][28].n.push(new wallText('this fountain<br/>accepts one<br/>wish.'));
	curmap[15][17].w.push(new wallText('to close pit<br/>leave a<br/>valuable</br>on floor'));
	
	curmap[4][2].n.push(new stair('Up'));
	curmap[7][27].s.push(new stair('Down'));
}

var LEVEL3 = new Array(
"0000000000000000000000000000000000",
"0111111110000011111100000000000000",
"0010101010001110010101000001100000",
"0111111110001110000111000100100000",
"0010101010001111110001000111110000",
"0111111111100000011011100100100000",
"0010101010101111011011110000111000",
"0111111110101101110000000000001000",
"0010101010101000000000000010111000",
"0111111110101111100100111110100000",
"0110101010100000100100100010111000",
"0100000010111110100000111010001000",
"0001000000000020200000001010111000",
"0001000111100010100001121010001000",
"0110110110200111110001000011111000",
"0100110110121111111211121010000000",
"0111100010000111110000001011111000",
"0011012110121111111211001000001000",
"0111010000100111110001011011101000",
"0010012100110001000011010011101000",
"0111000101011101001110011111101100",
"0111000201011101101011000000000000",
"0011111100110100101111110010000000",
"0011000010111100100000011011100000",
"0000000010000100100012101101100000",
"0111111111111110101110101101111110",
"0202020202020200100100111100201020",
"0101010101010100101111000100101010",
"0000000000000000100001011100000010",
"0000111111110000101111011100111110",
"0000000000010000100000000000101100",
"0011111111111111111111212121101100",
"0000000000000000000000000000000000");

function loadLevel3() {
	writemap(3);

	curmap[10][14].door = new door('windowed');
	curmap[6][17].door = new door('windowed');
	curmap[6][19].door = new door('windowed');
	curmap[7][21].door = new door('windowed');
	curmap[23][15].door = new door('windowed');
	curmap[21][24].door = new door('windowed');

	curmap[2][31].e.push(new stair('Up'));
	curmap[26][22].s.push(new stair('Down'));

	curmap[14][19].e.push(new wallText('choose your<br/>door<br/>choose your<br/>fate'));
	curmap[12][18].n.push(new wallText('chambers of<br/>the guardian'));
	curmap[12][16].n.push(new wallText('the vault'));
	curmap[13][13].e.push(new wallText('the matrix'));
	curmap[15][13].e.push(new wallText('time is of<br/>the essence'));
	curmap[18][14].s.push(new wallText('room of the<br/>gem'));
	curmap[18][16].s.push(new wallText('creature<br/>cavern'));
	curmap[10][16].n.push(new wallText('you must pay<br/>for your<br/>entrance'));
	curmap[8][18].n.push(new wallText('cast your<br/>influence<br/>cast your<br/>might'));
	curmap[17][9].w.push(new wallText('hit and run'));
	curmap[21][16].n.push(new wallText('step right up<br/>going down'));
	curmap[29][30].w.push(new wallText('vi<br/>altar of<br/>rebirth'));
}

var LEVEL4 = new Array(
"000000000000000000000000000000000",
"011000000000000011001111110001110",
"010000000111100111100011100011110",
"010000000110100111010010100010010",
"011111111100100101110000201110110",
"020000001001100111110111111110110",
"011000001001012111110110011100110",
"011111111011010110110110000001110",
"000000020010010101110100000111110",
"010000010111011001000101111100000",
"011111100111011002011101010111000",
"011100111100011001011001011101110",
"010000000000010111011001100000110",
"011111111011010101011001000110010",
"002001010111010101010110001111110",
"011101001111010101020010001100000",
"011001002011010001010010111101110",
"010111001011011101110010100001010",
"010200001101000100001100101111110",
"001111011101211110001111111011100",
"001110001000000001100000000011100",
"001111001100000111111111101101110",
"001111011100011111110000121100010",
"001111001000000001101111000121010",
"000111101011111101001010010001110",
"000000201011111101101110010000000",
"000000101010000100100020100011100",
"000001101010110110101111111111100",
"011101011010000111101010000111100",
"010111010011100011101110011100000",
"011000010011110000000000010101100",
"001100110110111211111112110111110",
"001111110110111000010110110000010",
"000000000000000000000000000000000");

function loadLevel4() {
	writemap(4);
	
	curmap[31][30].s.push(new wallText('prepare to<br/>meet your<br/>doom'));

	curmap[31][32].n.push(new stair('Up'));
	curmap[7][9].n.push(new stair('Down'));
}

var LEVEL5 = new Array(
"0000000000000000000000000000000",
"0011111111111000000111001110000",
"0110010100001011110001001010000",
"0100110101101010000111111011110",
"0101001101101011111100010000010",
"0101000001001000000001011111100",
"0110011111001111111111000000110",
"0011110101001011111011101010010",
"0000001100101011111010001011010",
"0110000100111011111000111101010",
"0100001100101011111001100111010",
"0111111011101000100001011011110",
"0100010000000000200001010000000",
"0101011111111100100001111111110",
"0111000000000111110000000000010",
"0100111111000011111210111111010",
"0100111111012111110010111111010",
"0100111111010011110010111111010",
"0100111111110000100011111111010",
"0100111111000100200000111111010",
"0100111111010100111000111111010",
"0100100000011110001000111111110",
"0101100000000010001000000000000",
"0101112110110010001000000000000",
"0101110111011110001111110000000",
"0100000011010000001000010000000",
"0111121101010000001000111110000",
"0000000001011000001000111100000",
"0001101101010001101000111111000",
"0011121121210121111000111001100",
"0001101100010101101000011001100",
"0000000000000000000000000000000");

function loadLevel5() {
	writemap(5);

}

/*
	curmap[1][1].onWalkover = (new cellEvent(false,false,function(data){curmap[1][2].door.manualposition(1,2,80);}));
*/
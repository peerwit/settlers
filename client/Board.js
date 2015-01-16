var svg = d3.select('body').append('svg');
var boardSize = $(document).height();
boardSize = 633;
svg.style({height: boardSize, width: boardSize});

var drawTile = function(x,y,r){
	var hr = r/2;
	var c = Math.sqrt((r*r)-(hr*hr));
	var p1 = ''+x-r+','+y+' ';
	var p2 = ''+(x-hr)+','+(y-c)+' ';
	var p3 = ''+(x+hr)+','+(y-c)+' ';
	var p4 = ''+(x+r)+','+y+' ';
	var p5 = ''+(x+hr)+','+(y+c)+' ';
	var p6 = ''+(x-hr)+','+(y+c)+' ';

	return ''+p1+p2+p3+p4+p5+p6;
}

var drawTileRotate = function(x,y,r){
	var hr = r/2;
	var c = Math.sqrt((r*r)-(hr*hr));
	var p1 = ''+x+','+(y-c)+' ';
	var p2 = ''+(x+c)+','+(y-hr)+' ';
	var p3 = ''+(x+c)+','+(y+hr)+' ';
	var p4 = ''+x+','+(y+c)+' ';
	var p5 = ''+(x-c)+','+(y+hr)+' ';
	var p6 = ''+(x-c)+','+(y-hr)+' ';

	return ''+p1+p2+p3+p4+p5+p6;
}

var MainBoard = drawTile(boardSize/2,boardSize/2,(boardSize/2)*0.95);
svg.append('polygon')
	.attr('points',MainBoard)
	.style({
		fill:'black',
		stroke: 'black',
		"stroke-width": '2px'
	})

var tileArray = [3,4,5,4,3];
var tileCoor = [];

var s = boardSize/5;
var hs = s/2;
var h = Math.sqrt((s*s)-(hs*hs))-10;
var c = boardSize/2;


var p1 = [c-s, c-2*h];
var p2 = [c, c-2*h];
var p3 = [c+s, c-2*h];
var p4 = [c-s-hs, c-h];
var p5 = [c-hs, c-h];
var p6 = [c+hs, c-h];
var p7 = [c+s+hs, c-h];
var p8 = [c-2*s, c];
var p9 = [c-s, c];
var p10 = [c, c];
var p11 = [c+s, c];
var p12 = [c+2*s, c];
var p13 = [c-s-hs, c+h];
var p14 = [c-hs, c+h];
var p15 = [c+hs, c+h];
var p16 = [c+s+hs, c+h];
var p17 = [c-s, c+2*h];
var p18 = [c, c+2*h];
var p19 = [c+s, c+2*h];

var tiles = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19];

for(var i = 0; i<tiles.length; i++){
	var x = tiles[i][0];
	var y = tiles[i][1];
	var r = s;
	var points = drawTileRotate(x,y,(r/2)+5);

	var color = _.shuffle(['green','red','yellow','blue','orange'])[0];
	console.log(color);

	svg.append('polygon')
	.attr('points',points)
	.style({
		fill:color,
		stroke: 'white',
		"stroke-width": '2px'
	})
}
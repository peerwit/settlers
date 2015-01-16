var svg = d3.select('body').append('svg');
var boardSize = $(document).height();
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
	var p4 = ''+x+','+(y+hr)+' ';
	var p5 = ''+(x-c)+','+(y+hr)+' ';
	var p6 = ''+(x-c)+','+(y-hr)+' ';

	return ''+p1+p2+p3+p4+p5+p6;
}

var MainBoard = drawTile(boardSize/2,boardSize/2,boardSize/2);
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
var h = Math.sqrt((s*s)-(hs*hs));
var c = boardSize/2;

for(var i = 0; i<tileArray.length; i++){
	for(var j = 0; j<tileArray[i]; j++){
		
	}
}

var p1 = [c-s, c-2*h]
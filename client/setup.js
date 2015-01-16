// Setup logic

function hexWidths(array) {
	return 
}

// Simple Graphs implementation by Pranay 
	// v 0.0.1 (01/13/15)

// var assert = require('assert');

//Adj List, by row
var 1r = [[3,4],[4,5],[5,6]]
var 2r = [[0,7],[0,1,8],[1,2,9],[2,10]]; //2, 3, 3, 2
var 3r = [[11,12,3],[12,13,4],[13,14,5],[14,15,6]];//
var 4r = [[7,16],[7,8,17],[8,9,18],[9,10,19],[10,20]];//2,3,3,3,2
var 5r = [[21,22,11],[22,23,12],[23,24,13],[24,25,14],[25,26,15]];//3,3,3,3,3
var 6r = [[16,27],[16,17,28],[17,18,29],[18,19,30],[19,20,31],[20,32]];//2,3,3,3,3,2
var 7r = [[21,33],[33,34,22],[34,35,23],[35,36,24],[36,37,25],[26,37]];//2,3,3,3,3,2
var 8r = [[27,28,38],[28,29,39],[29,30,40],[30,31,41],[31,32,42]]; //3,3,3,3,3
var 9r = [[33,43],[43,44,34],[44,45,35],[45,46,36],[37,46]];//2,3,3,3,2
var 10r = [[38,39,47],[39,40,48],[40,41,49],[41,42,50]]; //3,3,3,3
var 11r = [[51,43],[51,52,44],[45,52,53],[53,46]];//2,3,3,2
var 12r = [[47,48],[48,49],[49,50]];

var Graph = function(adjacencyList, num) {
	this.al = adjacencyList || this.makeList(num || 5);
}

Graph.prototype.makeList = function(num) {
	var al = [];
	for (var i = 0; i < num; i++) {
		al[i] = [];
		for (var j = 0; j < num; j++) {
			Math.round(Math.random())?al[i].push(j):null;
		}
	}
	return al;
}

Graph.prototype.invertAdjacencyList = function(wantNew) {
	var al = this.al;
	var c = 0;
	var a = [];
	for (var i = 0; i < this.al.length; i++) {
		var edges = this.al[i];
		a[i] = a[i] || [];
		for (var j = 0; j < edges.length; j++) {
			c++;
			a[edges[j]] = (a[edges[j]] || []).concat([i]);
		}
	}
	this.al=wantNew?this.al:a;
	return a;
}

Graph.prototype.BFS = function(adjacencyList, node, options, cb){
	if (options && typeof options === 'object') {
		var depth = options.depth;
		var stopDepth = options.stopDepth;
	}
	node = node || 0;
	var al = adjacencyList || this.al;
/* --------- */		depth ? (al[node].depth = 0): null;
	var q = [al[node]];
	var expHash = {};
	expHash[node] = true;
	expHash.length = 1;
	cb?cb(node):null;
	while (q.length) {
		rec();
	}
	return expHash;
	function rec() {
		var edges = q.shift();
		edges.forEach(function(e, i, a){
			console.log(e, i, a)
			if (!(e in expHash)) {
				expHash[e] = true;
				expHash['length'] += 1;
				cb?cb(e):null;
				q.push(al[e]);
			}
		});
	}
}

Graph.prototype.isConnected = function(node, options){
	return this.BFS(null, node, options).length === this.al.length
}

Graph.prototype.d3ify = function(){
	var al = this.al;
	al.map(function(e,i,a) {
		return {name: i, children: e, somePop: {} }
	})
	return al;
}

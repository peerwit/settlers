// Setup logic

function hexWidths(array) {
	return 
}

// Simple Graphs implementation by Pranay 
	// v 0.0.1 (01/13/15)

// var assert = require('assert');

var adLi = [[3,4],[4,5],[5,6],[0,7]]

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
		edges.forEach(function(e){
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

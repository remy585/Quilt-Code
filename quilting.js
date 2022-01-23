window.onload = domItUp;

// populates the quilt with a random arrangement of squares
function domItUp() {
	var c = document.getElementById("myCanvas");
	var context = c.getContext("2d");
	
	var fab1 = document.getElementById("1");
	var pat1 = context.createPattern(fab1, "repeat");
	var fab2 = document.getElementById("2");
	var pat2 = context.createPattern(fab2, "repeat");
	var fab3 = document.getElementById("3");
	var pat3 = context.createPattern(fab3, "repeat");
	var fab4 = document.getElementById("4");
	var pat4 = context.createPattern(fab4, "repeat");
	var fab5 = document.getElementById("5");
	var pat5 = context.createPattern(fab5, "repeat");
	var fab6 = document.getElementById("6");
	var pat6 = context.createPattern(fab6, "repeat");
	var fab7 = document.getElementById("7");
	var pat7 = context.createPattern(fab7, "repeat");
	var fab8 = document.getElementById("8");
	var pat8 = context.createPattern(fab8, "repeat");
	/*var fab9 = document.getElementById("9");
	var pat9 = context.createPattern(fab9, "repeat");
	var fab10 = document.getElementById("10");
	var pat10 = context.createPattern(fab10, "repeat");
	var fab11 = document.getElementById("11");
	var pat11 = context.createPattern(fab11, "repeat");
	var fab12 = document.getElementById("12");
	var pat12 = context.createPattern(fab12, "repeat");
	var fab13 = document.getElementById("13");
	var pat13 = context.createPattern(fab13, "repeat");
	var fab14 = document.getElementById("14");
	var pat14 = context.createPattern(fab14, "repeat");*/
	
	var patterns = [pat1, pat2, pat3, pat4, pat5, pat6, pat7, pat8]; //, pat9, pat10, pat11, pat12];//, pat13, pat14];
	
	var pairings = new Array(24);
	for (var i = 0; i < pairings.length; i++) {
		pairings[i] = generatePairing(patterns.length);
	}
	
	
	drawBlock(0,0, [pairings[0], pairings[1], pairings[2], pairings[3]], patterns,c);
	drawBlock(0,260,[pairings[4], pairings[5], pairings[6], pairings[7]], patterns,c);
	drawBlock(0,520,[pairings[8], pairings[9], pairings[10], pairings[11]], patterns,c);
	
	drawBlock(260,0, [pairings[12], pairings[13], pairings[14], pairings[15]], patterns,c);
	drawBlock(260,260,[pairings[16], pairings[17], pairings[18], pairings[19]], patterns,c);
	drawBlock(260,520,[pairings[20], pairings[21], pairings[22], pairings[23]], patterns,c);
	
	drawBlock(520,0, [pairings[23], pairings[22], pairings[21], pairings[20]], patterns,c);
	drawBlock(520,260,[pairings[19], pairings[18], pairings[17], pairings[16]], patterns,c);
	drawBlock(520,520,[pairings[15], pairings[14], pairings[13], pairings[12]], patterns,c);
	
	drawBlock(780,0, [pairings[11], pairings[10], pairings[9], pairings[8]], patterns,c);
	drawBlock(780,260,[pairings[7], pairings[6], pairings[5], pairings[4]], patterns,c);
	drawBlock(780,520,[pairings[3], pairings[2], pairings[1], pairings[0]], patterns,c);
	
}

function drawBlock(x,y, pairs, pats,c) {
	// hst1
	drawURTriangle(x + 50, y + 130,pats[pairs[0][0]],c);
	drawDLTriangle(x + 130, y + 50,pats[pairs[0][1]],c);
	
	//hst2
	drawDRTriangle(x + 130, y + 50,pats[pairs[1][0]],c);
	drawULTriangle(x + 210,y + 130,pats[pairs[1][1]],c);
	
	//hst3
	drawDRTriangle(x + 50,y + 130,pats[pairs[2][1]],c);
	drawULTriangle(x + 130,y + 210,pats[pairs[2][0]],c);
	
	//hst4
	drawURTriangle(x + 130,y + 210,pats[pairs[3][1]],c);
	drawDLTriangle(x + 210,y + 130,pats[pairs[3][0]],c);
	
	var quads = generateQuad(pats.length);
	drawLogCabin(x,y, pats[quads[0]], pats[quads[1]], pats[quads[2]], pats[quads[3]], c);
}

function generatePairing(maxIndex) {
	var p1 = Math.floor(Math.random() * maxIndex);
	var p2 = Math.floor(Math.random() * maxIndex);
	while (p1 == p2) {
		p2 = Math.floor(Math.random() * maxIndex);
	}
	
	return [p1, p2];
}

function generateQuad(maxIndex) {
	var q1 = Math.floor(Math.random() * maxIndex);
	var q2 = Math.floor(Math.random() * maxIndex);
	while (q1 == q2) {
		q2 = Math.floor(Math.random() * maxIndex);
	}
	
	var q3 = Math.floor(Math.random() * maxIndex);
	while (q3 == q1 || q3 == q2) {
		q3 = Math.floor(Math.random() * maxIndex);
	}
	
	var q4 = Math.floor(Math.random() * maxIndex);
	while (q4 == q3 || q4 == q2 || q4 == q1) {
		q4 = Math.floor(Math.random() * maxIndex);
	}
	
	return [q1, q2, q3, q4];
}

function drawLogCabin(x,y, pat1, pat2, pat3, pat4, canvas) {
	  var ctx = canvas.getContext("2d");
	  ctx.beginPath();
	  ctx.rect(x + 50, y, 160, 50);
	  ctx.lineWidth = 1;
		ctx.strokeStyle = '#666666';
		ctx.stroke();
	  ctx.fillStyle = pat1;
	  ctx.fill();
	  
	  ctx.beginPath();
	  ctx.rect(x + 210, y, 50, 210);
	  ctx.lineWidth = 1;
	ctx.strokeStyle = '#666666';
	ctx.stroke();
	  ctx.fillStyle = pat2;
	  ctx.fill();
	  
	  ctx.beginPath();
	  ctx.rect(x + 50, y + 210, 210, 50);
	  ctx.lineWidth = 1;
	ctx.strokeStyle = '#666666';
	ctx.stroke();
	  ctx.fillStyle = pat3;
	  ctx.fill();
	  
	  ctx.beginPath();
	  ctx.rect(x, y, 50, 260);
	  ctx.lineWidth = 1;
	ctx.strokeStyle = '#666666';
	ctx.stroke();
	  ctx.fillStyle = pat4;
	  ctx.fill();
}

// (x,y) is the right angle corner

function drawURTriangle(x, y, pat, canvas) {
	var context = canvas.getContext("2d");

	// the triangle
	context.beginPath();
	context.moveTo(x, y - 80);
	context.lineTo(x, y);
	context.lineTo(x + 80, y);
	context.closePath();

	// the outline
	context.lineWidth = 1;
	context.strokeStyle = '#666666';
	context.stroke();

	// the fill color
	context.fillStyle = pat;
	context.fill();
}

function drawULTriangle(x, y, pat, canvas) {
	var context = canvas.getContext("2d");

	// the triangle
	context.beginPath();
	context.moveTo(x, y - 80);
	context.lineTo(x, y);
	context.lineTo(x - 80, y);
	context.closePath();

	// the outline
	context.lineWidth = 1;
	context.strokeStyle = '#666666';
	context.stroke();

	// the fill color
	context.fillStyle = pat;
	context.fill();
}

function drawDRTriangle(x, y, pat, canvas) {
	var context = canvas.getContext("2d");

	// the triangle
	context.beginPath();
	context.moveTo(x, y + 80);
	context.lineTo(x, y);
	context.lineTo(x + 80, y);
	context.closePath();

	// the outline
	context.lineWidth = 1;
	context.strokeStyle = '#666666';
	context.stroke();

	// the fill color
	context.fillStyle = pat;
	context.fill();
}

function drawDLTriangle(x, y, pat, canvas) {
	var context = canvas.getContext("2d");

	// the triangle
	context.beginPath();
	context.moveTo(x - 80, y);
	context.lineTo(x, y);
	context.lineTo(x, y + 80);
	context.closePath();

	// the outline
	context.lineWidth = 1;
	context.strokeStyle = '#666666';
	context.stroke();

	// the fill color
	context.fillStyle = pat;
	context.fill();
}

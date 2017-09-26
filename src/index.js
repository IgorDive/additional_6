module.exports = function zeros(expression) {
	var arrExsp = expression.split("*");
	var arrExspWhole = [];
	var lastIndex = 0;
	var value;
	var valueZero;
	var l = 0;

	arrExsp.forEach( function(elem, i) {
		if (arrExsp[i].length - String(parseInt(arrExsp[i])).length == 1) {
	  		for (var j = lastIndex; j < parseInt(arrExsp[i]) + lastIndex; j++) {
	  			arrExspWhole[j] = j - lastIndex + 1;
	  		}
	  		lastIndex += parseInt(arrExsp[i]); 
	  	}
	  	if (arrExsp[i].length - String(parseInt(arrExsp[i])).length == 2) {
	  		if (parseInt(arrExsp[i]) % 2 == 0) {
	  			for (var k = lastIndex; k < parseInt(arrExsp[i])/2 + lastIndex; k++) {
		  			arrExspWhole[k] = 2*(k - lastIndex + 1);
		  		}
		  		lastIndex += parseInt(arrExsp[i])/2;
	  		}
	  		if (parseInt(arrExsp[i]) % 2 != 0) {
		  		for (var k = lastIndex; k < (parseInt(arrExsp[i]) + 1)/2 + lastIndex; k++) {
		  			arrExspWhole[k] = 2*(k - lastIndex) + 1;
		  		}
		  		lastIndex += (parseInt(arrExsp[i]) + 1)/2;
		  	}
	  	}
	});
	arrExspWhole.sort( function(a, b) { return a - b; } );
	value = arrExspWhole.reduce( function(prevInx, elem, i) {
		if (prevInx * elem > 4503599627370495) prevInx = String(prevInx).slice(3);
		return prevInx*elem;
	});
	valueZero = String(value).split("");
	
	while (true) {
		if (valueZero[valueZero.length - l - 1] != 0) break;
		l +=1;
	}
	
	return l;
}
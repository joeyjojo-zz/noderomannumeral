exports.generate = function(n){
	/*
	* Returns a roman number based on the number, n
	* Assumes n is a integer
	*/
	var retVal = [];
	var nStr = n.toString();
	// put them in unit/tens/hundreds order
	var nArr = nStr.split().reverse();
	
	for (var i=0;i<nArr.length;i++){
		retVal.push('I');
	}	


	
	return retVal.join('');
};
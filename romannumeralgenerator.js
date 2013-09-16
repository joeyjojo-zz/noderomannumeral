UNIT_MAP = {
	1: 'I',
	2: 'II',
	3: 'III',
	4: 'IV',
	5: 'V',
	6: 'VI',
	7: 'VII',
	8: 'VIII',
	9: 'IX'
};

TEN_MAP = {
	1: 'X',
	2: 'XX',
	3: 'XXX',
	4: 'XL',
	5: 'L',
	6: 'LX',
	7: 'LXX',
	8: 'LXXX',
	9: 'XC'
};

HUNDREDS_MAP = {
	1: 'C',
	2: 'CC',
	3: 'CCC',
	4: 'CD',
	5: 'D',
	6: 'DC',
	7: 'DCC',
	8: 'DCCC',
	9: 'CM'
};

THOUSANDS_MAP = {
	1: 'M',
	2: 'MM',
	3: 'MMM'
};

INDEX_MAP = {
	0: UNIT_MAP,
	1: TEN_MAP,
	2: HUNDREDS_MAP,
	3: THOUSANDS_MAP,
}

exports.generate = function(n){
	/*
	* Returns a roman number based on the number, n
	* Assumes n is a integer
	*/
	if (n > 3999){ throw new Error('Number is too large')};
	if (n < 1){ throw new Error('Number is too small')};

	var retVal = [];
	var nStr = n.toString();
	// put them in unit/tens/hundreds order
	var nArr = nStr.split('').reverse();
	

	for (var i=0;i<nArr.length;i++){
		retVal.push(INDEX_MAP[i][parseInt(nArr[i])]);
	}	

	retVal.reverse();
	
	return retVal.join('');
};


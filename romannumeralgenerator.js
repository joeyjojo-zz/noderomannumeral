UNIT_MAP = [
	'',
	'I',
	'II',
	'III',
	'IV',
	'V',
	'VI',
	'VII',
	'VIII',
	'IX'
];

TEN_MAP = [
	'',
	'X',
	'XX',
	'XXX',
	'XL',
	'L',
	'LX',
	'LXX',
	'LXXX',
	'XC'
];

HUNDREDS_MAP = [
	'',
	'C',
	'CC',
	'CCC',
	'CD',
	'D',
	'DC',
	'DCC',
	'DCCC',
	'CM'
];

THOUSANDS_MAP = [
	'',
	'M',
	'MM',
	'MMM'
];

INDEX_MAP = [
	UNIT_MAP,
	TEN_MAP,
	HUNDREDS_MAP,
	THOUSANDS_MAP,
];

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


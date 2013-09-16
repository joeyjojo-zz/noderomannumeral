/*
* Requires nodeunit
*/
var romannumgen = require('./romannumeralgenerator');

exports.testlimits = function(test){
	test.throws(function(){romannumgen.generate(4000)}, Error, 'Number to large');
	test.throws(function(){romannumgen.generate(0)}, Error, 'Number to small');
	test.done();
};

exports.testNumbers = function(test){
	test.strictEqual(romannumgen.generate(1589), 'MDLXXXIX');
	test.strictEqual(romannumgen.generate(1974), 'MCMLXXIV');
	test.strictEqual(romannumgen.generate(1999), 'MCMXCIX');
	test.strictEqual(romannumgen.generate(3999), 'MMMCMXCIX');
	test.strictEqual(romannumgen.generate(1), 'I');
	test.strictEqual(romannumgen.generate(5), 'V');
	test.strictEqual(romannumgen.generate(10), 'X');
	test.strictEqual(romannumgen.generate(20), 'XX');
	test.done();
};
/*
* Requires nodeunit
*/
var romannumgen = require('./romannumeralgenerator');

exports.testlimits = function(test){
	test.throws(romannumgen.generate(4000), 'Number to large');
	test.throws(romannumgen.generate(0), 'Number to small');
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
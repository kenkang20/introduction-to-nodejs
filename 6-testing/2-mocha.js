var should = require('should');
var fun = require('./mathfun');

describe('MathFun', function() {

    describe('when used synchronously', function() {
        it('should double even number correctly', function() {
            fun.evenDoublerSync(2).should.equal(4);
        })

        //skip or only
        it.only('should throw on odd numbers', function(done) {
            (function() {fun.evenDoublerSync(3)}).should.throw(/Odd2/);
            done();
        });
    });

    describe('when used asyncronously', function() {
        it('should double even numbers correctly', function(done) {
            fun.evenDoubler(2, function(err, results) {
                should.not.exist(err);
                results.should.equal(4);
                done();
            });
        });

        it('should return error on odd numbers', function(done) {
            fun.evenDoubler(3, function(err, results) {
                should.exist(err);
                should.not.exist(results);
                done();
            });
        });
    });
});
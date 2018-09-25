var mathfun = require('./mathfun');

var processResults = function (err, results, time) {
    if (err) {
        console.log('ERROR:' + err.message);
    } else {
        console.log('The results are: ' + results + ' (' + time + ') ms');
    }
};

for (var i = 0; i < 10; i++) {
    console.log('Calling "eventDoubler" with paramter "' + i + '"');
    mathfun.evenDoulber(i, processResults);
}

console.log('-------');
console.log('The "foo" variable: ' + mathfun.foo);
console.log('The "maxtime" variable: ' + mathfun.maxTime);
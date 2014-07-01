var tape = require('tape');
var parser = require('tap-parser');
var colorize = require('tap-colorize');

module.exports = function (opts, fn) {
    if (typeof opts === 'function') {
        fn = opts;
        opts = {};
    }
    if (!opts) opts = {};
    return function (args, cb) {
        var test = tape.createHarness();
        test(function (t) { fn(args, t) });
        var stream = test.createStream();
        stream.pipe(parser(function (results) { cb(results.ok) }));
        return stream.pipe(colorize(opts));
    };
};

var tape = require('tape');
var parser = require('tap-parser');
var colorize = require('tap-colorize');

module.exports = function (opts, fn) {
    if (typeof opts === 'function') {
        fn = opts;
        opts = {};
    }
    if (!opts) opts = {};
    
    var colors = null, reset = null;
    
    if (opts.modeReset === true) {
        // wow hacky
        var prevLog = console.log;
        var prevError = console.error;
        reset = function () {
            console.log = prevLog;
            console.error = prevError;
        };
        
        console.log = function () {
            process.stdout.write('\x1b[0m');
            var res = prevLog.apply(this, arguments);
            process.stdout.write(colors && colors.mode || '');
            return res;
        };
        console.error = function () {
            process.stderr.write('\x1b[0m');
            var res = prevError.apply(this, arguments);
            process.stderr.write(colors && colors.mode || '');
            return res;
        };
    }
     
    return function (args, cb) {
        var test = tape.createHarness();
        test(function (t) { fn(args, t) });
        var stream = test.createStream();
        colors = colorize(opts);
        if (reset) stream.once('end', function () { reset() });
        stream.pipe(parser(function (results) { cb(results.ok) }));
        return stream.pipe(colors);
    };
};

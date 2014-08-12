var verify = require('../../');

exports.verify = verify({ modeReset: true }, function (args, t) {
    t.plan(1);
    t.equal(args[0], '555');
});

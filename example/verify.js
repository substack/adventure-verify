var verify = require('adventure-verify');

exports.verify = verify(function (args, t) {
    t.plan(2);
    t.ok(true, 'beep boop');
    t.equal(1+1, 2);
});

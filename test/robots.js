var test = require('tape');

test('robots', function (t) {
    t.plan(2);
    var p = require('./robots/beep_boop.js');
    p.verify(['555'], function (ok) {
        t.ok(ok);
    });
    p.verify(['556'], function (ok) {
        t.notOk(ok);
    });
});

test('rset', function (t) {
    t.plan(2);
    var p = require('./robots/rset.js');
    p.verify(['555'], function (ok) {
        t.ok(ok);
    });
    p.verify(['556'], function (ok) {
        t.notOk(ok);
    });
});

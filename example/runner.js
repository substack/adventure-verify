var adventure = require('adventure');
var adv = adventure('robots');

adv.add('beep boop', function () {
    return require('./verify.js');
});

adv.execute(process.argv.slice(2));

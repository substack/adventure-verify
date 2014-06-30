var adventure = require('adventure');
var adv = adventure('robots');

adv.add('beep boop', function () {
    return require('./beep_boop.js');
});

adv.execute(process.argv.slice(2));

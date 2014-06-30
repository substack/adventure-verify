# adventure-verify

write [adventure](https://npmjs.org/package/adventure)
verify functions using [tape](https://npmjs.org/package/tape)
with output from [faucet](https://npmjs.org/package/faucet)

# example

In your excercise code, you can do:

``` js
var verify = require('adventure-verify');

exports.show = 'pass in the argument 555'

exports.verify = verify(function (args, t) {
    t.plan(1);
    t.equal(args[0], '555');
});
```

And then run plug your beep_boop.js excercise into your
[adventure](https://npmjs.org/package/adventure) runner:

```
var adventure = require('adventure');
var adv = adventure('robots');

adv.add('beep boop', function () {
    return require('./beep_boop.js');
});

adv.execute(process.argv.slice(2));
```

# methods

``` js
var verify = require('adventure-verify')
```

## var fn = verify(function (args, t) {})

You should pass in a function that will get `args`, the command-line arguments
supplied after the `xxx-adventure verify ...` command on the command line and
`t`, a [tape](https://npmjs.org/package/tape) instance.

The function `fn(cb)` returned by `verify()` fits into the signature expected by
[adventure](https://npmjs.org/package/adventure). `cb(ok)` will be called with a
boolean `ok` based on parsing the tap output from tape for any failures.

# install

With [npm](https://npmjs.org) do:

```
npm install adventure-verify
```

# license

MIT

# adventure-verify

write [adventure](https://npmjs.org/package/adventure)
verify functions using [tape](https://npmjs.org/package/tape)
with [colored output](https://npmjs.org/package/tap-colorize)
to better distinguish user output from test output

# example

In your excercise code, you can do:

``` js
var verify = require('adventure-verify');

exports.problem = 'pass in the argument 555'

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

## var fn = verify(opts={}, function (args, t) {})

You should pass in a function that will get `args`, the command-line arguments
supplied after the `xxx-adventure verify ...` command on the command line and
`t`, a [tape](https://npmjs.org/package/tape) instance.

The function `fn(cb)` returned by `verify()` fits into the signature expected by
[adventure](https://npmjs.org/package/adventure). `cb(ok)` will be called with a
boolean `ok` based on parsing the tap output from tape for any failures.

The options `opts` will be passed to
[tap-colorize](https://npmjs.org/package/tap-colorize).
These options work:

* `opts.pass` - color of passing `/^ok/` lines
* `opts.fail` - color of failing `/^not ok/` lines
* `opts.info` - color of other tap-specific lines

You can pass in a named color such as `'green'`, an array rgb color such as
`[40,240,100]`, a hex color such as `''#f00d55'`, and you can include a display
modifier such as `'bright'`, `'dim'` or `'reverse'`.

You can optionally set `opts.modeReset`, which hacks the colors back temporarily
for `console.log()` and `console.error()` so that user debugging statements are
printed without colors.

# install

With [npm](https://npmjs.org) do:

```
npm install adventure-verify
```

# license

MIT

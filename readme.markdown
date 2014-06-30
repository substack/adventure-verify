# adventure-verify

write [adventure](https://npmjs.org/package/adventure)
verify functions using [tape](https://npmjs.org/package/tape)
with output from [faucet](https://npmjs.org/package/faucet)

# example

``` js
var verify = require('adventure-verify');

exports.verify = verify(function (args, t) {
    t.plan(2);
    t.ok(true, 'beep boop');
    t.equal(1+1, 2);
});
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

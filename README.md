# `remark-rewrite-headers`

[remark][1] plugin to change header levels (`<h1>`s to `<h2>`s, `<h2>`s to `<h3>`s, etc.)

## Installation

    npm install remark-rewrite-headers

## Usage

```js
var remark = require('remark');
var html = require('remark-html');
var rewriteHeaders = require('remark-rewrite-headers');

var processor = remark().use(rewriteHeaders).use(html);

// No output
processor.process([
    '# Some Markdown',
    'The above will become an `<h2>` althouth normally it would be an `<h1>`.',
	'## Some more Markdown',
	'Ditto with the above - this one\'ll become an `<h3>`.'
].join('\n'));
```

## License

LGPL 3.0+

## Author

Alex Jordan <alex@strugee.net>

 [1]: https://github.com/wooorm/remark

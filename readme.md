# unescape-alltypes-html

This repo is created to convert all types of escaped html into the original one, including Hex/Dec/Entity.

See [sidehtmlentity](http://www.howtocreate.co.uk/sidehtmlentity.html) for details.

[unescape-html](https://github.com/ForbesLindesay/unescape-html) is just a reverse of [escape-html](https://github.com/component/escape-html), and it fails to convert some types.

# Installation

``` sh
$ yarn add unescape-alltypes-html

# or if you prefer npm
$ npm install unescape-alltypes-html
```

## Usage

``` javascript
import unescape from 'unescape-alltypes-html'

unescape('&#38; &#x26; &amp;') //'& & &'
```

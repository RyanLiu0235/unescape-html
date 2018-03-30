const assert = require('assert')
const unescape = require('../')

describe('unescape-alltypes-html', () => {
  it('should convert &#34;|&#x22;|&quot; into "', () => {
    assert(unescape('&#34; &#x22; &quot;') === '" " "')
  })
  it('should convert &#38;|&#x26;|&amp; into &', () => {
    assert(unescape('&#38; &#x26; &amp;') === '& & &')
  })
  it('should convert &#39;|&#x27; into \'', () => {
    assert(unescape('&#39; &#x27;') === '\' \'')
  })
  it('should convert &#47;|&#x2f; into /', () => {
    assert(unescape('&#47; &#x2f;') === '/ /')
  })
  it('should convert &#58;|&#x3a; into :', () => {
    assert(unescape('&#58; &#x3a;' === ': :'))
  })
  it('should convert &#60;|&#x3c;|&lt; into <', () => {
    assert(unescape('&#60; &#x3c; &lt;') === '< < <')
  })
  it('should convert &#62;|&#x3e;|&gt; into >', () => {
    assert(unescape('&#62; &#x3e; &gt;') === '> > >')
  })
})

/**
 * this version converts all the Dec/Hex/Entity type
 * see all the types:
 * http://www.howtocreate.co.uk/sidehtmlentity.html
 *
 * @param  {String} raw
 * @return {String}
 */
module.exports = function(raw) {
  return String(raw)
    .replace(/&#34;|&#x22;|&quot;/gi, '"')
    .replace(/&#38;|&#x26;|&amp;/gi, '&')
    .replace(/&#39;|&#x27;/gi, '\'')
    .replace(/&#58;|&#x3a;/gi, ':')
    .replace(/&#60;|&#x3c;|&lt;/gi, '<')
    .replace(/&#62;|&#x3e;|&gt;/gi, '>')
}

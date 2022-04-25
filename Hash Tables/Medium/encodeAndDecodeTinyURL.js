// inyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk. Design a class to encode a URL and decode a tiny URL.
// There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.
// Implement the Solution class:
// Solution() Initializes the object of the system.
// String encode(String longUrl) Returns a tiny URL for the given longUrl.
// String decode(String shortUrl) Returns the original long URL for the given shortUrl. It is guaranteed that the given shortUrl was encoded by the same object.

// Example 1:
// Input: url = "https://leetcode.com/problems/design-tinyurl"
// Output: "https://leetcode.com/problems/design-tinyurl"
// Explanation:
// Solution obj = new Solution();
// string tiny = obj.encode(url); // returns the encoded tiny url.
// string ans = obj.decode(tiny); // returns the original url after deconding it.

const urlMap = {};

var encode = function (longUrl) {
  const alphaNumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let shortUrl = '';
  for (let i = 0; i < 6; i++) {
    const randVal = Math.floor(Math.random() * alphaNumeric.length);
    shortUrl += alphaNumeric[randVal];
  }
  urlMap[shortUrl] = longUrl;
  return 'http://tinyurl.com/' + shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  shortUrl = shortUrl.replace('http://tinyurl.com/', '');
  return urlMap[shortUrl];
};

encode('https://leetcode.com/problems/design-tinyurl');
console.log(urlMap);

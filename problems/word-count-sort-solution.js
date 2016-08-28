/*
 Given the following sentence, make an object
 containing the words and the corresponding count
 for each word. The first result should be in ascending
 order in terms of count.
*/
const sentence = 'NASA engineer Ernie Wright looks on as the first six flight-ready primary mirror segments for the James Webb Space Telescope are prepped to begin final cryogenic testing at the Marshall Space Flight Center. Intended to serve as a replacement for the Hubble Space Telescope and the Spitzer Space Telescope, the James Webb Space Telescope is currently under construction and scheduled to launch in October 2018. It is expected to enable a broad range of investigations across the fields of astronomy and cosmology.\n Another line, a lot more more more words.';

const words = sentence.replace(/[\W\d\t\r\n]/g, ' ').split(' ');
const allCounts = {};

words.filter(w => w).forEach(w => {
  w in allCounts ? allCounts[w] += 1 : allCounts[w] = 1;
});

const countList = [];
Object.keys(allCounts).forEach(k => {
  countList.push({word: k, count: allCounts[k]});
});
countList.sort((a, b) => (a.count < b.count ? -1 : a.count > b.count ? 1 : 0));
var wordCount = {};
countList.forEach(w => {
  wordCount[w.word] = w.count;
});

console.log(wordCount);

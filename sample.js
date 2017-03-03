const { from, filter, map, each, reduce } = require('./lib');
const { log } = console;
const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const vowels = ['a', 'e', 'i', 'o', 'u'];

const isVowel = l => vowels.includes(l);
const isConsonant = l => !isVowel(l);
const uppercase = l => l.toUpperCase();
const concat = (a, b) => a.concat(b);

from(alphabet) (map, uppercase) (reduce(''), concat) (log);

from(alphabet) (map, uppercase) (log);

from(alphabet) (filter, isVowel) (log);

from(alphabet) (filter, isConsonant) (map, uppercase) (log);

var a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var b = ['A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z' ];
var str = "q'sgh ao asfs";
var ogstr = "";
var letters = str.split("");
var rot = 52;
if (rot % 26 === 0) {
    console.log(str);
    process.exit(1);
}
for (var i = 0; i < letters.length; i++) {
    var t = a.indexOf(letters[i]);
    var d = a;
    if (t < 0) {
        t = b.indexOf(letters[i]);
        d = b;
    }
    if (t < 0) {
        ogstr = ogstr + letters[i];
        continue;
    }
    t -= rot;
    while (t < 0) {
        t = 26+t;
    }
    if (t > 25) {
        t = t % 26;
    }
    ogstr = ogstr + d[t];
}
console.log(ogstr);
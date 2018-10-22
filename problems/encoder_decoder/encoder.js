// encodes a string to be rotated
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
var str = "c'est ma mere";
var newstr = "";
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
        newstr = newstr + letters[i];
        continue;
    }
    t += rot;
    if (t > 25) {
        t = t % 26;
    }
    while (t < 0) {
        t = 26+t;
    }
    newstr = newstr + d[t];
}
console.log(newstr);
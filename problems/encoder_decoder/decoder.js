// decodes a rotated string
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
var str = "Gur Mra bs Clguba, ol Gvz Crgref\n" + "\n" + "Ornhgvshy vf orggre guna htyl.\n" + "Rkcyvpvg vf orggre guna vzcyvpvg.\n" + "Fvzcyr vf orggre guna pbzcyrk.\n" + "Pbzcyrk vf orggre guna pbzcyvpngrq.\n" + "Syng vf orggre guna arfgrq.\n" + "Fcnefr vf orggre guna qrafr.\n" + "Ernqnovyvgl pbhagf.\n" + "Fcrpvny pnfrf nera'g fcrpvny rabhtu gb oernx gur ehyrf.\n" + "Nygubhtu cenpgvpnyvgl orngf chevgl.\n" + "Reebef fubhyq arire cnff fvyragyl.\n" + "Hayrff rkcyvpvgyl fvyraprq.\n" + "Va gur snpr bs nzovthvgl, ershfr gur grzcgngvba gb thrff.\n" + "Gurer fubhyq or bar-- naq cersrenoyl bayl bar --boivbhf jnl gb qb vg.\n" + "Nygubhtu gung jnl znl abg or boivbhf ng svefg hayrff lbh'er Qhgpu.\n" + "Abj vf orggre guna arire.\n" + "Nygubhtu arire vf bsgra orggre guna *evtug* abj.\n" + "Vs gur vzcyrzragngvba vf uneq gb rkcynva, vg'f n onq vqrn.\n" + "Vs gur vzcyrzragngvba vf rnfl gb rkcynva, vg znl or n tbbq vqrn.\n" + "Anzrfcnprf ner bar ubaxvat terng vqrn -- yrg'f qb zber bs gubfr!\n";
var ogstr = "";
var letters = str.split("");
var rot = 13;
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
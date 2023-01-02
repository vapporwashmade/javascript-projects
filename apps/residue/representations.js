var moduli = [];
var rns = {
  moduli: [],
  mixed: [],
  overflow: 0
};

document.getElementById('addmod').addEventListener('keypress', function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById('addbtn').click();
  }
})

function addModulus(modulus) {
  moduli.push(Number(modulus));
  document.getElementById('addmod').value = '';
}

function createRNS() {
  rns.moduli = moduli.sort(function(a, b){return a-b});
  rns.mixed = [1];
  var curr = 1;
  for (var i = 0; i < moduli.length - 1; i++) {
    curr *= moduli[i];
    rns.mixed.push(curr);
  }
  rns.overflow = curr * moduli[moduli.length - 1];
  rns.moduli.reverse();
  rns.mixed.reverse();
  displayModuli();
  moduli = [];
}

function getRNSRep(num) {
  console.log(num);
  var rep = [];
  for (var i = 0; i < rns.moduli.length; i++) {
    rep.push(num % rns.moduli[i]);
  }
  return rep;
}

function getMRRRep(num) {
  console.log(num);
  var rep = [];
  if (num / rns.overflow >= 1) {
    document.getElementById('overflow').innerText = "Yes";
    num %= rns.overflow;
  } else {
    document.getElementById('overflow').innerText = "No";
  }
  for (var i = 0; i < rns.mixed.length; i++) {
    rep.push(Math.floor(num / rns.mixed[i]));
    num %= rns.mixed[i];
    console.log(rep);
  }
  return rep;
}

function add(num1, num2) {

}

function displayModuli() {
  var modStr = moduli.join(", ");
  document.getElementById("moduli").innerText = "Moduli: " + modStr;
}

function displayRNSRep() {
  document.getElementById('rnsrep').innerText = getRNSRep(Number(document.getElementById('getrep').value));
}

function displayMRRRep() {
  document.getElementById('mrrrep').innerText = getMRRRep(Number(document.getElementById('getrep').value));
}

function displayReps() {
  displayRNSRep();
  displayMRRRep();
}

function addModulusHandler() {
  var n = Number(document.getElementById('addmod').value);
  if (n > 0) {
    addModulus(n);
  }
}

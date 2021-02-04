// eslint-disable-next-line no-unused-vars
function createTable(n) {
  document.getElementById('grid').textContent = '';
  for (let i = 0; i < n; i++) {
    var tr = document.createElement('tr');
    tr.className = 'trow';
    for (let j = 0; j < n; j ++) {
      var td = document.createElement('td');
      td.className = 'tsquare dead';
      td.id = i + ',' + j;
      td.onclick = function toggleColor () {
        this.classList.toggle('dead');
        this.classList.toggle('live');
      };
      tr.appendChild(td);
    }
    document.getElementById('grid').appendChild(tr);
  }
}

function setSeed() {
  let rows = document.getElementById('grid').children.length;
  for (let i = 0; i < rows; i ++) {
    for (let j = 0; j < rows; j ++) {
      document.getElementById(i + ',' + j).style.pointerEvents = 'auto';
    }
  }
}

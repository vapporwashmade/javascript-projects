function createTable(rows, cols) {
  document.getElementById('maze').textContent = '';
  document.getElementById('maze').onmousedown = function () {
    document.getElementById('maze').setAttribute('data-held-down', 'true');
    console.log('down');
  };
  document.getElementById('maze').onmouseup = function () {
    document.getElementById('maze').setAttribute('data-held-down', 'false');
    console.log('up');
  };
  for (let i = 0; i < rows; i++) {
    var tr = document.createElement('tr');
    tr.className = 'trow';
    for (let j = 0; j < cols; j ++) {
      var td = document.createElement('td');
      td.id = i + ',' + j;
      if (j === 0 || j === cols - 1 || i === 0 || i === rows - 1) {
        td.className = 'wall';
      } else {
        td.className = 'space';
        td.onmousedown = function () {
          if (document.getElementById('startsquare').checked) {
            try {
              document.getElementsByClassName('start')[0].classList.toggle('space');
              document.getElementsByClassName('start')[0].classList.toggle('start');
            } catch (TypeError) {
              console.log('no start square yet');
            }
            this.className = 'start';
          } else if (document.getElementById('finishsquare').checked) {
            try {
              document.getElementsByClassName('finish')[0].classList.toggle('space');
              document.getElementsByClassName('finish')[0].classList.toggle('finish');
            } catch (TypeError) {
              console.log('no finish square yet');
            }
            this.className = 'finish';
          } else if (document.getElementById('setwalls').checked) {
            this.classList.toggle('space');
            this.classList.toggle('wall');
          }
        };
        td.onmouseenter = function () {
          if (document.getElementById('maze').getAttribute('data-held-down') === 'true' && document.getElementById('setwalls').checked) {
            this.className = 'wall';
            console.log('over');
          }
        };
      }
      tr.appendChild(td);
    }
    document.getElementById('maze').appendChild(tr);
  }
}

function solveMazeWrapper(startindex) {
  var a = document.getElementsByName('change');
  for (let i = 0; i < a.length; i ++) {
    a[i].disabled = true;
    a[i].checked = false;
  }
  if (startindex === undefined) {
    console.log('no start square');
    return;
  }
  console.log(solveMaze(Number(startindex.id.charAt(0)), Number(startindex.id.charAt(2))));
  for (let i = 0; i < a.length; i ++) {
    a[i].disabled = false;
  }
}

function solveMaze(x, y) {
  var tdList = document.getElementById(x + ',' + y).className;
  // base cases
  if (tdList === 'finish') {
    return true;
  }
  if (tdList === 'path') {
    return false;
  }
  if (tdList === 'wall') {
    return false;
  }
  // recursive case
  document.getElementById(x + ',' + y).className = 'path';
  // check north
  if (solveMaze(x, y - 1)) {
    return true;
  }
  // check south
  if (solveMaze(x, y + 1)) {
    return true;
  }
  // check east
  if (solveMaze(x - 1, y)) {
    return true;
  }
  // check west
  if (solveMaze(x + 1, y)) {
    return true;
  }
  // if none are possible paths, retreat
  document.getElementById(x + ',' + y).className = 'space';
  return false;
}

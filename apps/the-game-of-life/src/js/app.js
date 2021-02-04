var updateID = null;
var ticks = 0;

function update() {
  if (document.getElementById('grid').childElementCount === 0) {
    clearInterval(updateID);
    return;
  }
  ticks++;
  document.getElementById('tick-number').innerText = ticks.toString();
  var matrix = getMatrix();
  var updated = [];
  for (let i = 0; i < matrix.length; i ++) {
    updated.push([]);
  }
  for (let i = 0; i < matrix.length; i ++) {
    for (let j = 0; j < matrix.length; j ++) {
      var liveCount = 0;
      let k = -1;
      let n = -1;
      let max1 = 2;
      let max2 = 2;
      if (i === 0) {
        k = 0;
        console.log('top square');
      } else if (i === matrix.length - 1) {
        max1 = 1;
        console.log('bottom square');
      }
      if (j === 0) {
        n = 0;
        console.log('left square');
      } else if (j === matrix.length - 1) {
        max2 = 1;
        console.log('right square');
      }
      for (k; k < max1; k ++) {
        for (let l = n; l < max2; l ++) {
          if (k === 0 && l === 0) {
            console.log('continued when k = ' + k + ' and l = ' + l);
          } else if (matrix[i + k][j + l]) {
            liveCount++;
          }
        }
      }
      console.log(liveCount);
      if (matrix[i][j]) {
        if ((liveCount < 2 || liveCount > 3)) {
          updated[i][j] = false;
        } else {
          updated[i][j] = true;
        }
      } else {
        if (liveCount == 3) {
          updated[i][j] = true;
        } else {
          updated[i][j] = false;
        }
      }
    }
  }
  for (let i = 0; i < updated.length; i ++) {
    for (let j = 0; j < updated.length; j ++) {
      if (matrix[i][j] !== updated[i][j]) {
        document.getElementById(i + ',' + j).classList.toggle('dead');
        document.getElementById(i + ',' + j).classList.toggle('live');
      }
    }
  }
  console.log('updated');
}

function getMatrix() {
  let isLive = [];
  let rows = document.getElementById('grid').children.length;
  for (let i = 0; i < rows; i ++) {
    isLive.push([]);
    for (let j = 0; j < rows; j ++) {
      // console.log(document.getElementById(i + ',' + j).classList.contains('live'));
      isLive[i].push(document.getElementById(i + ',' + j).classList.contains('live'));
    }
  }
  return isLive;
}

function ready() {
  let rows = document.getElementById('grid').children.length;
  for (let i = 0; i < rows; i ++) {
    for (let j = 0; j < rows; j ++) {
      document.getElementById(i + ',' + j).style.pointerEvents = 'none';
    }
  }
}

function updateHandler() {
  updateID = setInterval(update, 1000);
  ticks = 0;
}

function clearGrid() {
  let rows = document.getElementById('grid').children.length;
  for (let i = 0; i < rows; i ++) {
    for (let j = 0; j < rows; j ++) {
      document.getElementById(i + ',' + j).classList.replace('live', 'dead');
    }
  }
}

function setSpeed(time) {
  clearInterval(updateID);
  updateID = setInterval(update, time);
}

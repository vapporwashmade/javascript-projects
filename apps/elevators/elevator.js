var upQueue = [];
var downQueue = [];

function reloadUp() {
    document.getElementById('upQueue').textContent = upQueue;
}

function reloadDown() {
    document.getElementById('downQueue').textContent = downQueue;
}

function up(elem) {
    upQueue.push(elem.parentElement.id);
    console.log(elem);
    reloadUp();
}

function down(elem) {
    downQueue.push(elem.parentElement.id);
    console.log(elem);
    reloadDown();
}
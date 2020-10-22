const {ipcRenderer: ipc} = require('electron');
const notes = document.getElementById('notes');

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  hours[h] + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

notes.addEventListener('click', (event) => {
  ipc.send('notes');
})

hours = {
    00: "00",
    01: "01",
    02: "02",
    03: "03",
    04: "04",
    05: "05",
    06: "06",
    07: "07",
    08: "08",
    09: "09",
    10: "10",
    11: "11",
    12: "12",
    13: '01',
    14: '02',
    15: '03',
    16: '04',
    17: '05',
    18: '06',
    19: '07',
    20: '08',
    21: '09',
    22: '10',
    23: '11',
    24: '12'
}
let timeSecond;

for (; true; ) {
  timeSecond = +prompt("Get time in seconds(0-86400)");

  if (!isNaN(timeSecond) && timeSecond >= 0 && timeSecond <= 86400) {
    break;
  } else {
    alert("Incorrect");
    continue;
  }
}

function timeResult(el) {
  let hours;
  let minutes;
  let seconds;

  hours = Math.trunc(el / 3600);
  minutes = Math.trunc((el - hours * 3600) / 60);
  seconds = el - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return hours + ":" + minutes + ":" + seconds;
}

document.write(`Time: ${timeResult(timeSecond)}`);

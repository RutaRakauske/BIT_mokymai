const showTime = () => {
  const date = new Date;
  let sec = date.getSeconds();
  let min = date.getMinutes();
  let hours = date.getHours();

  sec = sec < 10 ? "0" + sec : sec;
  min = min < 10 ? "0" + min : min;
  hours = hours < 10 ? "0" + hours : hours;

  const time = hours + ":" + min + ":" + sec;
  const clockElement = document.getElementById("clock-container");
  clockElement.innerHTML = time;
}

showTime();
setInterval(showTime, 1000)
const showTime = () => {
    const date = new Date;
    let sec = date.getSeconds();
    let min = date.getMinutes();
    const hours = date.getHours();
    min = addZero(min);
    sec = addZero(sec);
    const time = hours + ":" + min + ":" + sec;
    // const time = "18:00:00"
    const clockElement = document.getElementById("clock-container");
    clockElement.innerHTML = time;
    let timeF = setTimeout(function(){ showTime() }, 1000);
  }
  
  showTime();
  function addZero(min){
     if (min < 10){
      return "0" + min;
    }
    else {
      return min;
    }
  }
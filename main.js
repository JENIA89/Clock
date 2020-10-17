const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
const btn = document.querySelector(".btn");
const btnStop = document.querySelector(".btn-stop");
const deg = 6;
let timerId;

btn.addEventListener("click", start);
btnStop.addEventListener("click", stop);

function start() {
  timerId = setInterval(() => {
    let day = new Date();
    let hours = day.getHours() * 30;
    let minutes = day.getMinutes() * deg;
    let seconds = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hours + minutes / 12}deg)`;
    mn.style.transform = `rotateZ(${minutes}deg)`;
    sc.style.transform = `rotateZ(${seconds}deg)`;
    console.log(hours);
  });
}

function stop() {
  clearInterval(timerId);
}

const clock = document.querySelector('h2#clock');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
//실행하자마자 함수 실행하도록 한번더 호출
getClock();
setInterval(getClock, 1000);

// // 한번 알려주고 끝남
// setTimeout(sayHello, 5000);

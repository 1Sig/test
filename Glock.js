const clock = document.querySelector('.clock');

const tick = () => {

  const now = new Date();
  
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  if (h < 10) {
    h = ('0' + h).slice(-2)
  }
  if (m < 10) {
    m = ('0' + m).slice(-2)
  }
  if (s < 10) {
    s = ('0' + s).slice(-2)
  }
  const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
  `;

  clock.innerHTML = html;

};

setInterval(tick, 1000);
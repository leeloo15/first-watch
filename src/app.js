function myTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const year = date.getFullYear();
  const day = date.getDay();

  // 360deg cerc / 60sec
  const secondDegree = (1 * 360) / 60;
  const minuteDegree = (1 * 360) / 60;
  const hourDegree = (1 * 360) / 12;

  const analogClock = document.querySelector('.analog-clock');

  analogClock.style.setProperty(
    '--seconds-angle',
    `${secondDegree * seconds}deg`,
  );

  analogClock.style.setProperty(
    '--minute-angle',
    `${minuteDegree * minutes}deg`,
  );

  analogClock.style.setProperty(
    '--hour-angle',
    `${hourDegree * hours + (hourDegree * minutes) / 60}deg`,
  );

  const time = `${hours} : ${minutes} : ${seconds}`;
  const digitalClock = document.querySelector('.digital-clock');
  digitalClock.innerText = time;

  const today = `${day} ${date.toLocaleString('ro', {
    month: 'long',
  })} ${year}`;
  const todayDate = document.querySelector('.today-date');
  todayDate.innerText = today;
}

setInterval(myTime, 1000);

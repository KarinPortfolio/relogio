const horaPonteiro = document.querySelector('.horas');
const minutoPonteiro = document.querySelector('.minutos');
const segundoPonteiro = document.querySelector('.segundos');

const getTime = () => {
  const date = new Date();
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
}

setInterval(() => {
  const { seconds, minutes, hours } = getTime();

  segundoPonteiro.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`;
  minutoPonteiro.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`;
  horaPonteiro.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`;
}, 1000);

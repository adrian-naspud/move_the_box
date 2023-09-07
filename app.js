const box = document.querySelector('#box')
const btn = document.querySelector('#btn')
let numClicks = 0

btn.addEventListener('click', btnClick);

function btnClick() {
  numClicks++;
  console.log(numClicks)
  if (numClicks % 2 === 0) {
    box.classList.remove('right');
    box.classList.add('left');
  } else {
    box.classList.add('right');
    box.classList.remove('left');
  }
}
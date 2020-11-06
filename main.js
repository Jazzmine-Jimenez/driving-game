var $carImg = document.querySelector('.car-img');

var data = {
  direction: 'east',
  location: {
    x: 0,
    y: 0
  },
  on: false
};

document.addEventListener('keydown', function (event) {

  if (event.key === 'ArrowUp') data.direction = 'north';

  if (event.key === 'ArrowDown') data.direction = 'south';

  if (event.key === 'ArrowLeft') data.direction = 'west';

  if (event.key === 'ArrowRight') data.direction = 'east';

  $carImg.className = 'car-img ' + data.direction;

});

document.addEventListener('keydown', function (event) {
  if (event.key !== ' ') return;

  if (data.on === false) {
    intervalID = setInterval(moveCar, 16);
    data.on = true;
  } else {
    clearInterval(intervalID);
    data.on = false;
  }
});

function moveCar() {

  data.location.x = data.location.x + 7;
  $carImg.setAttribute('style', 'left:' + data.location.x + 'px');
}

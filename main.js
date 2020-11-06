var $carImg = document.querySelector('.car-img');

var data = {
  direction: 'east',
  location: {
    x: 0,
    y: 0
  }
};

document.addEventListener('keydown', function (event) {

  if (event.key === 'ArrowUp') data.direction = 'north';

  if (event.key === 'ArrowDown') data.direction = 'south';

  if (event.key === 'ArrowLeft') data.direction = 'west';

  if (event.key === 'ArrowRight') data.direction = 'east';

  $carImg.className = 'car-img ' + data.direction;

  if (event.key === ' ') {
    setInterval(moveCar, 16);
  }
});

function moveCar() {
  data.location.x = data.location.x + 7;
  $carImg.setAttribute('style', 'left:' + data.location.x + 'px');
}

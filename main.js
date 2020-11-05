var $carImg = document.querySelector('.car-img');

var data = {
  direction: 'east'
};

document.addEventListener('keydown', function (event) {

  if (event.key === 'ArrowUp') data.direction = 'north';

  if (event.key === 'ArrowDown') data.direction = 'south';

  if (event.key === 'ArrowLeft') data.direction = 'west';

  if (event.key === 'ArrowRight') data.direction = 'east';

  $carImg.className = 'car-img ' + data.direction;
});

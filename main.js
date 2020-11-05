var $carImg = document.querySelector('.car-img');

var direction = {
  north: {
    arrow: 'ArrowUp',
    class: 'carImg up'
  },
  south: {
    arrow: 'ArrowDown',
    class: 'carImg down'
  },
  east: {
    arrow: 'ArrowRight',
    class: 'carImg right'
  },
  west: {
    arrow: 'ArrowLeft',
    class: 'carImg left'
  }
};

document.addEventListener('keydown', function (event) {

  if (event.key === direction.east.arrow) $carImg.className = direction.east.class;

  if (event.key === direction.west.arrow) $carImg.className = direction.west.class;

  if (event.key === direction.north.arrow) $carImg.className = direction.north.class;

  if (event.key === direction.south.arrow) $carImg.className = direction.south.class;

});

var $carImg = document.querySelector('.car-img');

document.addEventListener('keydown', function (event) {

  if (event.key === 'ArrowRight') {
    $carImg.className = 'carImg right';
  }

  if (event.key === 'ArrowLeft') {
    $carImg.className = 'carImg left';
  }

  if (event.key === 'ArrowUp') {
    $carImg.className = 'carImg up';
  }
  if (event.key === 'ArrowDown') {
    $carImg.className = 'carImg down';
  }
});

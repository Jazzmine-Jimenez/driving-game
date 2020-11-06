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

  if (event.key === 'ArrowUp') {
    data.direction = 'north';
    $carImg.className = 'car-img ' + data.direction;
    if (data.on === true) {
      clearInterval(intervalID);
      intervalID = setInterval(moveCar, 16, data.direction);
    }
  }

  if (event.key === 'ArrowDown') {
    data.direction = 'south';
    $carImg.className = 'car-img ' + data.direction;
    if (data.on === true) {
      clearInterval(intervalID);
      intervalID = setInterval(moveCar, 16, data.direction);
    }
  }

  if (event.key === 'ArrowLeft') {
    data.direction = 'west';
    $carImg.className = 'car-img ' + data.direction;
    if (data.on === true) {
      clearInterval(intervalID);
      intervalID = setInterval(moveCar, 16, data.direction);
    }
  }

  if (event.key === 'ArrowRight') {
    data.direction = 'east';
    $carImg.className = 'car-img ' + data.direction;
    if (data.on === true) {
      clearInterval(intervalID);
      intervalID = setInterval(moveCar, 16, data.direction);
    }
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key !== ' ') return;

  if (data.on === false) {
    intervalID = setInterval(moveCar, 16, data.direction);
    data.on = true;
  } else {
    clearInterval(intervalID);
    data.on = false;
  }
});

function moveCar(model) {

  if (model === 'north') {
    data.location.y = data.location.y - 7;
    $carImg.setAttribute('style', 'top:' + data.location.y + 'px');
  }
  if (model === 'south') {
    data.location.y = data.location.y + 7;
    $carImg.setAttribute('style', 'top:' + data.location.y + 'px');
  }
  if (model === 'east') {
    data.location.x = data.location.x + 7;
    console.log('going east(right)');
    $carImg.setAttribute('style', 'left:' + data.location.x + 'px');
  }
  if (model === 'west') {
    data.location.x = data.location.x - 7;
    console.log('going west(left)');
    $carImg.setAttribute('style', 'left:' + data.location.x + 'px');
  }

}

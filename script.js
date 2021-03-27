// Import DOM Elements
const progress = document.getElementById('progress'),
  prev = document.getElementById('prev'),
  next = document.getElementById('next'),
  circles = document.querySelectorAll('.circle'),
  actives = document.querySelectorAll('.active');

let currentActive = 1;

function update() {
  circles.forEach((circle, index) => {
    if(index < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  });

  console.log(actives.length, circles.length);
}

next.addEventListener('click', () => {
  currentActive++

  if(currentActive > circles.length) {
    currentActive = circles.length
  }
  update();
});

prev.addEventListener('click', () => {
  currentActive--

  if(currentActive < 1) {
    currentActive = 1
  }
  update();
});
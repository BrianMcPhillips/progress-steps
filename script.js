// Import DOM Elements
const progress = document.getElementById('progress'),
  prev = document.getElementById('prev'),
  next = document.getElementById('next'),
  circles = document.querySelectorAll('.circle');
  

let currentActive = 1;

function update() {
  circles.forEach((circle, index) => {
    if(index < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  });
  const actives = document.querySelectorAll('.active');
  
  progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%';
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
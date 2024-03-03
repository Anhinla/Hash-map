const boxes = document.querySelectorAll('.box');

const preloader = document.querySelector('.preloader')
window.addEventListener('load',function(){
  preloader.classList.add('hide');
});

function showBoxesSequentially() {
    boxes.forEach((box, index) => {
      setTimeout(() => {
        box.classList.add('show');
      }, index * 2000); // Delay each box by 0.3s (300 milliseconds)
    });
  }

  showBoxesSequentially();
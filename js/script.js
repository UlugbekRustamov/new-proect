var headrfixed = document.querySelector('.header-fixed');
var body = document.querySelector('#body')
var openblock = document.querySelector('.openblock');
var menyu = document.querySelector('.menyu-link');
var main = document.querySelector('.header-top-right');
var close1 = document.querySelector('.closeblock');


menyu.addEventListener('click', function() {
  openblock.classList.add('opened');
});

close1.addEventListener('click', function() {
  openblock.classList.remove('opened');
});

  

  window.addEventListener('scroll', function() { 
    if(window.scrollY > 0) { 
      headrfixed.classList.add ('opened'); 
    } else { 
      headrfixed.classList.remove('opened'); 
    } 
  })
  
  


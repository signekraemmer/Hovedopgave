const btn = document.querySelector('.clickEvent')

btn.addEventListener('click', function(){
  btn.style.backgroundColor = '#fff';
  btn.style.border = '#3c505e solid 2px';
  btn.style.color = '#3c505e';
  btn.style.transition = 'all 0.7s';

  setTimeout(function(){
    btn.style.backgroundColor = '#3c505e';
    btn.style.border = '#3c505e solid 2px';
    btn.style.color = '#fff';

  }, 700)
})

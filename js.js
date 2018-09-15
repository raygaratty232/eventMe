var enterActive = document.querySelector('#enter-active');
var formCont = document.querySelector('.form-cont');

enterActive.addEventListener('click', function(){
	formCont.classList.toggle('open')
})
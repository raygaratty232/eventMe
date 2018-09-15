var enterActive = document.querySelector('#enter-active');
var formCont = document.querySelector('.form-cont');
var lanBtn = document.querySelector('#lan-btn');
var languageBlock = document.querySelector('.language-block');

enterActive.addEventListener('click', function(){
	formCont.classList.toggle('open')
})


lanBtn.addEventListener('click', function(){
	languageBlock.classList.toggle('show');
	languageBlock.addEventListener('transitionend', function(){
		console.log('1');
	})
})

$(document).ready(function() {
	$('.burger').click(function() {
		$('.burger, .navigate').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


$('.switch-btn').click(function(){
	$(this).toggleClass('switch-on');
});


for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}
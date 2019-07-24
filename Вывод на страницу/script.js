function out() {
	var p;
	p = document.getElementById('out');
	// p.innerHTML = 'Hello';
	//дописать информацию
	//p.innerHTML += ' <b>Hello</b>';
	// p.innerHTML = p.innerHTML + 'Hello';
	// p.innerText += ' <b>Hello</b>';
	//p.inserAdjacentHTML('beforeBegin', 'Hi');
	//beforeBegin = перед открывающим тегом
	//afterBegin = после открывающего тега
	//beforeEnd = перед закрывающим
	//afterEnd = после закрывающего
	p.outerHTML = '<div class="one">Hello</div>';
}
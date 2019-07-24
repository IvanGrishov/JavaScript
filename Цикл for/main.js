function f1() {
	var p;
	p = document.getElementById('out');
	//задание количество повторений
	//i++ i=i+1
	for (var i=0; i < 100; i++) {
		p.innerHTML += i + ' ';
	}
}


function one(){
	 alert ("Hello");
	//return 9;
	//undefined
}

//console.log( 5+one() );

function summa(a,b){
	var c=50;
	a = a || 10; // undefined или 10 
	b = b || 20;
	alert(a+b);
	// return (a+b);
}

// console.log (summa () );
// alert(c);

document.getElementById('b1').onclick = function () {
	summa (12, 6);
}

var d = function () {
	alert ('work');
}
d();
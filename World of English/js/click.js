var left = document.getElementById('l1');
var right = document.getElementById('r1');
var photo1 = document.getElementById('photo1');
var photo2 = document.getElementById('photo2');
photo2.style.display = 'none';
right.onclick = function newf() {
	right.style.color = '#E5703C';
	left.style.color = '#3A3B3F';
	photo1.style.display = 'none';
	photo2.style.display = 'block';
}
left.onclick = function newf() {
	left.style.color = '#E5703C';
	right.style.color = '#3A3B3F';
	photo2.style.display = 'none';
	photo1.style.display = 'block';
}

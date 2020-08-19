//first load page
(function () {
	document.oncontextmenu = cmenu; function cmenu() { return false; }
		document.onkeydown = function (e) {
		if (e.keyCode == 9) {
			e.preventDefault();
		}
		else if (e.keyCode == 123) {
			e.preventDefault();
		}
	}
}
	)();

//preload
 $(document).ready (function () {
 	NProgress.start();
 	NProgress.set(0.7);
 	setTimeout(function() {
 		NProgress.done();
 	},4000)
 });
 
//preload
function check(e) {

  if (e.value > 11) {
    e.value = '11';
    
  }

  e.value = e.value.replace(/[^0-9.]/g, ''); 
  e.value = e.value.replace(/(\..*)\./g, '$1');
}


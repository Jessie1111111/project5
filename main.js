var next = document.getElementById('next');
		let radios = document.querySelectorAll('.radio');
		var value;
		
		for (var i = radios.length - 1; i >= 0; i--) {
			radios[i].addEventListener('change', function() {
				value = this.value
				console.log(value)
			})
		}
		
		next.addEventListener("click", function() {
			if (value == 'B'){
			
				if (localStorage.getItem('count')){
					var n = parseInt(localStorage.getItem('count'));
					n += 1;
					localStorage.setItem('count', n);
				}else{
					
					localStorage.setItem('count',1);
				}
			}
			
		})
		var add = document.getElementById('add');
		
		add.addEventListener('click', function (e) {
			var text = document.getElementById('new').value;
			var el = document.createElement('li');
			el.innerHTML = text + '<button class="done">done</button><button class="remove">remove</button>';
			document.querySelector('.list').appendChild(el);
			console.log(document.querySelector('.list'));
		});


		var list = document.querySelector('.list');
		list.addEventListener('click', function(e) {
			if (e.target.classList.contains('done')) {
				e.target.parentNode.classList.toggle('passed');
			}
			if (e.target.classList.contains('remove')) {
				e.target.parentNode.remove();
			}
		})

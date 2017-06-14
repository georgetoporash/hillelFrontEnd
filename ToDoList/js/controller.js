		var add = document.getElementById('add');
		
		add.addEventListener('click', function (e) {

			var text = document.getElementById('new').value;
			var task = new Task(text);
			var el = document.createElement('li');
			el.innerHTML = text + '<button class="done">done</button><button class="remove">remove</button>';
			document.querySelector('.list').appendChild(task.el());
		});

		var dones = document.getElementsByClassName('done');
		for (var i = 0; i < dones.length; i++) {
			dones[i].addEventListener('click', function(){
				this.parentNode.classList.toggle('passed');
			})
		}

		var removes = document.getElementsByClassName('remove');
		for (var j = 0; j < removes.length; j++) {
			removes[j].addEventListener('click', function(){
				this.parentNode.remove();
			})
		}


		function Task(text) {
			this.text = text;
			this.isDone = false;
		}

		Task.prototype.done = function () {
			this.isDone = !this.isDone;
		}

		Task.prototype.el = function () {
			var el = document.createElement('li');
			el.innerText = this.text;

			var done = document.createElement('button');
			done.innerText = 'done';
			var self = this;
			done.addEventListener('click', function() {
				self.done();
				el.classList.toggle('passed');
			});

			var remove = document.createElement('button');
			remove.innerText = 'remove';
			remove.addEventListener('click', function() {
				el.remove();
			});

			el.appendChild(done);
			el.appendChild(remove);

			return el;
		}













function ContactsInfo() {
	
}

ContactsInfo.prototype.showContact = function () {

	var el = document.createElement('li');
	
	el.innerText = returnObj.name;
	el.className = key;
		
	var info = document.createElement('button');
	info.innerText = 'info';
	info.className = 'info';
	info.id = key;
	
	var remove = document.createElement('button');
	remove.innerText = 'remove';
	remove.className = 'remove';
	remove.id = key;
	
	el.appendChild(remove);
	el.appendChild(info);
	return el;	
}

ContactsInfo.prototype.startApp = function (arr) {
	this.btnRemove();
	this.searchContact(arr);
	this.btnInfo(arr);
	this.birthday(arr);
}

ContactsInfo.prototype.btnRemove = function () {
	var removes = document.getElementsByClassName('remove');
	for (var j = 0; j < removes.length; j++) {
		removes[j].addEventListener('click', function(){
			this.parentNode.remove();
			localStorage.removeItem(this.parentNode.className);
		});
	}
}

ContactsInfo.prototype.btnInfo = function (arr) {
	var elInfo = document.getElementsByClassName('info');
	for (var j = 0; j < elInfo.length; j++) {
		var self = this;
		elInfo[j].addEventListener('click', function(e){

			var infoObj = self.findObject(e.target.id, arr);
			self.valueObj(infoObj);

			self.editObj(infoObj);

			var p = document.getElementById('popup-2');
			p.className = "shown";
			var close = document.querySelector('.close-2');
			close.addEventListener('click', function() {
				location.reload();
			});


		});
	}
}

ContactsInfo.prototype.findObject = function (id, ob) {
	for (var i = 0; i < ob.length; i++) {
		if(ob[i].name === id){
			return ob[i];
		} 
	}
	return "";
}

ContactsInfo.prototype.valueObj = function (infoObj) {
	if(infoObj === undefined) {
		infoObj = {
			name: "",
			number: "",
			email: "",
			birthday: "",
			numbers: ""
		};
	}
	document.getElementById("name-view").innerText = "Name: " + infoObj.name;
	document.getElementById("number-view").innerText = "Number: " + infoObj.number;
	document.getElementById("numbers-view").innerHTML = 'added: ' + infoObj.numbers;
	document.getElementById("email-view").innerText = "Email: " + infoObj.email;
	document.getElementById("birthday-view").innerText = "Birthday: " + infoObj.birthday;
}

ContactsInfo.prototype.editObj = function (infoObj) {
	var edit = document.getElementById('edit');
	var self = this;
	edit.addEventListener('click', function(e){
		
		var p = document.getElementById('popup-1');
		p.className = "shown";
		var p = document.getElementById('popup-2');
		p.className = "hidden";

		var close = document.querySelector('.close-1');
		close.addEventListener('click', function() {
			location.reload();
		});

		document.getElementById('name').value = infoObj.name;
		var nameInpObj = document.getElementById("name");
		nameInpObj.addEventListener('mouseleave', function(e) {
			if(e.target.value !== infoObj.name){
				localStorage.removeItem(infoObj.name);
			}
		});

		document.getElementById('warning').innerText = "Не забудьте сохранить!";

		document.getElementById('number').value = infoObj.number;
		document.getElementById('email').value = infoObj.email;
		document.getElementById('birthday').value = infoObj.birthday;

		if(infoObj.numbers !== undefined ){
			for (var i = 0; i < infoObj.numbers.length; i++) {
				var elInp = document.createElement('input');
				elInp.value = infoObj.numbers[i];
				document.getElementById("numbers").appendChild(elInp);
			}
		}
		self.addContactNumber();
		self.confBtn();
	});
}
ContactsInfo.prototype.confBtn = function () {
	var confirmBtn = document.getElementById('confirm');
	confirmBtn.addEventListener('click', function(e) {
		var addArr = [];
		
		var v = document.getElementById('numbers').children;
		for (var i = 0; i < v.length; i++) {
			if(v[i].value !== ""){
				addArr[i] = v[i].value;
			}	
		}
		var name = document.getElementById("name").value;
		var number = document.getElementById("number").value;
		var email = document.getElementById("email").value;
		var birthday = document.getElementById("birthday").value;

		e.stopPropagation();
		var obj = {"name": name, "number": number, "email": email, "birthday": birthday, "numbers" : addArr }
		var serialObj = JSON.stringify(obj);
		localStorage.setItem(name, serialObj);
		location.reload();	
	});
} 

ContactsInfo.prototype.addContactNumber = function () {

	var addnum = document.getElementById('addnum');
	addnum.addEventListener('click', function(e){
		var text = document.getElementById('name').value;
		var addInput = new CreateNum("add_" + text  );
		document.getElementById("numbers").appendChild(addInput);
	});

	function CreateNum (cl) {
		var el = document.createElement('input')
		el.className = cl;
		el.placeholder = "Additional Number"
		return el;	
	}
}

ContactsInfo.prototype.searchContact = function (arr) {
	var search = document.getElementById('search');
	var self = this;
	search.addEventListener('click', function(e){
		var searchName = document.getElementById('searchName').value;
		var x = self.findObject(searchName, arr).name;
		if(x !== "" && x !== undefined) {
			var infoObjSearch = self.findObject(searchName, arr);
			console.log(infoObjSearch)
			
			self.valueObj(infoObjSearch);

			self.editObj(infoObjSearch);

			var p = document.getElementById('popup-2');
			p.className = "shown";
			var close = document.querySelector('.close-2');
			close.addEventListener('click', function() {
				location.reload();
			});
		} else {
			alert("Write correct name!")
		}
	});
}

ContactsInfo.prototype.birthday = function (arr) {
	var congradulation = [];
	var arrCake = [];
	for (var i = 0; i < arr.length; i++) {
		congradulation[i] = arr[i].birthday
	}
	var now = new Date();
	var month = now.getMonth();
	var day = now.getUTCDate();

	for (var i = 0; i < congradulation.length; i++) {
		var cut = congradulation[i].substring(5);
		var mm = cut.substring(0, 2);
		var dd = cut.substring(3);
		mmNum = Number(mm);
		ddNum = Number(dd);

		if(day === ddNum && month + 1 === mmNum) {
			arrCake.push(arr[i].name)
			document.getElementById('cake').innerHTML = "С Днем Варенья " + arrCake;
		}
	}
}

ContactsInfo.prototype.arrayLocalStorage = function (arr, ob) {
	var newArr = arr;
	newArr[arr.length] = ob;
	return newArr;	
}

/////////////////////////////////////////////////////////////////////////////////////////////////



function Contact () {
		
}

Contact.prototype.addContact = function () {
	var p = document.getElementById('popup-1');
	p.className = "shown";
	var close = document.querySelector('.close-1');
	close.addEventListener('click', function() {
		var p = document.getElementById('popup-1');
		p.className = "hidden";
	});

	this.confBtn();
}

Contact.prototype.confBtn = function () {
	var confirmBtn = document.getElementById('confirm');
	confirmBtn.addEventListener('click', function(e) {
		var addArr = [];
		
		var v = document.getElementById('numbers').children;
		for (var i = 0; i < v.length; i++) {
			if(v[i].value !== ""){
				addArr[i] = v[i].value;
			}	
		}

		var name = document.getElementById("name").value;
		var number = document.getElementById("number").value;
		var email = document.getElementById("email").value;
		var birthday = document.getElementById("birthday").value;

		e.stopPropagation();
		var obj = {"name": name, "number": number, "email": email, "birthday": birthday, "numbers" : addArr }
		var serialObj = JSON.stringify(obj);
		localStorage.setItem(name, serialObj);
		location.reload();	
	});
} 

Contact.prototype.addContactNumber = function () {
	var addnum = document.getElementById('addnum');
	addnum.addEventListener('click', function(e){
		var text = document.getElementById('name').value;
		var addInput = new CreateNum("add_" + text  );
		document.getElementById("numbers").appendChild(addInput);
	});

	function CreateNum (cl) {
		var el = document.createElement('input')
		el.className = cl;
		el.placeholder = "Additional Number"
		return el;	
	}
	
}

contactsInfo = new ContactsInfo();
var arr = [];
for (var key in localStorage) {
	var returnObj = JSON.parse(localStorage[key]);
	var createContact = contactsInfo.showContact(returnObj);
	
	document.querySelector('.list').appendChild(createContact);
	contactsInfo.arrayLocalStorage(arr, returnObj);
}

contactsInfo.startApp(arr);

var add = document.getElementById("add");
add.addEventListener('click', function(e) {
	e.stopPropagation();
	var contact = new Contact("hi");	
	contact.addContactNumber();
	contact.addContact();
});

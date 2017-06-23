    class Student {
    arr_attendance: boolean[];
    
  	age: any;
    average: any;
    present:any;
    absent:any;
    summary:any;

    constructor(public name, public surname, public born, public arr_marks ) {       
    	let arr_attendance: boolean[] = [];
        this.arr_attendance = arr_attendance;
    }
}

	Student.prototype.age = function()  {
        let year = 2017;
        let age = year - this.born;
        return age;
    }


 	Student.prototype.average = function() {
        let arr_sum = this.arr_marks.reduce( (a, b) => 
            a + b
        );
        let aver_mark = arr_sum / this.arr_marks.length;
        return aver_mark.toFixed(2);
    }

    Student.prototype.present = function() {
        if (this.arr_attendance.length < 25) {
            this.arr_attendance.push(true);
        }
        return this.arr_attendance;
    }
    Student.prototype.absent = function() {
        if (this.arr_attendance.length < 25) {
            this.arr_attendance.push(false);
            return this.arr_attendance;
        }
    }
    Student.prototype.summary = function() {
        let aver_mark = this.average();
        let count = 0;
        for (let i = 0; i < this.arr_attendance.length; i++) {
            if (this.arr_attendance[i] === true) {
                count++;
            }
        }
        if (aver_mark > 90 && count / 25 > 0.9) {
            console.log(aver_mark, count / 25);
            let text = console.log("Ути какой молодчинка!");
            return text;
        } else if (aver_mark > 90 || count / 25 > 0.9) {
            console.log(aver_mark, count / 25);
            let text = console.log("Норм, но можно лучше!");
            return text;
        } else {
            console.log(aver_mark, count / 25);
            let text = console.log("Редиска!");
            return text;
        }
    }

 	let marks_g = [100, 90, 111, 90, 80, 120, 160];
    let marks_n = [80, 90, 50, 90, 80, 70, 67];

    let student_g = new Student("george", "ivanov", 1998, marks_g);
    let student_n = new Student("nick", "petrov", 1991, marks_n);

    //Иммитация посещений
    for (let i = 0; i < 23; i++) {
        student_g.present();
        student_n.present();
    }
    for (let j = 0; j < 4; j++) {
        student_g.absent();
        student_n.absent();
    }
    /////////////////////


    console.log(" ");
    console.log("george is " + student_g.age() + " years old");
    console.log("nick is " + student_n.age() + " years old");
    console.log(" ");

    console.log(student_g.name);
    student_g.summary();
    console.log(" ");

    console.log(student_n.name);
    student_n.summary();
    console.log(" ");
	console.log(student_g);

		
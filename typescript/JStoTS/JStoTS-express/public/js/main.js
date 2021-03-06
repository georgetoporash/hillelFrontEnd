var Student = (function () {
    function Student(name, surname, born, arr_marks) {
        this.name = name;
        this.surname = surname;
        this.born = born;
        this.arr_marks = arr_marks;
        var arr_attendance = [];
        this.arr_attendance = arr_attendance;
    }
    return Student;
}());
Student.prototype.age = function () {
    var year = 2017;
    var age = year - this.born;
    return age;
};
Student.prototype.average = function () {
    var arr_sum = this.arr_marks.reduce(function (a, b) {
        return a + b;
    });
    var aver_mark = arr_sum / this.arr_marks.length;
    return aver_mark.toFixed(2);
};
Student.prototype.present = function () {
    if (this.arr_attendance.length < 25) {
        this.arr_attendance.push(true);
    }
    return this.arr_attendance;
};
Student.prototype.absent = function () {
    if (this.arr_attendance.length < 25) {
        this.arr_attendance.push(false);
        return this.arr_attendance;
    }
};
Student.prototype.summary = function () {
    var aver_mark = this.average();
    var count = 0;
    for (var i = 0; i < this.arr_attendance.length; i++) {
        if (this.arr_attendance[i] === true) {
            count++;
        }
    }
    if (aver_mark > 90 && count / 25 > 0.9) {
        console.log(aver_mark, count / 25);
        var text = console.log("Ути какой молодчинка!");
        return text;
    }
    else if (aver_mark > 90 || count / 25 > 0.9) {
        console.log(aver_mark, count / 25);
        var text = console.log("Норм, но можно лучше!");
        return text;
    }
    else {
        console.log(aver_mark, count / 25);
        var text = console.log("Редиска!");
        return text;
    }
};
var marks_g = [100, 90, 111, 90, 80, 120, 160];
var marks_n = [80, 90, 50, 90, 80, 70, 67];
var student_g = new Student("george", "ivanov", 1998, marks_g);
var student_n = new Student("nick", "petrov", 1991, marks_n);
//Иммитация посещений
for (var i = 0; i < 23; i++) {
    student_g.present();
    student_n.present();
}
for (var j = 0; j < 4; j++) {
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

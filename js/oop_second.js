class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        return this.name + ' ' + this.surname;
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName(midleName) {
        return super.showFullName() + ' ' + midleName;
    }

    showCourse() {
        const currentYear = 2021;
        const course = currentYear - this.year;

        if (!(course >= 1 && course <= 6)) {
            throw new Error("You are not a student!");
        }
        return course;
    }
}

const stud1 = new Student("Petro", "Petrenko", 2010);

console.log(stud1.showFullName('Petrovych'));

try {
    console.log("Current course: " + stud1.showCourse());
} 

catch (error) {
    alert(error.message);
}


class Student {
    constructor(fullName, direction) {
        this.fullName = fullName;
        this._direction = direction;
    }

    showFullName() {
        return this.fullName;
    }

    nameIncludes(data) {
        const studentName = this.showFullName().split(' ')[0];
        if (studentName === data) {
            return true;
        }
        return false;
    }

    static studentBuilder() {
        return new Student('Ihor Kohut', 'qc');
    }

    get direction() {
        return this._direction;
    }

    set direction(value) {
        this._direction = value;
    }
}

const stud1 = new Student('Ivan Petrenko', 'web');

console.log(stud1.nameIncludes('Ivan'));
console.log(stud1.nameIncludes('Denysenko'));

const stud2 = new Student('Sergiy Koval', 'python');

Student.studentBuilder();
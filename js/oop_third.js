class Worker {
    #experience = 1.2;

    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary() {
        return this.dayRate * this.workingDays;
    }

    showSalaryWithExperience() {
        return this.#experience * this.dayRate * this.workingDays;
    }

    get showExp() {
        return this.#experience;
    }

    set setExp(value) {
        this.#experience = value;
    }
}

// First worker
const worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
console.log(worker1.fullName + ' salary:', worker1.showSalary());              
console.log("New experience:", worker1.showExp);
console.log(worker1.fullName + ' salary:', worker1.showSalaryWithExperience());
worker1.setExp = 1.5;
console.log("New experience:", worker1.showExp);
console.log(worker1.fullName + ' salary:', worker1.showSalaryWithExperience());

console.log('=============');

// Second worker
const worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
console.log(worker2.fullName + ' salary:', worker2.showSalary());              
console.log("New experience:", worker2.showExp);
console.log(worker2.fullName + ' salary:', worker2.showSalaryWithExperience());
worker2.setExp = 1.5;
console.log("New experience:", worker2.showExp);
console.log(worker2.fullName + ' salary:', worker2.showSalaryWithExperience());

console.log('=============');

// Third worker
const worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
console.log(worker3.fullName + ' salary:', worker3.showSalary());              
console.log("New experience:", worker3.showExp);
console.log(worker3.fullName + ' salary:', worker3.showSalaryWithExperience());
worker3.setExp = 1.5;
console.log("New experience:", worker3.showExp);
console.log(worker3.fullName + ' salary:', worker3.showSalaryWithExperience());

console.log('=============');

// Sorting
console.log('Sorted salary:');
function bubbleSortWorkers(...args) {
    let swapped = true;

    while(swapped) {
        swapped = false;
        for (let i = 1; i < args.length; i++) {
            if (args[i - 1].showSalaryWithExperience() > args[i].showSalaryWithExperience()) {
                let temp = args[i];
                args[i] = args[i - 1];
                args[i - 1] = temp;
                swapped = true;
            }
        }
    }

    args.forEach((worker) => {
        console.log(worker.fullName + ':', worker.showSalaryWithExperience());
    });
}

bubbleSortWorkers(worker1, worker2, worker3);

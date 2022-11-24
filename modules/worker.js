import {Person} from "./person.js";

export class Worker extends Person {
    #rate;
    #days;
    position;

    constructor(firstName, lastName, birthday, position) {
        super(firstName, lastName, birthday);
        this.position = position;
        this.#rate = 1000;
        this.#days = 0;
    };

    get rate() {
        return this.#rate;
    };

    set rate(data) {
        if (data < 1000) {
            console.log("Ставка за день работы меньше 1000!");
        } else {
            this.#rate = data;
        }
    };

    addDays(numberDays) {
        const todayDate = new Date();
        const daysCurrentMonth = new Date(todayDate.getFullYear(), todayDate.getMonth() + 1, 0).getDate();

        if ((numberDays > 0) && (numberDays <= (daysCurrentMonth - this.#days))) {
            this.#days += numberDays;
        }
    };

    getSalary() {
        const currentMonth = new Date().getMonth();
        const birthdayMonthWorker = new Date(this.birthday).getMonth();
        const salary = this.rate * this.#days;
        if (currentMonth === birthdayMonthWorker) {
            return (salary * 0.1) + salary;
        } else {
            return salary;
        }
    };

    static whoWorkedMore(...workers) {
        let maxDays = 0;
        let objWorkers = [];
        workers.forEach(worker => {
            if (worker.#days >= maxDays) {
                maxDays = worker.#days;
                objWorkers.push(worker);
            }
        });
        objWorkers.forEach(worker => {
            if (worker.#days === maxDays && maxDays > 0) {
                console.log("Больше всех отработал " + worker.getFullName() + "."
                    + " Количество рабочих дней - " + worker.#days);
            }
        });
    };

    static whoIsYounger(...workers) {
        workers.forEach(worker => {
            let ageWorker = worker.getAge();
            ageWorker = ageWorker.replace(/[^0-9]/g, '');
            return worker.age = Number(ageWorker);
        });

        let minAge = workers[0].age;
        let objWorkers = [];

        workers.forEach(worker => {
            if (worker.age <= minAge) {
                minAge = worker.age;
                objWorkers.push(worker);
            }
        })

        objWorkers.forEach(worker => {
            if (worker.age === minAge) {
                console.log(worker.getFullName() + " " + worker.getAge());
            }
        })
    };
}




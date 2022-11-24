export class Person {
    firstName = "Имя";
    lastName = "Фамилия";
    #birthday = "мм-дд-ггг";

    constructor(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.#birthday = birthday;
    }

    get birthday() {
        return this.#birthday;
    };

    getFullName() {
        return this.firstName + " " + this.lastName;
    };

    getAge() {
        const data = new Date();
        const today = new Date(data.getFullYear(), data.getMonth(), data.getDate());
        const birth = new Date(this.birthday);
        const birthDataYear = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());

        let age;
        age = today.getFullYear() - birth.getFullYear();
        if (today < birthDataYear) {
            age = age - 1;
        }

        let count = age % 100;
        if (count >= 5 && count <= 20) {
            return age + " лет";
        } else {
            count = count % 10;
            if (count === 1) {
                return age + " год";
            } else if (count >= 2 && count <= 4) {
                return age + " года";
            } else {
                return age + " лет";
            }
        }
    };
}



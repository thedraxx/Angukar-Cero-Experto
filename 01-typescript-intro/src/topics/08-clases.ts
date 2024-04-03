export class Person {
    public name: string;
    public age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }


}


/**
 * export class Hero extends Person {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        super(realName, age);
    }


}
 * 
 * 
 */


export class Hero {



    constructor
    (
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) 
    {
        
    }


}


const person = new Person("Peter", 22);
const ironman = new Hero("ironman", 22, "Tony", person);



console.log(ironman);
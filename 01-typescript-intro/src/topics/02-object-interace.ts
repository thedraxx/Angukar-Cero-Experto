interface Person {
    name: string;
    age: number;
    email: string;
    adress: string[];
    lastname?: string;
}


const skills: string[]  = ["hola", "adios"];


const person: Person = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
    adress: ["Calle 123", "Bogota"],
    lastname: "Doe"
};

console.log(person, skills);

export{}
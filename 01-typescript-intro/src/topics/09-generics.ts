

export function whatsMyType<T>(argument: T): T {


    return argument;
}



const amString = whatsMyType<string>("I am a string");

const amNumber = whatsMyType<number>(22);

const amBoolean = whatsMyType<boolean>(true);

const amArray = whatsMyType<number[]>([1, 2, 3]);

console.log(amString);
console.log(amNumber);
console.log(amBoolean);
console.log(amArray);
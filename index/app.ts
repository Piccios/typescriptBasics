

// TS viene compilato: per testare le funzionalita' dovro' avviare il compilatore e tradurre il codice in JS

// TS e' la base di Angular e Nestjs(back-end)

// FUNZIONI

function sum(num1: number, num2: number) {
    return num1+num2
}
console.log(sum(5,5))

// TYPE ASSIGNMENT e INFERENCE

let test1: number
let test2: string // "" , '' , ``
let test3: boolean // true or false

// definire un oggetto

let user: {
    name: string;
    surname: string;
    age: number;
    address: {
        street: string;
        number: number;
        CAP: number;
        city: string;
    }
}

user = {
    name : "Marco",
    surname : "Rossi",
    age: 35,
    address: {street: "Appia", number: 15, CAP: 10000, city: "Roma" }
}

console.log(user)






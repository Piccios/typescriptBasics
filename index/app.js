// TS viene compilato: per testare le funzionalita' dovro' avviare il compilatore e tradurre il codice in JS
// TS e' la base di Angular e Nestjs(back-end)
// FUNZIONI
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(5, 5));
// TYPE ASSIGNMENT e INFERENCE
var test1;
var test2; // "" , '' , ``
var test3; // true or false
// definire un oggetto
var user;
user = {
    name: "Marco",
    surname: "Rossi",
    age: 35,
    address: { street: "Appia", number: 15, CAP: 10000, city: "Roma" }
};
console.log(user);

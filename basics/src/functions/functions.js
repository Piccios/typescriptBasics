// Funzioni tipizzate
//  cio' ci permette di definire il tipo dei parametri e del valore di ritorno nelle funzioni
function sum(a, b) {
    return a + b;
}
var result = sum(5, 5);
console.log(result);
// 'e possibile rendere opzionale un parametro utilizzando ?
function greet(name, message) {
    return message ? "".concat(message, ", ").concat(name) : "Hello ".concat(name);
}
console.log(greet("Lorenzo"));

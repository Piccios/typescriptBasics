// Funzioni tipizzate
//  cio' ci permette di definire il tipo dei parametri e del valore di ritorno nelle funzioni

function sum(a: number, b: number): number{
    return a + b;
}

const result = sum(5, 5);
console.log(result);

// 'e possibile rendere opzionale un parametro utilizzando ?

function greet(name: string, message?: string): string{
    return message ? `${message}, ${name}` : `Hello ${name}`;
}
console.log(greet("Lorenzo"));
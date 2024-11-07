
// Arrays

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let words: string[] = ["ciao", "typescript"];


// Tupla {Array di lunghezza fissa con tipi specifici per ogni elemento}

// Utili per rappresentare dati strettamente strutturali

let person: [string, number];
person = ["Lorenzo", 28];  //se inverto i dati, l'array rendera' un errore

//* Enum {enumerazioni} permettono di definire un insieme di valori costanti

enum Color {
    red,
    green,
    blue
}
let favouriteColor: Color = Color.red;

//? Oggetti {e' possibile definire tipi per oggetti con interfacce o direttamente nelle variabili}

let user: { name: string; age: number} = {
    name: "lorenzo",
    age: 28
};

// console.log(user); rendera' { name: 'lorenzo', age: 28 } 

//! Unioni di tipi (Union Types) Le unioni ti permettono di dichiarare variabili che possono essere di più tipi:

let id: string | number;
id = 101; //valido
id = "Piccio96"; //Valido

// Type Aliases 
// Un alias di tipo ti permette di creare un nome personalizzato per un tipo, rendendo il codice più leggibile

type ID = string | number;
let userId: ID = "user123";

// console.log(userId); rendera' "user123"
// Arrays
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var words = ["ciao", "typescript"];
// Tupla {Array di lunghezza fissa con tipi specifici per ogni elemento}
// Utili per rappresentare dati strettamente strutturali
var person;
person = ["Lorenzo", 28]; //se inverto i dati, l'array rendera' un errore
// Enum {enumerazioni} permettono di definire un insieme di valori costanti
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var favouriteColor = Color.red;
// Oggetti {e' possibile definire tipi per oggetti con interfacce o direttamente nelle variabili}
var user = {
    name: "lorenzo",
    age: 28
};
// console.log(user); rendera' { name: 'lorenzo', age: 28 } 
// Unioni di tipi (Union Types) Le unioni ti permettono di dichiarare variabili che possono essere di più tipi:
var id;
id = 101; //valido
id = "Piccio96"; //Valido
var userId = "user123";
console.log(userId);

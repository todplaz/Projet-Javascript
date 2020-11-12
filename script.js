//script_1.js
/* 
console.log("Bonjour monde");

//script_1Custom.js
let surname = prompt("");
console.log("Bonjour " + surname); 
*/

//script_2.js
/* 
let n = prompt("De quel nombre veux-tu calculer la factorielle ?")
function factorial(n){
    if (n === 0 || n === 1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
answer = factorial(n)
console.log("Le résultat est :"+ answer); 
*/
//script_3.js
/*
let k = prompt ("Combien de marches souhaitez-vous grimper ?");
for (var i = 1; i <= k; i++){
    for(var j = k - 1 ; j >= i; j--){
        console.log(" ");
    }
    for (var bloc = 1; bloc <= i; bloc++){
        console.log("#");
    }
    console.log("\n");
}
*/
//script_4.js

const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];
 //Nés dans les années 70
  /*
const oldEntrepreneurs = entrepreneurs.filter(obj => obj.year >= 1970 && obj.year <= 1979);
console.log(oldEntrepreneurs)
*/

//Noms et prénoms des entrepreneurs
/* 
let name = entrepreneurs.map(x => ({first: x.first, last: x.last}));
console.log(name);
*/

//Age actuel
/*
for (let age in entrepreneurs){
    console.log("l'age actuel de :"+ entrepreneurs[age].first + " est :"+ (2000 - entrepreneurs[age].year));
}
*/

//Ordre alphabetique
/*
entrepreneurs.sort(function(a, b){
    if(a.first < b.first) { return -1; }
    if(a.first > b.first) { return 1; }
    return 0;
});
console.log(entrepreneurs);
*/

//script_5.js

const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

//Libres empruntés au moins une fois
/*
for(let location in books){
const empruntMax = books.filter(rent => rent.rented >= 1);
console.log(empruntMax[location].title +" a été emprunté " + empruntMax[location].rented + " fois.");
}
*/

//Le livre le plus emprunté
var maxValue = Math.max.apply(null,  
    books.map(function(o) { return o.rented; })); 
 
  console.log("Le livre le plus emprunté est :" + maxValue); 



 


let rzeczy = [1, null, "pies", true, 19];

let tydzien = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"]

let strings = ["a", "b", "dupa", "dupa", "c", "d", "dupa"]

let ilosc = {};

strings.forEach(item => {
    if (ilosc[item]) {
        ilosc[item]++
    } else {
        ilosc[item] = 1;
    }
})

console.log(ilosc)

let numerki = [1, 2, 3, 4, 5, 6]

let sum = 0;

numerki.forEach(item => {
    sum += item
})

console.log(sum)

let numerki2 = numerki.map(mnozenie)

function mnozenie(item) {
    return item * 2;
}

console.log(numerki)
console.log(numerki2)

let uzytkownicy = [
    {imie: "Morel",
    wiek: 26,
    but: 40,
    log: true},
    {imie: "Olek",
    wiek: 30,
    but: 35,
    log: true},
    {imie: "Kubeb",
    wiek: 17,
    but: 39,
    log: false}
]

console.log('Hello, baby! Lets go');

//deklarieren

function sayHi() {
    console.log('HI');
}

//calling
sayHi();

function aufDieBremseTreten() {
    console.log('BremsLicht links');
    console.log('BremsLicht rechts');
    console.log('BremsLicht mitte');
    console.log('Bremsen vorne');
    console.log('Bremsen hinten');
}

aufDieBremseTreten();

let inputName = document.getElementById('input-name');
let inputEmail = document.getElementById('input-email');
let formOutput = document.getElementById('form-output');

function showForm() {
    console.log('funktion work');
    console.log(inputName.value);
    console.log(inputEmail.value);
    formOutput.innerHTML = inputName.value + ", du bist jetzt angemeldet!";
};

let inputVolume = document.getElementById('volume');
console.log(inputVolume);

function showVolume() {
    console.log('Volume works');
    console.log(inputVolume.value);
    console.log(typeof inputVolume.value);
};

// typeof ist ein Kontrolltool zur Abfrage des Datentyps
let x = 10;
console.log(typeof x);
let y = "10";
console.log(typeof y);
let z = true;
console.log(typeof z);

// class list

let div = document.getElementById('box');

function dark() {
    console.log('dark');
    div.classList.add('dark');
}

function light() {
    console.log('light');
    div.classList.remove('dark');
}

function toggleMode() {
    console.log('toggleMode');
    div.classList.toggle('dark');
}



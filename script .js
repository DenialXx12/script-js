console.log('\n=== ЗАВДАННЯ 1: Змінна age ===');
let age = 25;
console.log('Мій вік:', age);


console.log('\n=== ЗАВДАННЯ 2: Змінна name ===');
let name = 'Олексій';
console.log('Моє ім\'я:', name);


console.log('\n=== ЗАВДАННЯ 3: Змінна isStudent ===');
let isStudent = true;
console.log('Чи є студентом:', isStudent);


console.log('\n=== ЗАВДАННЯ 4: Змінна myString ===');
let myString = 'Життя прекрасне, коли ти знаєш програмування!';
console.log('Улюблена цитата:', myString);


console.log('\n=== ЗАВДАННЯ 5: Змінна myNumber ===');
let myNumber = 15;
console.log('Початкове значення myNumber:', myNumber);
myNumber = myNumber + 10;
console.log('myNumber після додавання 10:', myNumber);


console.log('\n=== ЗАВДАННЯ 6: Змінна myNull ===');
let myNull = null;
console.log('Значення myNull:', myNull);


console.log('\n=== ЗАВДАННЯ 7: Prompt ===');
let userName = prompt('Введіть своє ім\'я');
console.log('Введене ім\'я:', userName);
console.log('Тип змінної userName:', typeof userName);

if (userName !== null && userName !== '') {
    alert('Привіт, ' + userName + '!');
} else {
    alert('Ви не ввели ім\'я або відмінили дію');
}

console.log('\n=== ЗАВДАННЯ 8: Confirm ===');
let userAnswer = confirm('Ви дійсно хочете покинути сторінку?');
console.log('Відповідь користувача:', userAnswer);
console.log('Тип змінної userAnswer:', typeof userAnswer);

if (userAnswer === true) {
    console.log('Користувач натиснув ОК - хоче покинути сторінку');
    alert('Ви підтвердили вихід зі сторінки');
} else {
    console.log('Користувач натиснув CANCEL - залишається на сторінці');
    alert('Ви вирішили залишитись на сторінці');
}


console.log('\n=== ЗАВДАННЯ 9: Alert + Confirm ===');


alert('Увага! Дія може бути небезпечною.');


let confirmDangerous = confirm('Ви впевнені, що хочете продовжити?');
console.log('Підтвердження небезпечної дії:', confirmDangerous);

if (confirmDangerous === true) {
    alert('Дію підтверджено. Продовжуємо...');
    console.log('Користувач підтвердив небезпечну дію');
} else {
    alert('Дію скасовано. Безпека понад усе!');
    console.log('Користувач скасував небезпечну дію');
}
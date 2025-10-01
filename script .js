// Завдання 1
const celsius = 25;
const fahrenheit = (celsius * 9/5) + 32;
console.log(`Температура: ${celsius}°C = ${fahrenheit}°F`);

// Завдання 2
const daysInMonth = 30;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = hoursInMonth * 60;
console.log(`Днів у місяці: ${daysInMonth}`);
console.log(`Годин у місяці: ${hoursInMonth}`);
console.log(`Хвилин у місяці: ${minutesInMonth}`);

// Завдання 3
let health = 100;
let energy = 100;
health = health - 20;
energy = energy - 30;
console.log(`Здоров'я гравця: ${health}`);
console.log(`Енергія гравця: ${energy}`);

// Завдання 4
const totalPrice = 1000;
const discount = 10;
const discountedPrice = totalPrice - (totalPrice * discount / 100);
console.log(`Початкова ціна: ${totalPrice}`);
console.log(`Ціна зі знижкою ${discount}%: ${discountedPrice}`);

// Завдання 5
const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);
console.log(`Число: ${floatNumber}, округлене до меншого: ${roundedDown}`);

// Завдання 6
const floatString = "45.67";
const parsedFloat = parseFloat(floatString);
console.log(`Рядок "${floatString}" перетворено у число: ${parsedFloat}`);

// Завдання 7
const intString = "123";
const parsedInt = parseInt(intString);
console.log(`Рядок "${intString}" перетворено у ціле число: ${parsedInt}`);

// Завдання 8
const number = 64;
const sqrtNumber = Math.sqrt(number);
console.log(`Квадратний корінь з ${number}: ${sqrtNumber}`);

// Завдання 9
const integer = 42;
const stringNumber = "256";
const convertedInt = parseInt(stringNumber);
const convertedString = integer.toString();
console.log(`Рядок "${stringNumber}" перетворено у число: ${convertedInt}`);
console.log(`Число ${integer} перетворено у рядок: "${convertedString}"`);

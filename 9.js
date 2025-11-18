// ЗАВДАННЯ 1
function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

logItems(['Mango', 'Poly', 'Ajax']);
// ЗАВДАННЯ 2
function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(' ');
  return words.length * pricePerWord;
}

console.log(calculateEngravingPrice('JavaScript is awesome', 10));

// ЗАВДАННЯ 3
function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumps over the lazy dog'));
// ЗАВДАННЯ 4
function formatString(string) {
  if (string.length <= 40) {
    return string;
  }
  return string.slice(0, 40) + '...';
}

console.log(formatString('This is a short string'));
console.log(formatString('This is a very long string that will definitely exceed forty symbols'));
// ЗАВДАННЯ 5
function checkForSpam(message) {
  const lowerMessage = message.toLowerCase();
  return lowerMessage.includes('spam') || lowerMessage.includes('sale');
}

console.log(checkForSpam('This is SPAM message'));
console.log(checkForSpam('Hello friend'));
console.log(checkForSpam('Sale is happening'));
// ЗАВДАННЯ 6
let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введіть число:');

  if (input === null) {
    break;
  }

  const num = Number(input);

  if (isNaN(num) || input.trim() === '') {
    alert('Було введено не число, попробуйте ще раз');
  } else {
    numbers.push(num);
  }
}

if (numbers.length > 0) {
  for (let num of numbers) {
    total += num;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
}

// ЗАВДАННЯ 7
function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  if (!isLoginValid(login)) {
    return 'Помилка! Логін повинен бути від 4 до 16 символів';
  }

  if (!isLoginUnique(allLogins, login)) {
    return 'Такий логін уже використовується!';
  }

  allLogins.push(login);
  return 'Логін успішно доданий!';
}

const logins = ['user123', 'admin', 'john_doe'];
console.log(addLogin(logins, 'nova_user'));
console.log(addLogin(logins, 'user123'));
console.log(addLogin(logins, 'abc'));
console.log(logins);

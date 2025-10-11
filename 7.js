// Завдання 1
console.log('Завдання 1:');
var numbers = [5, 8, 12];
console.log('До зміни:', numbers);
numbers[1] = 10;
console.log('Після зміни:', numbers);

// Завдання 2
console.log('Завдання 2:');
var strings = ['привіт', 'світ', 'JavaScript'];
console.log('До додавання:', strings);
strings[3] = 'масиви';
console.log('Після додавання:', strings);

// Завдання 3
console.log('Завдання 3:');
var nums = [2, 5, 8, 3, 7];
var sum = 0;
for (var i = 0; i < nums.length; i = i + 1) {
  sum = sum + nums[i];
}
console.log('Масив:', nums);
console.log('Сума всіх чисел:', sum);

// Завдання 4
console.log('Завдання 4:');
var fiveNumbers = [10, 20, 30, 40, 50];
for (var i = 0; i < fiveNumbers.length; i = i + 1) {
  console.log(fiveNumbers[i]);
}

// Завдання 5
console.log('Завдання 5:');
var words = ['кіт', 'собака', 'слон', 'жираф', 'мураха'];
for (var i = 0; i < words.length; i = i + 1) {
  if (words[i].length > 5) {
    console.log(words[i]);
  }
}

// Завдання 6
console.log('Завдання 6:');
var tenNumbers = [3, 15, 7, 22, 9, 45, 12, 8, 30, 18];
var max = tenNumbers[0];
for (var i = 1; i < tenNumbers.length; i = i + 1) {
  if (tenNumbers[i] > max) {
    max = tenNumbers[i];
  }
}
console.log('Масив:', tenNumbers);
console.log('Максимальне значення:', max);

// Завдання 7
console.log('Завдання 7:');
var numbersArray = [12, 7, 18, 5, 24, 9, 16, 3, 20, 11];
console.log('Масив:', numbersArray);
console.log('Парні числа:');
for (var i = 0; i < numbersArray.length; i = i + 1) {
  if (numbersArray[i] % 2 === 0) {
    console.log(numbersArray[i]);
  }
}

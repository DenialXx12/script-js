// Завдання 1
console.log('Завдання 1:');
var i = 1;
while (i <= 10) {
  console.log(i);
  i = i + 1;
}

// Завдання 2
console.log('Завдання 2:');
for (var i = 2; i <= 20; i = i + 1) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// Завдання 3
console.log('Завдання 3:');
for (var i = 1; i <= 10; i = i + 1) {
  console.log('7 x ' + i + ' = ' + 7 * i);
}

// Завдання 4
console.log('Завдання 4:');
var n = 15;
for (var i = 1; i <= 20; i = i + 1) {
  if (i >= n) {
    break;
  }
  console.log(i);
}

// Завдання 5
console.log('Завдання 5:');
var j = 1;
while (j <= 20) {
  if (j % 3 === 0) {
    j = j + 1;
    continue;
  }
  console.log(j);
  j = j + 1;
}

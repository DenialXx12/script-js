
  // Завдання 1
  const result = 5 + 5 + '5';
  console.log('Завдання 1:');
  console.log('result =', result);
  console.log('Тип змінної result:', typeof result);

  // Завдання 2
  const email = 'example@test.com';
  const hasAtSymbol = email.includes('@');
  const totalCharacters = email.length;
  console.log('\nЗавдання 2:');
  console.log('Email:', email);
  console.log('Містить символ @:', hasAtSymbol);
  console.log('Загальна кількість символів:', totalCharacters);

  const ds = 1;

  // Завдання 3
  const word1 = 'My';
  const word2 = 'name';
  const word3 = 'is';
  let fullName = word1 + ' ' + word2 + ' ' + word3;
  fullName = fullName + ' Viktor';
  console.log('\nЗавдання 3:');
  console.log('fullName:', fullName);

  // Завдання 4
  const userName = 'Олександро';
  const payment = 300;
  const message = `Дякуємо, ${userName}! До сплати ${payment} гривень`;
  console.log('\nЗавдання 4:');
  console.log('Повідомлення:', message);

  // Показуємо alert при завантаженні компонента
  setTimeout(() => {
    alert(message);
  }, 500);
// 1. Напиши скрипт, який об'єднує всі елементи масиву в один рядок через for
for (let i = 0; i < friends.length; i++) {
  string += friends[i];
  if (i < friends.length - 1) {
    string += ',';
  }
}
console.log('Завдання 1 (через for):', string);

// 1. Напиши скрипт, який об'єднує всі елементи масиву через join()
const stringJoin = friends.join(',');
console.log('Завдання 1 (через join):', stringJoin);



// 2. Робота з колекцією карток в trello
const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

console.log('Вихідна колекція:', cards);



// 3. Видалення (по індексу), метод indexOf()
const cardToRemove = 'Карточка-3';
const indexToRemove = cards.indexOf(cardToRemove);
if (indexToRemove !== -1) {
  cards.splice(indexToRemove, 1);
  console.log('Завдання 3 (видалити картку-3):', cards);
}



// 4. Додавання (по індексу)
const cardToInsert = 'Карточка-6';
const insertIndex = 2;
cards.splice(insertIndex, 0, cardToInsert);
console.log('Завдання 4 (додати картку-6 на позицію 2):', cards);



// 5. Оновлення (по індексу)
const cardToUpdate = 'Карточка-4';
const updateIndex = cards.indexOf(cardToUpdate);
if (updateIndex !== -1) {
  cards[updateIndex] = 'Карточка-4-оновлена';
  console.log('Завдання 5 (оновити картку-4):', cards);
}

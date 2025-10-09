  // Task 1
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [task1Result, setTask1Result] = useState('');

  // Task 2
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [task2Result, setTask2Result] = useState('');

  // Task 3
  const [text, setText] = useState('');
  const [task3Result, setTask3Result] = useState('');

  // Task 4
  const [number, setNumber] = useState('');
  const [task4Result, setTask4Result] = useState('');

  // Task 5
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [task5Result, setTask5Result] = useState('');

  // Task 6
  const [beverage, setBeverage] = useState('');
  const [task6Result, setTask6Result] = useState('');

  // Task 7
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [task7Result, setTask7Result] = useState('');

  // Task 8
  const [month, setMonth] = useState('');
  const [task8Result, setTask8Result] = useState('');

  // Task 9
  const [color, setColor] = useState('');
  const [task9Result, setTask9Result] = useState('');

  // Task 10
  const [calcNum1, setCalcNum1] = useState('');
  const [calcNum2, setCalcNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [task10Result, setTask10Result] = useState('');

  const handleTask1 = () => {
    if (field1 !== '' && field2 !== '') {
      setTask1Result('Обидва поля заповнені');
    } else {
      setTask1Result('Не всі поля заповнені');
    }
  };

  const handleTask2 = () => {
    const sum = Number(num1) + Number(num2);
    if (sum > 10) {
      setTask2Result('Сума більша за 10');
    } else {
      setTask2Result('Сума менша або дорівнює 10');
    }
  };

  const handleTask3 = () => {
    if (text.includes('JavaScript')) {
      setTask3Result('Текст містить слово JavaScript');
    } else {
      setTask3Result('Текст не містить слово JavaScript');
    }
  };

  const handleTask4 = () => {
    const num = Number(number);
    if (num > 10 && num < 20) {
      setTask4Result('Число входить в діапазон від 10 до 20');
    } else {
      setTask4Result('Число не входить в діапазон від 10 до 20');
    }
  };

  const handleTask5 = () => {
    const isNameValid = name.length >= 3;
    const isEmailValid = email.includes('@') && email.indexOf('.') > email.indexOf('@');
    const isPasswordValid = password.length >= 6;

    if (isNameValid && isEmailValid && isPasswordValid) {
      setTask5Result('Перенаправлення на іншу сторінку');
    } else {
      setTask5Result('Помилка: неправильне заповнення');
    }
  };

  const handleTask6 = () => {
    switch (beverage) {
      case 'Кава':
        setTask6Result('Ви обрали Каву');
        break;
      case 'Чай':
        setTask6Result('Ви обрали Чай');
        break;
      case 'Сік':
        setTask6Result('Ви обрали Сік');
        break;
      default:
        setTask6Result('Будь ласка, оберіть напій');
    }
  };

  const handleTask7 = () => {
    const day = dayOfWeek.toLowerCase();
    switch (day) {
      case 'понеділок':
      case 'вівторок':
      case 'середа':
      case 'четвер':
      case "п'ятниця":
        setTask7Result('Це робочий день');
        break;
      case 'субота':
      case 'неділя':
        setTask7Result('Це вихідний день');
        break;
      default:
        setTask7Result('Будь ласка, введіть правильний день тижня');
    }
  };

  const handleTask8 = () => {
    const monthNum = Number(month);
    switch (monthNum) {
      case 12:
      case 1:
      case 2:
        setTask8Result('Зима');
        break;
      case 3:
      case 4:
      case 5:
        setTask8Result('Весна');
        break;
      case 6:
      case 7:
      case 8:
        setTask8Result('Літо');
        break;
      case 9:
      case 10:
      case 11:
        setTask8Result('Осінь');
        break;
      default:
        setTask8Result('Будь ласка, введіть номер місяця від 1 до 12');
    }
  };

  const handleTask9 = () => {
    const colorLower = color.toLowerCase();
    switch (colorLower) {
      case 'червоний':
        setTask9Result('Стоп');
        break;
      case 'зелений':
        setTask9Result('Йти');
        break;
      case 'жовтий':
        setTask9Result('Чекати');
        break;
      default:
        setTask9Result('Невідомий колір світлофора');
    }
  };

  const handleTask10 = () => {
    const num1 = Number(calcNum1);
    const num2 = Number(calcNum2);
    let result;

    switch (operator) {
      case '+':
        result = num1 + num2;
        setTask10Result(`Результат: ${result}`);
        break;
      case '-':
        result = num1 - num2;
        setTask10Result(`Результат: ${result}`);
        break;
      case '*':
        result = num1 * num2;
        setTask10Result(`Результат: ${result}`);
        break;
      case '/':
        if (num2 === 0) {
          setTask10Result('Попередження: Ділення на нуль неможливе!');
        } else {
          result = num1 / num2;
          setTask10Result(`Результат: ${result}`);
        }
        break;
      default:
        setTask10Result('Невідома операція');
    }
  };
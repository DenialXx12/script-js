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
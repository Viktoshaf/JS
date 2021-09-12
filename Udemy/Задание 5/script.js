/*Дополнить свою программу по видео

1) Написать проверку, что пользователь может:

·        Ввести в дополнительных доходах (chooseIncome) только строку

·        Не может оставить строку пустой

·        Не может отменить вопрос

2) При помощи метода перебора массива(forEach) вывести на экран сообщение "Способы доп. заработка: " и полученные способы (внутри chooseIncome)

·        Товары должны начинаться с 1, а не с 0. Выполняем этот пункт в chooseIncome.

3) Используя цикл for in для объекта (appData) вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести весь appData)

4) Проверить, чтобы все работало и не было ошибок в консоли

5) Добавить папку с уроком на свой GitHub
Вопросы к этому заданию

Как перебрать свойства объекта?
Использовать цикл по свойствам for..in.
*/




let time = prompt('Введите дату в формате YYYY-MM-DD','');
let money = +prompt('Ваш бюджет на месяц?','');
function detectDayBudget () {
    let dayBeget = alert(money/30);
    while (money == '' || money == null || isNaN(money)) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
//detectDayBudget ();

function detectLevel(){
    if (money/30 > 0 && money/30 < 500) {
    alert("Достаточно");
} else if (money/30 >= 500 && money/30 < 3000) {
    alert("Неплохо");
} else if (money/30 >= 3000) {
    alert("Отлично");
} else {
    alert("Произошла ошибка");
}
}
//detectLevel();

let appData = {
    budget : money,
    newTime : time,
    expenses: {},
    optionalExpenses : {},
    income: [],
    savings: false
};

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        appData.optionalExpenses[i] = prompt("Статья необязательных расходов?","");
    }
}
chooseOptExpenses();

for (let i = 0; i < 2; i++) {
    const a = prompt('Введите обязательную статью расходов в этом месяце', ''),
          b = prompt('Во сколько обойдется?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}


function chooseIncome () {
    for (let i = 0; i < 2; i++) {
        let incomes = prompt("Ваши дополнительные доходы:");

        if (incomes === '' || incomes == null) {
            console.log('Вы ввели некорректные данные или не ввели их вовсе');
            i--;
        } else {
            appData.income[i] = incomes,
            appData.income.forEach((item, i) => {
                console.log(`Способы доп. заработка: ${i + 1} - это ${item}`);
            });
        } 
    }}

chooseIncome ();

for (let prop in appData) {
    console.log(prop + ": " + appData[prop]);
  }



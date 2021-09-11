/*Дополнить нашу программу по видео.

1) Оформить расчет дневного бюджета  и вывод на экран этого значения как одну функцию (detectDayBudget)

2) Оформить блок кода с расчетом уровня достатка как отдельную функцию (detectLevel)


3) Создать функцию для определения необязательных расходов (chooseOptExpenses):

Необходимо 3 раза спросить у пользователя “Статья необязательных расходов?”

Записать ответы в объект optionalExpenses в формате Номер - Ответ.

    optionalExpenses: {
    1 : “ответ на вопрос”
    }

Вызывать функции не обязательно.


4) Добавить папку с третьим уроком на GitHub
Вопросы к этому заданию

Что значит () после названия функции?
Значит, что функция выполняет какое-то действие с аргументами
*/

let time = prompt('Введите дату в формате YYYY-MM-DD','');
let money = +prompt('Ваш бюджет на месяц?','');
function detectDayBudget () {
    let dayBeget = alert("Ваш бюджет на день составляет", money/30);
    while (money == '' || money == null || isNaN(money)) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
detectDayBudget ();

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
detectLevel();

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

/*for (let i = 0; i < 2; i++) {
    const a = prompt('Введите обязательную статью расходов в этом месяце', ''),
          b = prompt('Во сколько обойдется?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}*/




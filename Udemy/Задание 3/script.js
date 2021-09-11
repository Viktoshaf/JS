
/*1) Переписать наш цикл for еще двумя способами и закомментировать их (еще 2 вида циклов, тренируемся)

2) Проверить, чтобы все работало и не было ошибок в консоли

3) Добавить папку со вторым уроком в свой репозиторий на GitHub

Вопросы к этому заданию
Сколько видов циклов существует в JS?*/

let money = +prompt('Ваш бюджет на месяц?','');
let time = prompt('Введите дату в формате YYYY-MM-DD','');


let appData = {
    budget : money,
    newTime : time,
    expenses: {},
    optionalExpenses : {},
    income: [],
    savings: false
};

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

if (money/30 > 0 && money/30 < 500) {
    alert("Достаточно");
} else if (money/30 >= 500 && money/30 < 3000) {
    alert("Неплохо");
} else if (money/30 >= 3000) {
    alert("Отлично");
} else {
    alert("Произошла ошибка");
}

console.log(appData);
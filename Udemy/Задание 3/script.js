
/*1) Переписать наш цикл for еще двумя способами и закомментировать их (еще 2 вида циклов, тренируемся)

2) Проверить, чтобы все работало и не было ошибок в консоли

3) Добавить папку со вторым уроком в свой репозиторий на GitHub

Вопросы к этому заданию
Сколько видов циклов существует в JS?
3 вида циклов:

while – Проверяет условие перед каждой итерацией.
do..while – Проверяет условие после каждой итерации.
for (;;) – Проверяет условие перед каждой итерацией, есть возможность задать дополнительные настройки.*/

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


/*let i = 0;
while (i<2) {
    const a = prompt('Введите обязательную статью расходов в этом месяце', ''),
          b = prompt('Во сколько обойдется?', '');
          i++;
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b;
        console.log('done');
    } else {
            console.log('error');
            i--;
        }
}*/

let i = 0;
do {const a = prompt('Введите обязательную статью расходов в этом месяце', ''),
b = prompt('Во сколько обойдется?', '');
i++;
if (a != null && b != null && a != '' && b != '' && a.length < 50) {
appData.expenses[a] = b;
console.log('done');
} else {
  console.log('error');
  i--;
    } 
}while (i<2);


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
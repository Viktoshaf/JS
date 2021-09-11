/*Задачи на понимание основ JS (с реальных собеседований)

Ответьте на вопросы. Если возникают затруднения - воспользуйтесь выводом в консоль (console.log())

Вопросы к этому заданию
Какое будет выведено значение: let x = 5; alert( x++ ); ?
5, т.к это постфиксная форма

Чему равно такое выражение: [ ] + false - null + true ?
NaN, т.к. операция производится с раными типами данных

Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
2 (сначала присвоили x значение y=1, затем присвоили x и y значение 2)

Чему равна сумма [ ] + 1 + 2?
12, т.к. просиходит конкатенация(сложение строк)

Что выведет этот код: alert( "1"[0] )?
1

Чему равно 2 && 1 && null && 0 && undefined ?
null, т.к. && возвращает первый операнд, который дает false

Есть ли разница между выражениями? !!( a && b ) и (a && b)?
Да, !! приводит операнд к логическому типу. Во втором случае тип будет определяться операндами a и b 

Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
Выведет 3: 
null || (2 && 3) || 4
null приводится к false, поэтому получаем

(2 && 3) || 4

3 || 4
и получаем 3.


a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
Нет, a и b указывают на разные объекты в разных местах памяти, поэтому они не считаются равными.

Что выведет этот код: alert( +"Infinity" ); ?
Infinity, т.к. это числовое значение

Верно ли сравнение: "ёжик" > "яблоко"?
В консоли мы получим true, т.к. идет сравнение кодов символов.
А должно быть наоборот. потому чтобы получить верное значение, запишем так:
alert( collator.compare("ёжик", "яблоко") ); // -1 (ёжик меньше, верно)

Чему равно 0 || "" || 2 || undefined || true || falsе ?

*/

console.log("ёжик" > "яблоко");
alert( collator.compare("ёжик", "яблоко") );

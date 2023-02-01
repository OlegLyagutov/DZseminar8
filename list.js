// Задание 1.

// 1. В html создать кнопку button
// 2. После загрузки страницы вывести в консоль текст 
// “страница загрузилась”
// 3. Добавить событие onclick которое выводит в консоль 
// текст “событие onclick”
// 4. Добавить событие addEventListener которое выводит 
// в консоль текст “событие addEventListener”


// window.addEventListener('load', function (e) {
//     console.log(`страница загрузилась`);
// });    
// const buttonEl = document.querySelector(`button`);
// buttonEl.onclick = function() {
//     console.log(`событие onclick`);
// }
// buttonEl.addEventListener(`click`, function(e) {
//     console.log(`событие addEventListener`);
// });

// Задание 2.
// 1. Создать в html три кнопки button с нумерацией 
// (1, 2, 3 соответственно)
// const body = document.querySelector(`body`);
// let countButton = 3;
// for (let i = 1; i <= countButton; i++) {

// const element = countButton;
// const buttonEl = document.createElement(`button`);
// buttonEl.textContent = `Кнопка ${[i]}`;
// body.appendChild(buttonEl);
// buttonEl.classList.add(`button`);
// }

// // 2. Добавить клик на кнопку , чтобы в консоль выводилась 
// // именно та кнопка на которую мы нажали
// const buttonEl = document.querySelectorAll(`.button`);
// function clickButton(e) {
//     const target = e.target;
//     console.log(target);
// }
// buttonEl.forEach((element) => {
//     element.addEventListener("click", clickButton);
// });
// // 3. Добавить кнопку button с текстом 4, которая считает 
// // сколько раз на нее нажали и количество нажатий на эту 
// // кнопку выводит в консоль
// const buttonCount = document.createElement(`button`);
// buttonEl.textContent = `Other Button`;
// body.appendChild(buttonCount);

// let count = 0;
// buttonCount.addEventListener('click', function (e) {
//     count = (count || 0) +1;
// buttonCount.textContent = count;
// console.log(count);
// });
// // 4. Создать кнопку button с текстом 5, При клике на которую, 
// // меняется текст данной кнопки на “Вы нажали на эту кнопку”
// const buttonText = document.createElement(`button`);
// buttonText.textContent = `Button Text`;
// body.appendChild(buttonText);

// let counter = 0;
// buttonText.addEventListener('click', function (e) {
// buttonText.textContent = 
// counter % 2 ? `Вы нажали эту кнопку` : `Нажми ущё раз`;
// // if (counter % 2 === 0) {
// //     buttonText.textContent = `Вы нажали на эту кнопку`;
// // } else {
// //     buttonText.textContent = `Нажми ещё раз`;
// // }
// counter++;
// if (counter >= 10) {
//     alert(`Не тыкай так часто`);
// }
// });


// Задача 3

// 1. Создать кнопку, которая добавляем заголовок h1 с 
// текстом, “Новый заголовок, данный элемент нужно 
// расположить после кнопки
// const body = document.querySelector('body');
// const buttonEl = document.createElement(`button`);
// console.log(buttonEl);
// buttonEl.textContent = `PRESS`;
// buttonEl.style.border = `1px solid black`;
// body.appendChild(buttonEl);
// buttonEl.addEventListener(`click`, () => {
//     buttonEl.textContent = `press`;
// });

// // 2. Создать вторую кнопку, которая будет удалять 
// // созданный заголовок h1

// const contentEl = document.querySelector('.content');
// const buttonAdd = document.querySelector('.btn-add');
// const buttonDel = document.querySelector('.btn-del');
// const button3El = document.querySelector('.button3');

// const h1El = document.createElement(`h1`);
// h1El.textContent = `Новый элемент`;

// buttonAdd.addEventListener(`click`, function (e) {
//     contentEl.appendChild(h1El);
// });
// buttonDel.addEventListener(`click`, function (e) {
//     h1El.remove();
// });

// // 3.  Создать третью кнопку, при наведении на которую 
// // в консоль будет выводиться текст “вы навели на данную 
// // кнопку” , как только вы убираем курсор мыши с кнопки, 
// // в консоли должен появиться текст “Наведения на кнопку 
// // больше нет”
// button3El.addEventListener(`mouseover`, function (e) {
//     console.log(`навёл`);
// });
// button3El.addEventListener(`mouseout`, function (e) {
//     console.log(`убрал`);
// });

// Задание 4

// 1. Создать в html список состоящий из 3-х произвольных 
// элементов li
// 2. Нужно создать кнопку которая будет добавлять элементы 
// списка с текстом “новый элемент списка”
// const menuUl = document.querySelector(`.menu`);
// const menuList = document.querySelector(`.menu_list`);
// const content = document.querySelector(`.content`);

// const button = document.createElement(`button`);
// button.textContent = `Add`;
// content.appendChild(button);
// const menuLi = document.createElement(`li`);
// menuLi.textContent = `новый элемент списка`;
// button.addEventListener(`click`, function(e) {
//     menuUl.appendChild(menuLi);
// });

// // 3. Создать кнопку, которая будет удалять первый элемент 
// // из созданного списка
// const buttonRemove = document.createElement(`button`);
// buttonRemove.textContent = `Remove`;
// content.appendChild(buttonRemove);
// buttonRemove.addEventListener(`click`, function () {
//     menuList.remove();
// });

// // 4. Создать кнопку, при клике на которую ей добавляется 
// // класс “click”
// const buttonAddClass = document.createElement(`button`);
// buttonAddClass.textContent = `Добавить класс`;
// content.appendChild(buttonAddClass);
// buttonAddClass.addEventListener(`click`, function (e) {
//     menuLi.classList.add(`click`);
// });

// ДЗ
// 1. Необходимо вывести сообщение в консоль "все теги 
// прогрузились", когда все теги будут созданы браузером.

window.onload=function(e){
    console.log(`все теги прогрузились`);
}
// 2. Необходимо вывести сообщение в консоль "страница 
// загрузилась", когда все ресурсы страницы будут загружены.
window.addEventListener('load', function (e) {
        console.log(`страница загрузилась`);
    });
// 3. При клике на какой-либо тег на странице в консоль 
// должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует 
// класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег 
// в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.
const bodyElement = document.querySelector(`body`);
bodyElement.addEventListener(`click`, function (e) {
    let target = e.target;
    if (target.className ===`super_element`) {
        console.log(target);
console.log(`Класс "super_element" присутствует в элементе ${target.outerHTML}`);
    } else {
        console.log(`Класс "super_element" отсутствует в элементе ${target.outerHTML}`);
    }
    });
// 4. Сделайте, чтобы при наведении на textarea в консоли 
// появлялось сообщение: "Вы навели на textarea."
const textElement = document.querySelector(`textarea`);
textElement.addEventListener(`mouseover`, function (e) {
        console.log(`Вы навели на textarea`);
    });
    
// 5. Необходимо повесить событие клика на тег ul. В обработчике 
// события в консоль необходимо выводить текст, который записан 
// внутри элемента кнопки, по которой был произведен клик. Если 
// клик был не по кнопке, то ничего выводить не нужно. Необходимо
//  использовать делегирование.
const ulElement = document.querySelector(`ul`);
let counter = 0;
ulElement.addEventListener('click', function (e) {
    ulElement.textContent = counter % 2;
    console.log(`Вы нажали эту кнопку`);
});
// if (counter % 2 === 0) {
//     buttonText.textContent = `Вы нажали на эту кнопку`;
// 6. Вопрос: Почему в console.log пишется сначала текст из 
// 5 задания и только потом выводится текст из 3 задания, 
// если мы кликаем по кнопкам в ul? Ответ необходимо написать 
// здесь же, под этим комментарием, своими словами.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого
//  второго тега li.


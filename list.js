// ДЗ
// 1. Необходимо вывести сообщение в консоль "все теги 
// прогрузились", когда все теги будут созданы браузером.

// window.onload=function(e){
//     console.log(`все теги прогрузились`);
// }
// 2. Необходимо вывести сообщение в консоль "страница 
// загрузилась", когда все ресурсы страницы будут загружены.
// window.addEventListener('load', function (e) {
//         console.log(`страница загрузилась`);
//     });
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
// const textElement = document.querySelector(`textarea`);
// textElement.addEventListener(`mouseover`, function (e) {
//         console.log(`Вы навели на textarea`);
//     });
    
// 5. Необходимо повесить событие клика на тег ul. В обработчике 
// события в консоль необходимо выводить текст, который записан 
// внутри элемента кнопки, по которой был произведен клик. Если 
// клик был не по кнопке, то ничего выводить не нужно. Необходимо
//  использовать делегирование.

const ulElement = document.querySelector(`ul`);
const ulBut = document.querySelectorAll(`button`);
for (let i = 0; i < ulBut.length; i++) {
    const element = ulBut[i];
ulElement.addEventListener('click', function (e) {
    const target = e.target;
    if (target == element){
    console.log(target.textContent);
}
});
};

// 6. Вопрос: Почему в console.log пишется сначала текст из 
// 5 задания и только потом выводится текст из 3 задания, 
// если мы кликаем по кнопкам в ul? Ответ необходимо написать 
// здесь же, под этим комментарием, своими словами.

// Этот процесс называется «всплытием».
// Когда на элементе происходит событие, обработчики сначала 
// срабатывают на нём, потом на его родителе, затем выше и так 
// далее, вверх по цепочке предков.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого
//  второго тега li.
// const liElement = document.querySelectorAll(`li`);
// for (let i = 1; i < liElement.length; i+=2) {
//     liElement[i].style.backgroundColor = "red";
// }


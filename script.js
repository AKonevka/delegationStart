// метод event.stopPropagation() - препятствует продвижению события дальше 
// но на текущем элементе все обработчики обрабатывают

// метод - event.stopImmediatePropagation(); - предотвращает всплытие и останавиливает обработку
// событий на текущем элементе 

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');


// event.target - целевой элемент на котором произошло событие
elem1.addEventListener('click', (event) => {
    console.log(event.target);
})














let parent = document.querySelector('#parent');
let button = document.querySelector('button');
let block = document.querySelector('#block');

button.addEventListener('click', (event) => {
    block.classList.add('active');
    event.stopPropagation();
});

parent.addEventListener('click', () => {
    block.classList.remove('active');
});








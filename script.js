// jshint esversion:6

let button = document.querySelector('.btn');
let text = document.querySelector('.mainText');
let backpacks = document.querySelector('.backpack');
let authors = document.querySelector('.author');


let colors = ['blue', 'grey', 'red', 'yellow', 'orange'];

var authorNames = [
  {
      author: "Камю"
  }, 
  {
      author: "Канта"
  },
  {
      author: "Толстого"
  },
  {
      author: "Гоголя"
  },
];

var backpackNames = [
  {
    backpack: "Барсетка"
  }, 
  {
    backpack: "Рюкзак"
  },
  {
    backpack: "Сумка"
  },
  {
    backpack: "Бананка"
  },
];





button.addEventListener('click', randomNick);
function randomNick() {
  let randomColorIndex = Math.floor(Math.random() * colors.length);
  let randomAuthorName = Math.floor(Math.random() * authorNames.length);
  let randombackpackNames = Math.floor(Math.random() * backpackNames.length);
  authors.innerHTML = authorNames[randomAuthorName].author;//цитата
  backpacks.innerHTML =  backpackNames[randombackpackNames].backpack;//автор
  text.style.color = colors[randomColorIndex];
}
randomNick();
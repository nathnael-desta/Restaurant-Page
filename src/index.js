
import './style.css';
import { getBreakfast } from './breakfast';
import { getLunch } from './lunch';
import { getDinner } from './dinner';

let content = document.createElement('div');
content.classList.add("content");


let heading = document.createElement('div');
heading.classList.add('heading');
heading.innerHTML = "Baratie";
content.appendChild(heading);

const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svg.setAttribute("viewBox", "0 0 24 24");
const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("d", "M19.07,4.93C17.22,3 14.66,1.96 12,2C9.34,1.96 6.79,3 4.94,4.93C3,6.78 1.96,9.34 2,12C1.96,14.66 3,17.21 4.93,19.06C6.78,21 9.34,22.04 12,22C14.66,22.04 17.21,21 19.06,19.07C21,17.22 22.04,14.66 22,12C22.04,9.34 21,6.78 19.07,4.93M17,12V18H13.5V13H10.5V18H7V12H5L12,5L19.5,12H17Z");
svg.appendChild(path);
let home = document.createElement('div');
home.appendChild(svg);
home.classList.add('home');
heading.appendChild(home);

let main = document.createElement('div');
main.classList.add('main');

let breakfast = document.createElement("div");
breakfast.classList.add("breakfast");
breakfast.innerHTML = "Breakfast";
breakfast.classList.add('pages');
main.appendChild(breakfast);

let lunch = document.createElement('div');
lunch.classList.add('lunch');
lunch.innerHTML = "Lunch";
lunch.classList.add('pages');
main.appendChild(lunch);

let dinner = document.createElement('dinner');
dinner.classList.add("dinner");
dinner.innerHTML = "Dinner";
dinner.classList.add('pages');
main.appendChild(dinner);

content.appendChild(main);

document.body.appendChild(content);



let breakfastDiv = getBreakfast();
let lunchDiv = getLunch();
let dinnerDiv = getDinner();


breakfast.addEventListener('click', changeToBreakfast);
lunch.addEventListener('click', changeToLunch);
dinner.addEventListener('click', changeToDinner);
home.addEventListener('click', changeToHome);

function changeToBreakfast(){
    content.removeChild(main);
    content.appendChild(breakfastDiv);
}

function changeToLunch(){
    content.removeChild(main);
    content.appendChild(lunchDiv);
}

function changeToDinner(){
    content.removeChild(main);
    content.appendChild(dinnerDiv);
}

function changeToHome(){
    content.removeChild(content.lastChild);
    content.appendChild(main);
}
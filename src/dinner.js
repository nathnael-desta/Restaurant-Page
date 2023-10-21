let dinnerDiv = document.createElement('div');
dinnerDiv.classList.add('dinnerDiv');
dinnerDiv.classList.add('inner');

let div1 = document.createElement('div');
div1.classList.add('ddiv1');
div1.classList.add('items');

let div2 = document.createElement('div');
div2.classList.add('ddiv2');
div2.classList.add('items');

let div3 = document.createElement('div');
div3.classList.add('ddiv3');
div3.classList.add('items');



dinnerDiv.appendChild(div1);
dinnerDiv.appendChild(div2);
dinnerDiv.appendChild(div3);



export function getDinner() {
    return dinnerDiv;
}
let lunchDiv = document.createElement('div');
lunchDiv.classList.add('lunchDiv');
lunchDiv.classList.add('inner');

let div1 = document.createElement('div');
div1.classList.add('ldiv1');
div1.classList.add('items');

let div2 = document.createElement('div');
div2.classList.add('ldiv2');
div2.classList.add('items');

let div3 = document.createElement('div');
div3.classList.add('ldiv3');
div3.classList.add('items');



lunchDiv.appendChild(div1);
lunchDiv.appendChild(div2);
lunchDiv.appendChild(div3);



export function getLunch() {
    return lunchDiv;
}
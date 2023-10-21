let breakfastDiv = document.createElement('div');
breakfastDiv.classList.add('breakfastDiv');
breakfastDiv.classList.add('inner');



let div1 = document.createElement('div');
div1.classList.add('bdiv1');
div1.classList.add('items');


let div2 = document.createElement('div');
div2.classList.add('bdiv2');
div2.classList.add('items');



let div3 = document.createElement('div');
div3.classList.add('bdiv3');
div3.classList.add('items');






breakfastDiv.appendChild(div1);
breakfastDiv.appendChild(div2);
breakfastDiv.appendChild(div3);




export function getBreakfast() {
    return breakfastDiv;
}

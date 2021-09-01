let myList = document.getElementById('list');
let paragraph = document.querySelector('p');
let itemsOfList = myList.children;

let arrOutPut = [
    itemsOfList[0].textContent, 
    itemsOfList[4].textContent,
    itemsOfList[1].textContent,
    itemsOfList[3].textContent,
    itemsOfList[2].textContent
];

paragraph.innerText += ' ' + arrOutPut.join(', ');

itemsOfList = document.querySelectorAll('li');

arrOutPut = [
    itemsOfList[0].textContent,
    itemsOfList[4].textContent,
    itemsOfList[1].textContent,
    itemsOfList[3].textContent,
    itemsOfList[2].textContent
];

paragraph.innerText = "Output result: " + arrOutPut.join(', ');

document.querySelector('h1').style.backgroundColor = "lawngreen";

let paragraphs = document.getElementById('myDiv').children;

paragraphs[0].style.fontWeight = 700;
paragraphs[1].style.color = "red";
paragraphs[2].style.textDecoration = "underline";
paragraphs[3].style.fontStyle = "italic";

document.getElementById('myList').style.display = "flex";
document.getElementById('myList').style.listStyleType = "none";

document.querySelector('span').style.display = "none";

let button = document.getElementById('btn');
button.style.cursor = "pointer";

const newListEvents = document.createElement('ul');
newListEvents.className = "events";
newListEvents.style.listStyleType = "none";
newListEvents.style.padding = 0;

button.after(newListEvents);

function buttonEvent(str) {
    let newItemEvent = document.createElement('li');
    newItemEvent.innerText = str;
    document.querySelector('ul.events').append(newItemEvent);
}

button.addEventListener('click', () => {
    buttonEvent("I was pressed");
});

button.addEventListener('mouseleave', () => {
    buttonEvent("Mouse is not on me!");
});

button.addEventListener('mouseenter', () => {
    buttonEvent("Mouse on me!");
});

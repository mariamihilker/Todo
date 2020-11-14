//Call main
loadTodo();
toggleTodo();
//Main Function
function loadTodo() {
    document.querySelector('.todo-form').addEventListener('submit',todoAdd);
}

function todoAdd(e) {
    e.preventDefault();
    let todoList = document.querySelector('.items-list');
    let itemValue = document.querySelector('.item-input').value;    
    let newItem = document.createElement('li');
    newItem.innerHTML = `<a>${itemValue}</a>`;
    newItem.classList.add('active');
    if(itemValue != 0 ) {
        todoList.appendChild(newItem);
    }



}

function toggleTodo() {
    document.querySelector('.items-list').addEventListener('click',clickToggle);
}

function clickToggle(e) {
    console.log(e.target.parentElement)
    if(e.target.parentElement.classList.contains('active')) {
        e.target.parentElement.classList.add('done');
        e.target.parentElement.classList.remove('active');
    } else if(e.target.parentElement.classList.contains('done')) {
        e.target.parentElement.classList.add('active');
        e.target.parentElement.classList.remove('done');
    }
}


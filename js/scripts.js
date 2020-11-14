//Call main
loadTodo();

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

function activeItem() {
    let todoList = document.querySelector('.items-list li');
    todoList.forEach(function(item) {
        item.classList.add('active');
    })
}


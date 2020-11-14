//Call main
loadTodo();
//check Done item / or
toggleTodo();
//  remove checked items
deleteDone()

//Show items back to active from history
restoreHistory()


//Main Function
function loadTodo() {
    document.querySelector('.todo-form').addEventListener('submit',todoAdd);
}

function todoAdd(e) {
    e.preventDefault();
    let todoList = document.querySelector('.items-list');
    let itemValue = document.querySelector('.item-input').value;
    let inputField = document.querySelector('.item-input');  
    let newItem = document.createElement('li');
    newItem.innerHTML = `<a>${itemValue}</a>`;
    newItem.classList.add('active');
    if(itemValue != 0 ) {
        todoList.appendChild(newItem);
        inputField.value = '';
    }
}

//call function to check items as done
function toggleTodo() {
    document.querySelector('.items-list').addEventListener('click',clickToggle);
}
//Call function to delete done items
function deleteDone() {
    document.querySelector('.inactive-items').addEventListener('click',removeItem);
}


//call function to restore items from history
function restoreHistory() {
    document.querySelector('.history-list').addEventListener('click',restoreIrem);
}


//Making done items checked
function clickToggle(e) {
    let currElement = e.target.parentElement;
    let activeContainer = currElement.parentNode;
    let doneContainer = document.querySelector('.inactive-items');

    if(currElement.classList.contains('active')) {
        currElement.classList.add('done');
        currElement.classList.remove('active');
        activeContainer.removeChild(currElement);
        doneContainer.appendChild(currElement);
        let allActives = document.querySelector('.items-list').getElementsByTagName('li').length;
        document.querySelector('.done-items-title').classList.add('show');
        if(allActives === 0) {
            document.querySelector('.emty-items-title').classList.add('show');
        }

    } else if(currElement.classList.contains('done')) {
        currElement.classList.add('active');
        currElement.classList.remove('done');
        activeContainer.removeChild(currElement);
    }
}

//Remove when done item is clicked
function removeItem(e) {
    let currElement = e.target.parentElement;
    let doneContainer = document.querySelector('.inactive-items');
    let historyList = document.querySelector('.history-list');
    let allDone = document.querySelector('.inactive-items').getElementsByTagName('li').length;
    
    if(currElement.classList.contains('done')) { 
        doneContainer.removeChild(currElement);
        currElement.classList.add('history');
        currElement.classList.remove('done');
        historyList.appendChild(currElement);
        document.querySelector('.history-title').classList.add('show');
        console.log(allDone)
        if(allDone === 1) {
            document.querySelector('.done-items-title').classList.remove('show');
        }
    }

}

//Restore Item

function restoreIrem(e) {
    let currElement = e.target.parentElement;
    let activeContainer = document.querySelector('.items-list');
    let historyList = document.querySelector('.history-list');
    let historyEmpty = document.querySelector('.history-list').getElementsByTagName('li').length;
    if(currElement.classList.contains('history')) {
        currElement.classList.add('active');
        currElement.classList.remove('history');
        historyList.removeChild(currElement);
        activeContainer.appendChild(currElement);
        if(historyEmpty === 1) {
            document.querySelector('.history-title').classList.remove('show');
        }
    }
}

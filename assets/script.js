let inputElement = document.querySelector('input');
let formElement = document.querySelector('form');
let listElement = document.querySelector('ul');
let totalTasksElement = document.querySelector('#total-tasks');

let taskList = [
    "Gather supplies", 
    "Rally group"
];


//delete button functionality (trying to call li elemnent and remove its value)
function deleteItem(e) {
    let task = e.target.parentElement.previousElementSibling.innerHTML;
    let index = taskList.indexOf(task);
    if (index !== -1){
        taskList.splice(index, 1);
    }

    populateList();

}
function populateList() {
    listElement.innerHTML = " ";
    taskList.forEach(function(item){
        let newItem = document.createElement('li');

        //Add new span for text
        let span = document.createElement('span');
        span.innerHTML = item;
        newItem.appendChild(span);

        //Add delete button
        let anchorElement = document.createElement('a');
        anchorElement.classList.add('delete');
        anchorElement.innerHTML = '<i class= "far fa-times-circle"></i>';
        newItem.appendChild(anchorElement);

        //delete button functionality
        anchorElement.addEventListener('click', (e) => deleteItem(e));

        //Add li to ul
        listElement.appendChild(newItem);
    })
    //Changing Number of Tasks for the Header
    totalTasksElement.innerHTML = taskList.length;
    inputElement.value = " ";
}

populateList();

function doesNotHaveWhiteSpace(s){
    let stringWithoutSpace = s.trim();
    return stringWithoutSpace.length > 0;
} 

function addTask(){
if(inputElement.value && doesNotHaveWhiteSpace(inputElement.value)) {
    taskList.push(inputElement.value);
    populateList();
    }
}

formElement.addEventListener("submit", function(e) {
    e.preventDefault();
    addTask();
});
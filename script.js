//Creating variables and targeting elements
var todoList = document.getElementById('todoList');
var todoInput = document.getElementById('todoInput');
var addTodoButton = document.getElementById('todoButton');
var removeTodoButton = document.getElementById('removeButton');
var warningMessage = document.getElementById('warningMessage');

addTodoButton.addEventListener("click",function()
{
    //Creating a new list
    var newItem = document.createElement('li');
    newItem.innerText = todoInput.value;
    newItem.classList.add('form-control');

    //Checking that the input value is empty or not
    if(newItem.innerText == "")
    {
        warningMessage.innerHTML = "Please write something to add*";
        todoInput.focus();
    }
    else
    {
        //Creating a remove button with rmvBtn class
        var removeButton = document.createElement('button');
        removeButton.classList.add('rmvBtn');

        //Creating a font awesome cross icon for remove button
        var removeButtonIcon = document.createElement('i');
        removeButtonIcon.classList.add("fa") ;
        removeButtonIcon.classList.add("fa-times") ;

        //Adding cross icon to remove button
        removeButton.appendChild(removeButtonIcon);

        //Adding remove button to the list
        newItem.appendChild(removeButton);

        //Adding list item to main list
        todoList.appendChild(newItem);
        todoInput.value = "";

        //Removing item from the main list
        removeButton.addEventListener("click",function(){
            todoList.removeChild(newItem);
        });

        //Clearing input field
        warningMessage.innerHTML = "";
    }
});



//Remove first item from the list
function removeFirstItem(){
    var firstItem = document.getElementById('first-item');
    todoList.removeChild(firstItem);
}


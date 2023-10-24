function addTask (){
    const tasks= document.querySelector('#tasks');
    const task= document.querySelector('#task').value;
    const newTask=document.createElement('p');
    newTask.textContent=task;
    tasks.appendChild(newTask);
}

function delAllTask(){
    const list=document.querySelector('#tasks');
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function reload(){
    location.reload();
}
let taskinput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let addButton = document.getElementById("addButton");
addButton.addEventListener("click",function(){
    let task = taskinput.Value.trim();
    if(task === ""){
        alert("please enter a task");
        return;
    }
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = task;
    span.addEventListener("click",function(){
        span.classList.toggle("completed");
    });
    let deletebutton = document.createElement("button");
    deletebutton.textContent="delete";
    deletebutton.classList.add("delete");
    deletebutton.addEventListener("click",function(){
        li.remove();
    });
    li.appendChild(span);
    li.appendChild(deletebutton);
    taskList.appendChild(li);
    taskinput.value="";
});
taskinput.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        addButton.click();
    }
});



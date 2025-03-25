function addTask(){
    let taskInput =document.getElementById("taskInput");
    let taskText= taskInput.value.trim();

    if(taskText==""){
        alert("Digite uma tarefa valida!")
        return;
    }
    let taskList=document.getElementById("taskList");

    let item=document.createElement("li");
    item.innerHTML=`
    <span onclick="toggleTask(this)">${taskText}</span>
    <button class="delete-btn" onclick="deleteTask(this)">X</button>
    `
    taskList.appendChild(item);


}
function toggleTask(elemento){
    elemento.parentElement.classList.toggle("completed");
}
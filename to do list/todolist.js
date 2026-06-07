let input=document.querySelector("#input");
let add=document.querySelector("#addtask");
let container=document.querySelector(".container");
let taskcount=document.querySelector("h3");
let count=0;
add.addEventListener("click",()=>{
    if(input.value.trim()===""){
        return;
    }
    let task=document.createElement("div");
    task.classList.add("task");
    task.innerHTML=`
    <div class="left"><input type="checkbox" class="check">
    <p>${input.value}</p>
    <span class="delete">delete</span></div>
    `;
    container.appendChild(task);
    count++;
    taskcount.innerText=`tasks left: ${count}`;
    input.vlaue=""
    let deletebtn=task.querySelector(".delete")
    deletebtn.addEventListener("click",()=>{
        task.remove();
        count--;
        taskcount.innerText=`task left: ${count}`;
    });
    let checkbox=task.querySelector(".check");
    checkbox.addEventListener("click",()=>{
        task.classList.toggle(
            "completed"
        );
    });
});

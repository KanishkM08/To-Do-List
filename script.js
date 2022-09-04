document.querySelector('#push').onClick  = function() {
    if(document.querySelector('#taskInput').value.length == 0){
        alert("Please enter a task!")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
    <div class = "task">
        <span id = "taskname">
            ${document.querySelector('#taskInput').value}
        </span>
        <button class = "delete">
            <i class = "far fa-trash alt"></i>
        </button>
    </div>
`;
        var current_tasks = document.querySelectorAll(".delete");
        for(var i = 0 < current_tasks.length; i++;){
            current_tasks[i].onClick = function(){
                this.parentNode.remove();
            }
        }
    }
    document.querySelector('#taskInput').value = '';
}
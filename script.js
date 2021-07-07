"use strict"



let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


for (let task of tasks) {
    let taskList = document.getElementById("task-list");
    let li = document.createElement("li");

    if (task.includes("class=\"checked\"")) {
            task = task.replace("class=\"checked\"", "class=\"checked\" checked");
    }

    li.innerHTML = task;
    taskList.append(li);
}


document.getElementById("add-task-button")
    .addEventListener("click", function() {
        let taskList = document.getElementById("task-list");
        let inputTask = document.getElementById("input-task");
        let li = document.createElement("li");
        li.innerHTML = 
                `<input type="checkbox">
                <span class="task">${inputTask.value}</span>
                <button class="delete-btn" >+</button>`;
        taskList.append(li);
        inputTask.value = "";


        document.querySelector("#task-list li:last-child input[type=checkbox]")
            .addEventListener("click", function () {
                if (this.classList.contains("checked")) {
                    this.classList.remove("checked");
                    this.removeAttribute("checked");
                } else {
                    this.classList.add("checked");

                }
                updateLocalStorageTasks();
            });

            document.querySelector("#task-list li:last-child .delete-btn")
            .addEventListener("click", function () {
                this.parentNode.remove();
                updateLocalStorageTasks();
            });

        updateLocalStorageTasks();

        // tasks = [];
        // for (let task of document.querySelectorAll("li")) {
        //     tasks.push(task.innerHTML);
        // }

        // localStorage.setItem("tasks", JSON.stringify(tasks));

    });

for (let button of document.querySelectorAll(".delete-btn")) {
    button.addEventListener("click", function () {
        button.parentNode.remove();
        updateLocalStorageTasks();
        // tasks = [];
        // for (let task of document.querySelectorAll("li")) {
        //     tasks.push(task.innerHTML);
        // }

        // localStorage.setItem("tasks", JSON.stringify(tasks));
    });
}


for (let checkbox of document.querySelectorAll("input[type=checkbox]")) {
        checkbox.addEventListener("click", function () {
            if (checkbox.classList.contains("checked")) {
                checkbox.classList.remove("checked");
                checkbox.removeAttribute("checked");
                // checkbox.parentNode.innerHTML = checkbox.parentNode
                //     .innerHTML.replace("checked", "");
            } else {
                checkbox.classList.add("checked");
            }


            // tasks = [];
            // for (let task of document.querySelectorAll("li")) {
            //     tasks.push(task.innerHTML);
            // }

            // localStorage.setItem("tasks", JSON.stringify(tasks));
            updateLocalStorageTasks();
        });
}

function updateLocalStorageTasks() {
    tasks = [];
    for (let task of document.querySelectorAll("li")) {
        tasks.push(task.innerHTML);
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
}



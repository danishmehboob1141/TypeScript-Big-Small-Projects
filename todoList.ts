import * as promptSync from 'prompt-sync'
const input = new promptSync()

let taskList: string[] = []
function addTask(): void {                              // Add Task
    console.clear()
    showTaskList()
    let task: string = input("Add Task > ")
    taskList.push(task)
    console.clear()
}
function removeTask(): void {                           // Remove Task
    if (taskList.length == 0) {
        console.clear()
        console.log("------------------------------------------")
        console.log("Nothing to Remove. The task list is Empty!")
        console.log("------------------------------------------\n")
    } else {
        console.clear()
        showTaskList()
        let doneTask: number = input("Which task no. to remove? ")
        if (doneTask > taskList.length) {
            console.clear()
            console.log("Invalid Input! \n")
            removeTask()
        }
        for (let i=doneTask-1; i<taskList.length; i++)
            taskList[i] = taskList[i+1]
        taskList.pop()
        console.clear()
    }
}
function showTaskList(): void {                     // show task list
    if (taskList.length == 0) {
        console.clear()
        console.log("----------------To-Do List----------------")
        console.log("The List is Empty!")
        console.log("------------------------------------------\n")
    } else {
        console.clear()
        console.log("----------------To Do List----------------")
        for (let i=0; i<taskList.length; i++)
            console.log((i+1) + ". " + (taskList[i]))
        console.log("------------------------------------------\n")
    }
}

while (true) {
    console.clear()
    showTaskList()
    console.log("Add Task (1) \nRemove Task (2) \nTerminate Program (0) \n")
    let choice = input("Enter your choice > ")
    if (choice == 0)
        break
    if (choice == 1) {
        addTask()
    } else if (choice == 2) {
        removeTask()
    }else {
        console.clear()
        console.log("------------------------------------------")
        console.log("Invalid Input!")
        console.log("------------------------------------------\n")
    }
}
showTaskList()

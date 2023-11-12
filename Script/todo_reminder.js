(()=>{
    setInterval(async () => {
        let storage = localStorage
        let todoStore = storage.getItem("to-dos")
        let tasksMessage = ""

        if(todoStore != null && typeof todoStore == "string"){
            let todoList = JSON.parse(todoStore)
            for (let index = 0; index < todoList.length; index++) {
                for (let j = 0; j < todoList[index].todoTasks.length; j++) {
                    if (todoList[index].todoTasks[j].millisecondsFinish <= (Date.now() + 100000)) {
                        tasksMessage += `${todoList[index].todo_title}: ${todoList[index].todoTasks[j].taskText} \n`
                    }
                }
            }
            let permission = await Notification.requestPermission()
            if(permission == 'granted'){
                let notif = new Notification("You still have uncompleted tasks",{
                    renotify:true,
                    body:"Tasks \n"+tasksMessage,
                    requireInteraction:true,
                    icon:"",
                    image:"",
                    actions:[{}]
                })
                notif.addEventListener("click",(ev)=>{})
                notif.addEventListener("close",(ev)=>{})
                notif.addEventListener("error",(ev)=>{})
            }
        }
    }, 10000);
})();
import React, { useEffect, useState, useContext } from "react";


function TaskList({user, userTasks}) {
    console.log("TaskList");


    const [tasks, setTasks] = useState(userTasks);

    useEffect(function getTaskListOnUpdate() {
        console.debug("tasklist useEffect getTaskListOnUpdate");
    }, [tasks]);


}


export default TaskList;
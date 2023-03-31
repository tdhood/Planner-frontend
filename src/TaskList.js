import React, { useEffect, useState, useContext } from "react";
import TaskCard from "./TaskCard";

/**Shows list of all tasks and search form
 * 
 * Props:
 * -user
 * -userTasks
 * 
 * State:
 * -taskList
 * -params
 *
 * UserBullet --> TaskList --> { SearchForm, TaskCard }
 */
function TaskList({user, userTasks}) {
    console.log("TaskList");


    const [tasks, setTasks] = useState({
        data: userTasks,
        isLoading: false
    });
    const [params, setParams] = useState({});

    useEffect(function getTaskListOnUpdate() {
        console.debug("tasklist useEffect getTaskListOnUpdate");
    }, [tasks]);

    return (
        <div className="TaskList">
            <h1>Tasks List</h1>
            {tasks.data.map((task) => (
                <TaskCard key={task.id} task={task.title} />
            ))}
        </div>
    )

}


export default TaskList;
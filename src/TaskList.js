import React, { useEffect, useState, useContext } from "react";
import TaskListCard from "./TaskListCard";

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
 * UserBullet --> TaskList --> { TaskListCard }
 */
function TaskList({user, userTasks}) {
    console.log("TaskList");


    const [taskLists, setTasks] = useState({
        data: userTasks,
        isLoading: false
    });
    const [params, setParams] = useState({});

    useEffect(function getTaskListOnUpdate() {
        console.debug("tasklist useEffect getTaskListOnUpdate");
    }, [taskLists]);

    return (
        <div className="TaskList">
            <h1>Task Lists</h1>
            {taskLists.data.map((taskList) => (
                <TaskListCard key={taskList.id} taskList={taskList.title} content={taskList.content}/>
            ))}
        </div>
    )

}


export default TaskList;
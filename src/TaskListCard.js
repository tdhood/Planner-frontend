import TaskCard from "./TaskCard";

/** Shows information for a task list
 * 
 * Props:
 * -taskList: {title}
 * -content: ['priority, task, is_complete', ...]
 * 
 * State:
 * -None
 * 
 * TaskList -> TaskListCard -> TaskCard
 */

import TaskList from "./TaskList";

function TaskListCard({ taskList, content }) {
    console.log("TaskListCard", taskList, content)

    const contentContainer = [];
    //TODO: fix so that it sorts based on priority
    for(let i=0; i < content.length; i++) {
        let contentItem = content[i].split(',')
        const priority = contentItem[0]
        const task = contentItem[1]
        const is_complete = contentItem[2] 
        contentContainer.push([priority, task, is_complete])
    }
    
    

    return (
       <div>   
            <h1>{taskList}</h1>
            {contentContainer.map((elm) => (
                <TaskCard key={taskList.id} priority={elm[0]} task={elm[1]} is_complete={elm[2]}/>
            ))}
            
        </div>
)}

export default TaskListCard;
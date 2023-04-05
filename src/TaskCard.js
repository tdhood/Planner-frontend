

/** Shows information for a single tasks
 * 
 * Props:
 * -task: {title}
 * 
 * State:
 * -None
 */

function TaskCard({ task, priority, is_complete }) {
    console.log("TaskCard")
    return (
        <div className='TaskCard'>
            <p>{task}</p>
        </div>
    )
}

export default TaskCard;
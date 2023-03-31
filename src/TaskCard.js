

/** Shows information for a single tasks
 * 
 * Props:
 * -task: {title}
 * 
 * State:
 * -None
 */

function TaskCard({ task }) {
    return (
        <div className='TaskCard'>
            <h1>{task.title}</h1>
        </div>
    )
}

export default TaskCard;
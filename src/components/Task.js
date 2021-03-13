import {FaTimes} from "react-icons/fa";

const Task = ({task,onDelete,onToggle}) => {
    const style={
        backgroundColor:task.reminder?"green":"yellow"
    }
    return (
        <div style={style}className="task" onDoubleClick={()=>onToggle(task.id)}>
            <p>{task.taskName} <FaTimes style={{color:"red"}}  onClick={()=>onDelete(task.id)}/></p>
        </div>
    )
}

export default Task

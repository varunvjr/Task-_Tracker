import Task from './Task';

const Tasks = ({tasks,onDelete,onToggle}) => {
  
    const task=tasks.map((task)=>(
        <Task key={task.id} task={task} onToggle={onToggle} onDelete={onDelete}/>
    ));
    return (
        <div>
           {task} 
        </div>
    )
}

export default Tasks

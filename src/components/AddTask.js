import {useState} from 'react';

const AddTask = ({onAdd}) => {
    const [taskName,setTaskName]=useState('');
    const [reminder,setReminder]=useState(false);
    const addData=(e)=>{
        e.preventDefault();
        if(!taskName){
            alert("Please Add Task!!!")
            return 
        }
        onAdd({taskName,reminder});
        setTaskName('');
        setReminder('');
    }
    return (
        <form className="add-form" onSubmit={addData}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" value={taskName} onChange={(e)=>setTaskName(e.target.value)} placeholder="Add Task"/>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
            </div>
            <input  className="btn btn-block" type="submit" value="Save Task"/>
        </form>
    )
}

export default AddTask;
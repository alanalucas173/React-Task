import React, {useState} from 'react';
const TaskInput = ({handleAddTask}) => {
    const [task, setTasks] = useState('');
    const addTask = () => {
        if(task.trim()){
            handleAddTask(task);
            setTasks('');
        }
    };
return(
    <div>
        <input
        type = "text"
        value = {task}
        onChange = {(e) => setTasks(e.target.value)}
        placeholder = 'Enter a task'
        ></input>
        <button onClick = {addTask}>Add task</button>
    </div>
)
}

export default TaskInput;
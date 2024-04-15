import styles from './TaskDone.module.css';
import trash from '../../assets/trash.svg';
import checked from '../../assets/Vector (1).svg';
import { useState } from 'react';

export function TaskDone({task, tasks, setTasks, decreaseTask, handleIncrementTaskCompleted, handleDecrementTaskCompleted}){
    const [completed, setCompleted] = useState(false);

    const handleDeleteTask = () => {
        setTasks(prevTasks => prevTasks.filter((_, index) => tasks[index] !== task))
        decreaseTask();
        handleDecrementTaskCompleted();
    }

    const handleCheckedTask = () => {
        if (!completed) {
            setCompleted(true)
            handleIncrementTaskCompleted();
        } else {
            setCompleted(false)
            handleDecrementTaskCompleted();
        }
    }

    return (
        <div className={`${styles.task} ${completed ? styles.completed : ''}`}>
            <label htmlFor="checkbox" onClick={handleCheckedTask}>
                <img src={checked}/>
            </label>
            <input type="text" readOnly value={task}/>
            <img src={trash} onClick={handleDeleteTask}/>
        </div>
    )
}

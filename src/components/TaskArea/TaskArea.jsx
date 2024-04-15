import styles from './TaskArea.module.css';
import { TaskNotDone } from '../TaskNotDone/TaskNotDone';
import { TaskDone } from '../TaskDone/TaskDone';
import { useState } from 'react';

export function TaskArea({tasks, increasedTask, setTasks, decreaseTask}){
    let [taskCompleted, setTaskCompleted] = useState(0);

    const handleIncrementTaskCompleted = () => {
        setTaskCompleted(prevIncrementTaskCompleted => prevIncrementTaskCompleted + 1)
    }

    const handleDecrementTaskCompleted = () => {
        setTaskCompleted(prevIncrementTaskCompleted => {
            if (prevIncrementTaskCompleted > 0) {
                return prevIncrementTaskCompleted - 1;
            } else {
                return prevIncrementTaskCompleted;
            }
        })
    }

    return (
        <div className={styles.mainContainer}>
        <main className={styles.main}>
            <div className={styles.containerTasks}>
                <p className={styles.countingTask}>
                    <span>Tarefas criadas</span>
                    <button>{increasedTask}</button>
                </p>
                <p className={styles.countingTaskDone}>
                    <span>Concluídas</span>
                    
                    {taskCompleted === 0 ? (
                        <button>
                            {taskCompleted}
                        </button>
                    ) :  (
                        
                        <span className={styles.completedTasks}>
                            {`${taskCompleted} de ${increasedTask}`}
                        </span>   
                    )}
                </p>
            </div>

            <hr/>
            <div className={styles.containerOneTask}>
                {tasks.length === 0 ? (
                    <TaskNotDone/>
                ) : (
                    tasks.map((task, index) => (
                        <TaskDone 
                            key={index} 
                            task={task} 
                            tasks={tasks} 
                            setTasks={setTasks} 
                            decreaseTask = {decreaseTask}
                            handleIncrementTaskCompleted={handleIncrementTaskCompleted}
                            handleDecrementTaskCompleted={handleDecrementTaskCompleted}
                        />
                    ))
                )}    
            </div>  
        </main>
        </div>
    )
}
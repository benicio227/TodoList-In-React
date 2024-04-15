import React, { useState } from 'react';
import styles from './Input.module.css';
import layer from '../../assets/Layer 1.svg';

export function Input({addTask, addIncreasedTask}){

    const [taskText, setTaskText] = useState('');

    const handleInputChange = (e) => {
        setTaskText(e.target.value);
    }

    const handleCreateTask = () => {
        if (taskText.trim() !== '') {
            addTask(taskText);
            setTaskText('');
            addIncreasedTask()
        }
    };

    return (
        <div className={styles.container}>
            <input 
            type='text' 
            placeholder='Adicione uma nova tarefa'
            value={taskText}
            onChange={handleInputChange}
            />
            <button onClick={handleCreateTask}>
                Criar
                <img src={layer}/>
            </button>
        </div>
    )
}
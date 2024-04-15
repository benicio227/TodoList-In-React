import { Header } from './components/Header/Header';
import { Input } from './components/Input/Input';
import { TaskArea } from './components/TaskArea/TaskArea';
import './global.css';
import styles from './App.module.css';
import { useState } from 'react';

export function App() {
  const [tasks, setTasks] = useState([]);
  const [increasedTask, setIncreasedTask] = useState(0);

  const addTask = (newTask) => {   
    setTasks([...tasks, newTask]);
  }

  const increaseTask = () => {
    setIncreasedTask(prevIncreasedTask => prevIncreasedTask + 1);
  }

  const decreaseTask = () => {
    setIncreasedTask(prevIncreasedTask => prevIncreasedTask - 1);
  }

  return (
    <div className={styles.container}>
      <Header/>
      <Input addTask={addTask}  addIncreasedTask={increaseTask}/>
      <TaskArea tasks={tasks} increasedTask={increasedTask} setTasks={setTasks} decreaseTask={decreaseTask}/>
    </div>
  )
}




import styles from './TaskNotDone.module.css';
import Clipboard from '../../assets/Clipboard.svg';

export function TaskNotDone(){
    return (
        <div className={styles.contentTask}>
            <img src={Clipboard}/>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}
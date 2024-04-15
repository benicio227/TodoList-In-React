import styles from './Header.module.css'; 
import rocket from '../../assets/rocket.svg';

export function Header(){
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={rocket}/>
          <p>
            <span className={styles.span1}>to</span>
            <span className={styles.span2}>do</span>
          </p>     
        </div>      
      </header>
    )
}
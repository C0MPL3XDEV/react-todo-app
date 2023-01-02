import styles from '../Header/header.module.css';
import todologo from '../../assets/Logo.svg';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

export function Header () {
    return (
        <header className={styles.header}>
            <img src={todologo}/>

            <form className={styles.newTaskForm}>
                <input placeholder='Add A New Task' type="text" />
                <button>
                    Create
                    <ControlPointIcon />
                </button>
            </form>
        </header>
        
    )
}


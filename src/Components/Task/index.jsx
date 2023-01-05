import styles from '../Task/task.module.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export function Task () {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div />
            </button>
            <p>Test</p>
            <button className={styles.deleteButton}>
                <DeleteForeverIcon />
            </button>
        </div>
    )
}
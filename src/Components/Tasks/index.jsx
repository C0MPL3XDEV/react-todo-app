import styles from '../Tasks/tasks.module.css';

export function Tasks () {
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Created Tasks</p>
                    <span>10</span>
                </div>
                <div>
                    <p className={styles.textPurple}>Completed</p>
                    <span>1 of 10</span>
                </div>
            </header>
        </section>
    )
}
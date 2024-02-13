import styles from './App.module.css';
import { useState } from "react";

function App() {
	const [taskText, setTaskText] = useState('');
  return (
    <div className={styles.app}>
		<div className={styles.container}>
			<div className={styles.header}>
				<h1>Список задач</h1>
			</div>
			<div className={styles.taskList}>
				<div className={styles.task}>текст задачи</div>
			</div>
			<div className={styles.footer}>
				<input
					type="text"
					value={taskText}
					onChange={({ target }) => setTaskText(target.value)}
					placeholder="Введите задачу"
					className={styles.input}
				/>
				<button className={styles.btn}>+</button>
			</div>
		</div>
	</div>
  );
}

export default App;

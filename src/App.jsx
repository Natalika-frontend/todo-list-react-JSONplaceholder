import styles from './App.module.css';
import { useEffect, useState } from "react";

function App() {
	const [taskText, setTaskText] = useState('');
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => {
				setTodos(loadedTodos.slice(0, 10));
			})
			.finally(() => {
				setIsLoading(false)
			});
	}, []);

	return (
		<div className={styles.app}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h1>Список задач</h1>
				</div>
				<div className={styles.taskList}>
					{isLoading
						? <div className={styles.loader}></div>
						: todos.map(({id, title}) => (
							<div key={id} className={styles.task}>{title}
							</div>
						))
					}
				</div>
				<div className={styles.footer}>
				<input
						type="text"
						value={taskText}
						onChange={({target}) => setTaskText(target.value)}
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

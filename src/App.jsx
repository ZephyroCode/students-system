import MainMenu from './components/MainMenu';
import AddStudent from './components/AddStudent';
import styles from './styles/App.module.scss';

const App = () => {
	return (
		<>
			<h1 className={styles.title}>Sistema de Estudiantes</h1>
			<AddStudent />
			<p className={styles.text}>
				Hecho por Wilver &quot;Zephyro&quot; Salazar
			</p>
		</>
	);
};

export default App;

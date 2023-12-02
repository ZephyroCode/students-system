import MainMenu from './components/MainMenu';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import ModifyStudent from './components/ModifyStudent/ModifyStudent';
import ModifyName from './components/ModifyStudent/ModifyName';
import ModifySurname from './components/ModifyStudent/ModifySurname';
import ModifyBirthDate from './components/ModifyStudent/ModifyBirthDate';
import ModifyGender from './components/ModifyStudent/ModifyGender';
import ModifyAddress from './components/ModifyStudent/ModifyAddress';
import ModifyScore from './components/ModifyStudent/ModifyScore';
import SearchBeforeModify from './components/ModifyStudent/SearchBeforeModify';
import SearchBeforeDelete from './components/DeleteStudent/SearchBeforeDelete';
import ConfirmDelete from './components/DeleteStudent/ConfirmDelete';
import DeleteSuccess from './components/DeleteStudent/DeleteSuccess';
import styles from './styles/App.module.scss';

const App = () => {
	return (
		<>
			<h1 className={styles.title}>Sistema de Estudiantes</h1>
			<MainMenu />
			<p className={styles.text}>
				Hecho por Wilver &quot;Zephyro&quot; Salazar
			</p>
		</>
	);
};

export default App;

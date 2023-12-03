import { useContext } from 'react';
import { Context } from './context/Context';
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
import AddSuccess from './components/AddSuccess';
import StudentNotFound from './components/StudentNotFound';
import styles from './styles/App.module.scss';
import StudentCard from './components/StudentCard';

const App = () => {
	const { card, studentFound } = useContext(Context);

	return (
		<>
			<h1 className={styles.title}>Sistema de Estudiantes</h1>
			<>
				{card === 'MainMenu' ? <MainMenu /> : null}
				{card === 'AddStudent' ? <AddStudent /> : null}
				{card === 'SearchStudent' ? <SearchStudent /> : null}
				{card === 'ModifyStudent' ? <ModifyStudent /> : null}
				{card === 'SearchBeforeModify' ? <SearchBeforeModify /> : null}
				{card === 'ModifyName' ? <ModifyName /> : null}
				{card === 'ModifySurname' ? <ModifySurname /> : null}
				{card === 'ModifyBirthDate' ? <ModifyBirthDate /> : null}
				{card === 'ModifyGender' ? <ModifyGender /> : null}
				{card === 'ModifyAddress' ? <ModifyAddress /> : null}
				{card === 'ModifyScore' ? <ModifyScore /> : null}
				{card === 'SearchBeforeDelete' ? <SearchBeforeDelete /> : null}
				{card === 'ConfirmDelete' ? <ConfirmDelete /> : null}
				{card === 'DeleteSuccess' ? <DeleteSuccess /> : null}
				{card === 'AddSuccess' ? <AddSuccess /> : null}
				{card === 'StudentNotFound' ? <StudentNotFound /> : null}
				{card === 'StudentCard' && studentFound ? (
					<StudentCard
						name={studentFound.name}
						surname={studentFound.surname}
						idNumber={studentFound.idNumber}
						birthdate={studentFound.birthdate}
						gender={studentFound.gender}
						address={studentFound.address}
						score={studentFound.score}
					/>
				) : null}
			</>
			<p className={styles.text}>
				Hecho por Wilver &quot;Zephyro&quot; Salazar
			</p>
		</>
	);
};

export default App;

import { useContext } from 'react';
import { Context } from '../context/Context';
import Button from './pieces/Button';
import Card from './pieces/Card';
import CardTitle from './pieces/CardTitle';
import styles from './AddSuccess.module.scss';

const AddSuccess = () => {
	const { changeCard } = useContext(Context);

	return (
		<Card>
			<CardTitle>Cargado</CardTitle>
			<p className={styles.text}>
				Estudiante cargado al registro exitosamente.
			</p>
			<Button onClick={() => changeCard('AddStudent')}>
				Cargar otro Estudiante
			</Button>

			<Button onClick={() => changeCard('MainMenu')}>Menú Principal</Button>
		</Card>
	);
};

export default AddSuccess;

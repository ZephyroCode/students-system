import { useContext } from 'react';
import { Context } from '../../context/Context';
import Button from '../pieces/Button';
import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import styles from './InvalidBirthDate.module.scss';

const InvalidBirthDate = () => {
	const { changeCard } = useContext(Context);

	return (
		<Card>
			<CardTitle>Error</CardTitle>
			<p className={styles.text}>Fecha de nacimiento inválida.</p>
			<Button onClick={() => changeCard('AddStudent')}>
				Cargar otro Estudiante
			</Button>
			<Button onClick={() => changeCard('MainMenu')}>Menú Principal</Button>
		</Card>
	);
};

export default InvalidBirthDate;

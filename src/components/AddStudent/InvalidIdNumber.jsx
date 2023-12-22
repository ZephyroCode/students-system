import { useContext } from 'react';
import { Context } from '../../context/Context';
import Button from '../pieces/Button';
import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import styles from './InvalidIdNumber.module.scss';

const InvalidIdNumber = () => {
	const { changeCard } = useContext(Context);

	return (
		<Card>
			<CardTitle>Error</CardTitle>
			<p className={styles.text}>Cédula inválida.</p>
			<Button onClick={() => changeCard('AddStudent')}>
				Cargar otro Estudiante
			</Button>
			<Button onClick={() => changeCard('MainMenu')}>Menú Principal</Button>
		</Card>
	);
};

export default InvalidIdNumber;

import { useContext } from 'react';
import { Context } from '../context/Context';
import Button from './pieces/Button';
import Card from './pieces/Card';
import CardTitle from './pieces/CardTitle';
import styles from './StudentNotFound.module.scss';

const StudentNotFound = () => {
	const { changeCard } = useContext(Context);

	return (
		<Card>
			<CardTitle>Error</CardTitle>
			<p className={styles.text}>Estudiante no encontrado.</p>
			<Button onClick={() => changeCard('MainMenu')}>Menú Principal</Button>
		</Card>
	);
};

export default StudentNotFound;

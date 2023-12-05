import { useContext } from 'react';
import { Context } from '../context/Context';
import Button from './pieces/Button';
import Card from './pieces/Card';
import CardTitle from './pieces/CardTitle';
import styles from './StudentNotFound.module.scss';

const NoStudents = () => {
	const { changeCard } = useContext(Context);

	return (
		<Card>
			<CardTitle>Error</CardTitle>
			<p className={styles.text}>No hay estudiantes registrados.</p>
			<Button onClick={() => changeCard('MainMenu')}>Menú Principal</Button>
		</Card>
	);
};

export default NoStudents;

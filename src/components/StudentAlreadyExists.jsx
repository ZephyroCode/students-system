import { useContext } from 'react';
import { Context } from '../context/Context';
import Button from './pieces/Button';
import Card from './pieces/Card';
import CardTitle from './pieces/CardTitle';
import styles from './StudentAlreadyExists.module.scss';

const StudentAlreadyExists = () => {
	const { changeCard } = useContext(Context);

	return (
		<Card>
			<CardTitle>Error</CardTitle>
			<p className={styles.text}>
				La cédula ingresada ya se encuentra registrada.
			</p>
			<Button onClick={() => changeCard('MainMenu')}>Menú Principal</Button>
		</Card>
	);
};

export default StudentAlreadyExists;

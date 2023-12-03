import { useContext } from 'react';
import { Context } from '../context/Context';
import Card from './pieces/Card';
import CardTitle from './pieces/CardTitle';
import Button from './pieces/Button';
import styles from './StudentCard.module.scss';

const StudentCard = ({
	name,
	surname,
	idNumber,
	birthdate,
	gender,
	address,
	score,
}) => {
	const { changeCard } = useContext(Context);

	return (
		<Card>
			<CardTitle>Datos del Estudiante</CardTitle>
			<ul>
				<li>
					<p className={styles.text}>
						<strong className={styles.data}>Nombre:</strong> {name}
					</p>
				</li>
				<li>
					<p className={styles.text}>
						<strong className={styles.data}>Apellido:</strong> {surname}
					</p>
				</li>
				<li>
					<p className={styles.text}>
						<strong className={styles.data}>Cédula:</strong> {idNumber}
					</p>
				</li>
				<li>
					<p className={styles.text}>
						<strong className={styles.data}>Fecha de Nacimiento:</strong>{' '}
						{birthdate}
					</p>
				</li>
				<li>
					<p className={styles.text}>
						<strong className={styles.data}>Sexo:</strong> {gender}
					</p>
				</li>
				<li>
					<p className={styles.text}>
						<strong className={styles.data}>Dirección:</strong> {address}
					</p>
				</li>
				<li>
					<p className={styles.text}>
						<strong className={styles.data}>Nota Definitiva:</strong> {score}
					</p>
				</li>
			</ul>
			<Button onClick={() => changeCard('MainMenu')}>Menú Principal</Button>
		</Card>
	);
};

export default StudentCard;

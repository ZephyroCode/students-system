import Card from './pieces/Card';
import CardTitle from './pieces/CardTitle';
import styles from './StudentShowcase.module.scss';

const StudentShowcase = ({
	name,
	surname,
	idNumber,
	birthdate,
	gender,
	address,
	score,
}) => {
	return (
		<Card>
			<CardTitle>Datos de Estudiante</CardTitle>
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
		</Card>
	);
};

export default StudentShowcase;

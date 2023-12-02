import Button from '../pieces/Button';
import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import styles from './DeleteSuccess.module.scss';

const DeleteSuccess = () => {
	return (
		<Card>
			<CardTitle>Eliminado</CardTitle>
			<p className={styles.text}>
				Estudiante eliminado del registro exitosamente.
			</p>
			<Button>Menú Principal</Button>
		</Card>
	);
};

export default DeleteSuccess;

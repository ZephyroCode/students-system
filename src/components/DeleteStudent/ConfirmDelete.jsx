import { useContext } from 'react';
import { Context } from '../../context/Context';
import Button from '../pieces/Button';
import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import OptionButton from '../pieces/OptionButton';
import styles from './ConfirmDelete.module.scss';

const ConfirmDelete = () => {
	const { students, setStudents, changeCard, studentFound } =
		useContext(Context);

	const handleDelete = () => {
		setStudents(
			students.filter(student => student.idNumber !== studentFound.idNumber)
		);
		changeCard('DeleteSuccess');
	};

	return (
		<Card>
			<CardTitle>Confirmación</CardTitle>
			<p className={styles.text}>¿Seguro que desea eliminar al estudiante?</p>
			<p className={styles.idText}>
				Cédula seleccionada:{' '}
				<span className={styles.id}>{studentFound.idNumber}</span>
			</p>
			<OptionButton onClick={() => changeCard('SearchBeforeDelete')}>
				Cancelar
			</OptionButton>
			<OptionButton onClick={handleDelete}>Confirmar</OptionButton>
			<Button onClick={() => changeCard('MainMenu')}>Menú Principal</Button>
		</Card>
	);
};

export default ConfirmDelete;

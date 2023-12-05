import { useContext } from 'react';
import { Context } from '../../context/Context';
import { students } from '../../data/students';
import Button from '../pieces/Button';
import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import OptionButton from '../pieces/OptionButton';
import styles from './ConfirmDelete.module.scss';

const ConfirmDelete = () => {
	const { changeCard, studentFound } = useContext(Context);

	const handleDelete = () => {
		const studentToDelete = students.indexOf(studentFound);
		students.splice(studentToDelete, 1);
		changeCard('DeleteSuccess');
	};

	return (
		<Card>
			<CardTitle>Confirmación</CardTitle>
			<p className={styles.text}>¿Seguro que desea eliminar al estudiante?</p>
			<p className={styles.idText}>
				Cédula seleccionada:{' '}
				<span className={styles.id}>{studentFound.getIdNumber}</span>
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

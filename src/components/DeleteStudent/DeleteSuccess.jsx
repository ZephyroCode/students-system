import { useContext } from 'react';
import { Context } from '../../context/Context';
import Button from '../pieces/Button';
import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import styles from './DeleteSuccess.module.scss';

const DeleteSuccess = () => {
	const { changeCard } = useContext(Context);

	return (
		<Card>
			<CardTitle>Eliminado</CardTitle>
			<p className={styles.text}>
				Estudiante eliminado del registro exitosamente.
			</p>
			<Button onClick={() => changeCard('SearchBeforeDelete')}>
				Eliminar otro Estudiante
			</Button>
			<Button onClick={() => changeCard('MainMenu')}>Menú Principal</Button>
		</Card>
	);
};

export default DeleteSuccess;

import { useContext } from 'react';
import { Context } from '../../context/Context';
import Button from '../pieces/Button';
import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import styles from './ModifySuccess.module.scss';

const ModifySuccess = () => {
	const { changeCard } = useContext(Context);

	return (
		<Card>
			<CardTitle>Modificación</CardTitle>
			<p className={styles.text}>Dato modificado exitosamente.</p>
			<Button onClick={() => changeCard('ModifyStudent')}>
				Modificar otro dato
			</Button>

			<Button onClick={() => changeCard('MainMenu')}>Menú Principal</Button>
		</Card>
	);
};

export default ModifySuccess;

import Button from '../pieces/Button';
import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import OptionButton from '../pieces/OptionButton';
import styles from './ConfirmDelete.module.scss';

const ConfirmDelete = () => {
	return (
		<Card>
			<CardTitle>Confirmación</CardTitle>
			<p className={styles.text}>¿Seguro que desea eliminar al estudiante?</p>
			<OptionButton>Cancelar</OptionButton>
			<OptionButton>Confirmar</OptionButton>
			<Button>Menú Principal</Button>
		</Card>
	);
};

export default ConfirmDelete;

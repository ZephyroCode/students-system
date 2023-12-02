import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import styles from './ModifyAddress.module.scss';
import Label from '../pieces/Label';
import Button from '../pieces/Button';

const ModifyAddress = () => {
	return (
		<Card>
			<CardTitle>Modificar Dirección</CardTitle>
			<form>
				<Label labelFor='newaddress'>Ingrese la nueva dirección:</Label>
				<textarea
					required
					className={styles.input}
					id='newaddress'
					placeholder='Nueva Dirección'
				></textarea>
				<Button>Actualizar Dirección</Button>
			</form>
			<Button>Seleccionar Otra Opción</Button>
			<Button>Menú Principal</Button>
		</Card>
	);
};

export default ModifyAddress;

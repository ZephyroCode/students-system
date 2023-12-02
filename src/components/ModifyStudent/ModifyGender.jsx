import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import Label from '../pieces/Label';
import Button from '../pieces/Button';
import styles from './ModifyGender.module.scss';

const ModifyGender = () => {
	return (
		<Card>
			<CardTitle>Modificar Sexo</CardTitle>
			<form>
				<Label labelFor='newgender'>Ingrese el nuevo sexo:</Label>
				<select className={styles.input} id='newgender' required>
					<option value='masculino'>Masculino</option>
					<option value='femenino'>Femenino</option>
				</select>
				<Button>Actualizar Sexo</Button>
			</form>
			<Button>Seleccionar Otra Opción</Button>
			<Button>Menú Principal</Button>
		</Card>
	);
};

export default ModifyGender;

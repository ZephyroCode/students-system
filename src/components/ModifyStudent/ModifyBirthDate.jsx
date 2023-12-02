import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import Input from '../pieces/Input';
import Label from '../pieces/Label';
import Button from '../pieces/Button';

const ModifyBirthDate = () => {
	return (
		<Card>
			<CardTitle>Modificar Fecha de Nacimiento</CardTitle>
			<form>
				<Label labelFor='newbirthdate'>
					Ingrese la nueva fecha de nacimiento:
				</Label>
				<Input type='date' id='newbirthdate' />
				<Button>Actualizar Fecha de Nacimiento</Button>
			</form>
			<Button>Seleccionar Otra Opción</Button>
			<Button>Menú Principal</Button>
		</Card>
	);
};

export default ModifyBirthDate;

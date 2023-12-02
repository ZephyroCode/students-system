import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import Input from '../pieces/Input';
import Label from '../pieces/Label';
import Button from '../pieces/Button';

const ModifySurname = () => {
	return (
		<Card>
			<CardTitle>Modificar Apellido</CardTitle>
			<form>
				<Label labelFor='newsurname'>Ingrese el nuevo apellido:</Label>
				<Input type='text' id='newsurname' />
				<Button>Actualizar Apellido</Button>
			</form>
			<Button>Seleccionar Otra Opción</Button>
			<Button>Menú Principal</Button>
		</Card>
	);
};

export default ModifySurname;

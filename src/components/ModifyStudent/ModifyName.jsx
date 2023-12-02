import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import Input from '../pieces/Input';
import Label from '../pieces/Label';
import Button from '../pieces/Button';

const ModifyName = () => {
	return (
		<Card>
			<CardTitle>Modificar Nombre</CardTitle>
			<form>
				<Label labelFor='newname'>Ingrese el nuevo nombre:</Label>
				<Input type='text' id='newname' />
				<Button>Actualizar Nombre</Button>
			</form>
			<Button>Seleccionar Otra Opción</Button>
			<Button>Menú Principal</Button>
		</Card>
	);
};

export default ModifyName;

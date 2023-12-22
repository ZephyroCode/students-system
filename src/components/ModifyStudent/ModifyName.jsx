import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import Input from '../pieces/Input';
import Label from '../pieces/Label';
import Button from '../pieces/Button';

const ModifyName = () => {
	const [newName, setNewName] = useState('');

	const { student, setStudent, changeCard, studentFound, updateStudent } =
		useContext(Context);

	const handleSubmit = e => {
		e.preventDefault();
		setStudent(studentFound);
		student.name = newName;
		updateStudent(studentFound.idNumber, student);
		changeCard('ModifySuccess');
	};

	return (
		<Card>
			<CardTitle>Modificar Nombre</CardTitle>
			<form onSubmit={handleSubmit}>
				<Label labelFor='newname'>Ingrese el nuevo nombre:</Label>
				<Input
					onChange={e => setNewName(e.target.value)}
					type='text'
					id='newname'
				/>
				<Button types='submit'>Actualizar Nombre</Button>
			</form>
			<Button onClick={() => changeCard('ModifyStudent')}>
				Seleccionar Otra Opción
			</Button>
			<Button onClick={() => changeCard('MainMenu')}>Menú Principal</Button>
		</Card>
	);
};

export default ModifyName;

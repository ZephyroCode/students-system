import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/Context';
import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import Input from '../pieces/Input';
import Label from '../pieces/Label';
import Button from '../pieces/Button';

const ModifyBirthDate = () => {
	const [newBirthdate, setNewBirthdate] = useState('');

	const { student, setStudent, changeCard, studentFound, updateStudent } =
		useContext(Context);

	useEffect(() => {
		setStudent(studentFound);
		student.birthdate = newBirthdate;
	}, [newBirthdate]);

	const handleSubmit = e => {
		e.preventDefault();
		updateStudent(student.idNumber, student);
		changeCard('ModifySuccess');
	};

	return (
		<Card>
			<CardTitle>Modificar Fecha de Nacimiento</CardTitle>
			<form onSubmit={handleSubmit}>
				<Label labelFor='newbirthdate'>
					Ingrese la nueva fecha de nacimiento:
				</Label>
				<Input
					onChange={e => setNewBirthdate(e.target.value)}
					type='date'
					id='newbirthdate'
					value={newBirthdate}
				/>
				<Button type='submit'>Actualizar Fecha de Nacimiento</Button>
			</form>
			<Button onClick={() => changeCard('ModifyStudent')}>
				Seleccionar Otra Opción
			</Button>
			<Button onClick={() => changeCard('MainMenu')}>Menú Principal</Button>
		</Card>
	);
};

export default ModifyBirthDate;

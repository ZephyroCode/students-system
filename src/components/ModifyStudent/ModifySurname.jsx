import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import Input from '../pieces/Input';
import Label from '../pieces/Label';
import Button from '../pieces/Button';

const ModifySurname = () => {
	const [newSurname, setNewSurname] = useState('');

	const { changeCard, studentFound } = useContext(Context);

	const handleSubmit = e => {
		e.preventDefault();
		studentFound.setSurname = newSurname;
		changeCard('ModifySuccess');
	};

	return (
		<Card>
			<CardTitle>Modificar Apellido</CardTitle>
			<form onSubmit={handleSubmit}>
				<Label labelFor='newsurname'>Ingrese el nuevo apellido:</Label>
				<Input
					onChange={e => setNewSurname(e.target.value)}
					type='text'
					id='newsurname'
				/>
				<Button type='submit'>Actualizar Apellido</Button>
			</form>
			<Button onClick={() => changeCard('ModifyStudent')}>
				Seleccionar Otra Opción
			</Button>
			<Button onClick={() => changeCard('MainMenu')}>Menú Principal</Button>
		</Card>
	);
};

export default ModifySurname;

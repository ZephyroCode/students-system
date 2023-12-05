import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import Label from '../pieces/Label';
import Button from '../pieces/Button';
import styles from './ModifyGender.module.scss';

const ModifyGender = () => {
	const [newGender, setNewGender] = useState('');

	const { changeCard, studentFound } = useContext(Context);

	const handleSubmit = e => {
		e.preventDefault();
		studentFound.setGender = newGender;
		changeCard('ModifySuccess');
	};

	return (
		<Card>
			<CardTitle>Modificar Sexo</CardTitle>
			<form onSubmit={handleSubmit}>
				<Label labelFor='newgender'>Ingrese el nuevo sexo:</Label>
				<select
					onChange={e => setNewGender(e.target.value)}
					className={styles.input}
					id='newgender'
					required
				>
					<option value='Masculino'>Masculino</option>
					<option value='Femenino'>Femenino</option>
				</select>
				<Button type='submit'>Actualizar Sexo</Button>
			</form>
			<Button onClick={() => changeCard('ModifyStudent')}>
				Seleccionar Otra Opción
			</Button>
			<Button onClick={() => changeCard('MainMenu')}>Menú Principal</Button>
		</Card>
	);
};

export default ModifyGender;

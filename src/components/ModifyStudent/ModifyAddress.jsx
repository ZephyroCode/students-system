import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/Context';
import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import styles from './ModifyAddress.module.scss';
import Label from '../pieces/Label';
import Button from '../pieces/Button';

const ModifyAddress = () => {
	const [newAddress, setNewAddress] = useState('');

	const { student, setStudent, changeCard, studentFound, updateStudent } =
		useContext(Context);

	useEffect(() => {
		setStudent(studentFound);
		student.address = newAddress;
	}, [newAddress]);

	const handleSubmit = e => {
		e.preventDefault();
		updateStudent(student.idNumber, student);
		changeCard('ModifySuccess');
	};

	return (
		<Card>
			<CardTitle>Modificar Dirección</CardTitle>
			<form onSubmit={handleSubmit}>
				<Label labelFor='newaddress'>Ingrese la nueva dirección:</Label>
				<textarea
					onChange={e => setNewAddress(e.target.value)}
					required
					className={styles.input}
					id='newaddress'
					placeholder='Nueva Dirección'
					value={newAddress}
				></textarea>
				<Button>Actualizar Dirección</Button>
			</form>
			<Button onClick={() => changeCard('ModifyStudent')}>
				Seleccionar Otra Opción
			</Button>
			<Button onClick={() => changeCard('MainMenu')}>Menú Principal</Button>
		</Card>
	);
};

export default ModifyAddress;

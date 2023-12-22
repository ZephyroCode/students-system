import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/Context';
import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import styles from './ModifyScore.module.scss';
import Label from '../pieces/Label';
import Button from '../pieces/Button';

const ModifyScore = () => {
	const [newScore, setNewScore] = useState('');

	const { student, setStudent, changeCard, studentFound, updateStudent } =
		useContext(Context);

	useEffect(() => {
		setStudent(studentFound);
		student.score = newScore;
	}, [newScore]);

	const handleSubmit = e => {
		e.preventDefault();
		updateStudent(student.idNumber, student);
		changeCard('ModifySuccess');
	};

	return (
		<Card>
			<CardTitle>Modificar Nota Definitiva</CardTitle>
			<form onSubmit={handleSubmit}>
				<Label labelFor='newscore'>Ingrese la nueva nota definitiva:</Label>
				<input
					onChange={e => setNewScore(e.target.value)}
					className={styles.input}
					type='number'
					id='newscore'
					min={1}
					max={20}
					value={newScore}
				/>
				<Button type='submit'>Actualizar Nota Definitiva</Button>
			</form>
			<Button onClick={() => changeCard('ModifyStudent')}>
				Seleccionar Otra Opción
			</Button>
			<Button onClick={() => changeCard('MainMenu')}>Menú Principal</Button>
		</Card>
	);
};

export default ModifyScore;

import { useState, useContext } from 'react';
import { Context } from '../context/Context';
import Card from './pieces/Card';
import CardTitle from './pieces/CardTitle';
import styles from './AddStudent.module.scss';
import Button from './pieces/Button';
import Label from './pieces/Label';
import Input from './pieces/Input';
import { Student, students } from '../data/students';

const AddStudent = () => {
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [idNumber, setIdNumber] = useState(0);
	const [birthdate, setBirthdate] = useState('');
	const [gender, setGender] = useState('');
	const [address, setAddress] = useState('');
	const [score, setScore] = useState(0);

	const { changeCard } = useContext(Context);

	const handleSubmit = e => {
		e.preventDefault();
		const newStudent = new Student(
			name,
			surname,
			idNumber,
			birthdate,
			gender,
			address,
			score
		);
		students.push(newStudent);
		changeCard('AddSuccess');
	};

	return (
		<Card>
			<CardTitle>Cargar Estudiante</CardTitle>
			<form onSubmit={handleSubmit}>
				<Label labelFor='name'>Nombre:</Label>
				<Input
					onChange={e => setName(e.target.value)}
					className={styles.input}
					type='text'
					id='name'
					name='name'
				/>
				<Label labelFor='surname'>Apellido:</Label>
				<Input
					onChange={e => setSurname(e.target.value)}
					className={styles.input}
					type='text'
					id='surname'
					name='surname'
				/>
				<Label labelFor='idnumber'>Cédula:</Label>
				<Input
					onChange={e => setIdNumber(e.target.value)}
					className={styles.input}
					type='number'
					id='idnumber'
					name='idnumber'
				/>
				<Label labelFor='birthdate'>Fecha de nacimiento:</Label>
				<Input
					onChange={e => setBirthdate(e.target.value)}
					className={styles.input}
					type='date'
					id='birthdate'
					name='birthdate'
				/>
				<Label labelFor='gender'>Sexo:</Label>
				<select
					onChange={e => setGender(e.target.value)}
					className={styles.input}
					id='gender'
					name='gender'
					required
				>
					<option value='masculino'>Masculino</option>
					<option value='femenino'>Femenino</option>
				</select>
				<Label labelFor='address'>Dirección:</Label>
				<textarea
					onChange={e => setAddress(e.target.value)}
					name='address'
					required
					className={styles.input}
					id='address'
					placeholder='Dirección'
				></textarea>
				<Label labelFor='score'>Nota definitiva:</Label>
				<input
					onChange={e => setScore(e.target.value)}
					className={styles.input}
					type='number'
					id='score'
					name='score'
					min={1}
					max={20}
				/>
				<Button type='submit'>Cargar Estudiante</Button>
				<p className={styles.text}>
					<strong className={styles.data}>Estudiantes registrados:</strong>{' '}
					{students.length}
				</p>
			</form>
			<Button onClick={() => changeCard('MainMenu')}>Menú Principal</Button>
		</Card>
	);
};

export default AddStudent;

import { useState, useContext, useEffect } from 'react';
import { Context } from '../../context/Context';
import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import styles from './AddStudent.module.scss';
import Button from '../pieces/Button';
import Label from '../pieces/Label';
import Input from '../pieces/Input';
import { Student } from '../../data/students';
import { useSEO } from '../../hooks/useSEO';

const AddStudent = () => {
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [idNumber, setIdNumber] = useState(0);
	const [birthdate, setBirthdate] = useState('');
	const [gender, setGender] = useState('Masculino');
	const [address, setAddress] = useState('');
	const [score, setScore] = useState(1);

	const { students, setStudents, changeCard, studentFound, setStudentFound } =
		useContext(Context);

	useSEO({
		title: 'ZephyroCode | Add Student',
		description: `Students System App made with ReactJS by ZephyroCode`,
	});

	useEffect(() => {
		const studentToFind = students.find(
			student => student.idNumber === idNumber
		);
		setStudentFound(studentToFind);
	}, [idNumber]);

	const createAndAddStudent = () => {
		const newStudent = new Student(
			name,
			surname,
			idNumber,
			birthdate,
			gender,
			address,
			score
		);
		if (Date.parse(birthdate) >= Date.now()) {
			changeCard('InvalidBirthDate');
		} else if (idNumber.length < 7) {
			changeCard('InvalidIdNumber');
		} else {
			setStudents([...students, newStudent]);
			changeCard('AddSuccess');
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		studentFound ? changeCard('StudentAlreadyExists') : createAndAddStudent();
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
					value={name}
				/>
				<Label labelFor='surname'>Apellido:</Label>
				<Input
					onChange={e => setSurname(e.target.value)}
					className={styles.input}
					type='text'
					id='surname'
					name='surname'
					value={surname}
				/>
				<Label labelFor='idnumber'>Cédula:</Label>
				<input
					onChange={e => setIdNumber(e.target.value)}
					className={styles.input}
					type='number'
					id='idnumber'
					name='idnumber'
					value={idNumber}
					min={1}
					max={99999999}
				/>
				<Label labelFor='birthdate'>Fecha de nacimiento:</Label>
				<Input
					onChange={e => setBirthdate(e.target.value)}
					className={styles.input}
					type='date'
					id='birthdate'
					name='birthdate'
					value={birthdate}
				/>
				<Label labelFor='gender'>Sexo:</Label>
				<select
					onChange={e => setGender(e.target.value)}
					className={styles.input}
					id='gender'
					name='gender'
					required
					value={gender}
				>
					<option value='Masculino'>Masculino</option>
					<option value='Femenino'>Femenino</option>
				</select>
				<Label labelFor='address'>Dirección:</Label>
				<textarea
					onChange={e => setAddress(e.target.value)}
					name='address'
					required
					className={styles.input}
					id='address'
					placeholder='Dirección'
					value={address}
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
					value={score}
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

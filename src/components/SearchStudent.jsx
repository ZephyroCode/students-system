import { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';
import Button from './pieces/Button';
import Card from './pieces/Card';
import CardTitle from './pieces/CardTitle';
import Input from './pieces/Input';
import Label from './pieces/Label';
import styles from './SearchStudent.module.scss';
import { useSEO } from '../hooks/useSEO';

const SearchStudent = () => {
	const [idNumber, setIdNumber] = useState(0);

	const { students, changeCard, studentFound, setStudentFound } =
		useContext(Context);

	useSEO({
		title: 'ZephyroCode | Search Student',
		description: `Students System App made with ReactJS by ZephyroCode`,
	});

	useEffect(() => {
		const studentToFind = students.find(
			student => student.idNumber === idNumber
		);
		setStudentFound(studentToFind);
	}, [idNumber]);

	const handleSubmit = e => {
		e.preventDefault();
		studentFound ? changeCard('StudentCard') : changeCard('StudentNotFound');
	};

	return (
		<Card>
			<CardTitle>Buscar Estudiante</CardTitle>
			<form onSubmit={handleSubmit}>
				<Label labelFor='idnumber' className={styles.label}>
					Cédula del estudiante:
				</Label>
				<Input
					onChange={e => setIdNumber(e.target.value)}
					required
					className={styles.input}
					type='number'
					id='idnumber'
				/>

				<Button type='submit'>Buscar Estudiante</Button>
			</form>
			<Button onClick={() => changeCard('MainMenu')}>Menú Principal</Button>
		</Card>
	);
};

export default SearchStudent;

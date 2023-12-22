import { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/Context';
import Button from '../pieces/Button';
import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import Label from '../pieces/Label';
import styles from './SearchBeforeModify.module.scss';
import { useSEO } from '../../hooks/useSEO';

const SearchBeforeModify = () => {
	const [idNumber, setIdNumber] = useState(0);

	const { students, changeCard, studentFound, setStudentFound } =
		useContext(Context);

	useSEO({
		title: 'ZephyroCode | Modify Student',
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
		studentFound ? changeCard('ModifyStudent') : changeCard('StudentNotFound');
	};

	return (
		<Card>
			<CardTitle>Buscar para Modificar Estudiante</CardTitle>
			<form onSubmit={handleSubmit}>
				<Label labelFor='idnumber'>Cédula del estudiante a modificar:</Label>
				<input
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

export default SearchBeforeModify;

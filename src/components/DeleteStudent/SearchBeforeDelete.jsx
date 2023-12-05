import { useContext, useState, useEffect } from 'react';
import { Context } from '../../context/Context';
import { students } from '../../data/students';
import Button from '../pieces/Button';
import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import Label from '../pieces/Label';
import styles from './SearchBeforeDelete.module.scss';

const SearchBeforeDelete = () => {
	const [idNumber, setIdNumber] = useState(0);

	const { changeCard, studentFound, setStudentFound } = useContext(Context);

	useEffect(() => {
		const studentToFind = students.find(
			student => student.idNumber === idNumber
		);
		setStudentFound(studentToFind);
	}, [idNumber]);

	const handleSubmit = e => {
		e.preventDefault();
		studentFound ? changeCard('ConfirmDelete') : changeCard('StudentNotFound');
	};

	return (
		<Card>
			<CardTitle>Buscar para Eliminar Estudiante</CardTitle>
			<form onSubmit={handleSubmit}>
				<Label labelFor='idnumber'>Cédula del estudiante a eliminar:</Label>
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

export default SearchBeforeDelete;

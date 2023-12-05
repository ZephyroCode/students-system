import { useContext } from 'react';
import { Context } from '../context/Context';
import Button from './pieces/Button';
import Card from './pieces/Card';
import CardTitle from './pieces/CardTitle';
import { students } from '../data/students';
import StudentShowcase from './StudentShowcase';
import ShowcaseCard from './pieces/ShowcaseCard';

const ShowStudents = props => {
	const { changeCard } = useContext(Context);

	return (
		<Card>
			<CardTitle>Estudiantes Registrados</CardTitle>
			<ShowcaseCard>
				{students.map((student, i) => (
					<StudentShowcase
						key={i}
						name={student.getName}
						surname={student.getSurname}
						idNumber={student.getIdNumber}
						birthdate={student.getBirthdate}
						gender={student.getGender}
						address={student.getAddress}
						score={student.getScore}
					/>
				))}
			</ShowcaseCard>
			<Button onClick={() => changeCard('MainMenu')}>Menú Principal</Button>
		</Card>
	);
};

export default ShowStudents;

import { useContext } from 'react';
import { Context } from '../context/Context';
import Button from './pieces/Button';
import Card from './pieces/Card';
import CardTitle from './pieces/CardTitle';
import StudentShowcase from './StudentShowcase';
import ShowcaseCard from './pieces/ShowcaseCard';
import { useSEO } from '../hooks/useSEO';

const ShowStudents = () => {
	const { changeCard } = useContext(Context);

	useSEO({
		title: 'ZephyroCode | Show Students',
		description: `Students System App made with ReactJS by ZephyroCode`,
	});

	return (
		<Card>
			<CardTitle>Estudiantes Registrados</CardTitle>
			<ShowcaseCard>
				<StudentShowcase />
			</ShowcaseCard>
			<Button onClick={() => changeCard('MainMenu')}>Menú Principal</Button>
		</Card>
	);
};

export default ShowStudents;

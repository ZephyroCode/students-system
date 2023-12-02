import Button from './pieces/Button';
import Card from './pieces/Card';
import CardTitle from './pieces/CardTitle';
import Input from './pieces/Input';
import Label from './pieces/Label';
import styles from './SearchStudent.module.scss';

const SearchStudent = () => {
	return (
		<Card>
			<CardTitle>Buscar Estudiante</CardTitle>
			<form>
				<Label labelFor='idnumber' className={styles.label}>
					Cédula del estudiante:
				</Label>
				<Input required className={styles.input} type='number' id='idnumber' />
				<Button type='submit'>Buscar Estudiante</Button>
			</form>
			<Button>Menú Principal</Button>
		</Card>
	);
};

export default SearchStudent;

import Button from '../pieces/Button';
import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import Label from '../pieces/Label';
import styles from './SearchBeforeModify.module.scss';

const SearchBeforeModify = () => {
	return (
		<Card>
			<CardTitle>Buscar para Modificar Estudiante</CardTitle>
			<form>
				<Label labelFor='idnumber'>Cédula del estudiante a modificar:</Label>
				<input required className={styles.input} type='number' id='idnumber' />
				<Button type='submit'>Buscar Estudiante</Button>
			</form>
			<Button>Menú Principal</Button>
		</Card>
	);
};

export default SearchBeforeModify;

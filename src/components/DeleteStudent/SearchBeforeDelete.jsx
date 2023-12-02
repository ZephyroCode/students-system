import Button from '../pieces/Button';
import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import Label from '../pieces/Label';
import styles from './SearchBeforeDelete.module.scss';

const SearchBeforeDelete = () => {
	return (
		<Card>
			<CardTitle>Buscar para Eliminar Estudiante</CardTitle>
			<form>
				<Label labelFor='idnumber'>Cédula del estudiante a eliminar:</Label>
				<input required className={styles.input} type='number' id='idnumber' />
				<Button type='submit'>Buscar Estudiante</Button>
			</form>
			<Button>Menú Principal</Button>
		</Card>
	);
};

export default SearchBeforeDelete;

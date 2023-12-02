import Card from './pieces/Card';
import CardTitle from './pieces/CardTitle';
import styles from './AddStudent.module.scss';
import Button from './pieces/Button';
import Label from './pieces/Label';
import Input from './pieces/Input';

const AddStudent = () => {
	return (
		<Card>
			<CardTitle>Cargar Estudiante</CardTitle>
			<form>
				<Label labelFor='name'>Nombre:</Label>
				<Input className={styles.input} type='text' id='name' />
				<Label labelFor='surname'>Apellido:</Label>
				<Input className={styles.input} type='text' id='surname' />
				<Label labelFor='idnumber'>Cédula:</Label>
				<Input className={styles.input} type='number' id='idnumber' />
				<Label labelFor='birthdate'>Fecha de nacimiento:</Label>
				<Input className={styles.input} type='date' id='birthdate' />
				<Label labelFor='gender'>Sexo:</Label>
				<select className={styles.input} id='gender' required>
					<option value='masculino'>Masculino</option>
					<option value='femenino'>Femenino</option>
				</select>
				<Label labelFor='address'>Dirección:</Label>
				<textarea
					required
					className={styles.input}
					id='address'
					placeholder='Dirección'
				></textarea>
				<Label labelFor='score'>Nota definitiva:</Label>
				<Input
					className={styles.input}
					type='number'
					id='score'
					min={1}
					max={20}
				/>
				<Button>Cargar Estudiante</Button>
			</form>
			<Button>Menú Principal</Button>
		</Card>
	);
};

export default AddStudent;

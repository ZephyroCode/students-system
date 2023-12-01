import styles from './AddStudent.module.scss';

const AddStudent = () => {
	return (
		<main className={styles.card}>
			<h2 className={styles.title}>Cargar Estudiante</h2>
			<form>
				<label className={styles.label} htmlFor='name'>
					Nombre:{' '}
				</label>
				<input className={styles.input} type='text' id='name' />
				<label className={styles.label} htmlFor='surname'>
					Apellido:{' '}
				</label>
				<input className={styles.input} type='text' id='surname' />
				<label className={styles.label} htmlFor='idnumber'>
					Cédula:{' '}
				</label>
				<input className={styles.input} type='number' id='idnumber' />
				<label className={styles.label} htmlFor='birthdate'>
					Fecha de nacimiento:{' '}
				</label>
				<input className={styles.input} type='date' id='birthdate' />
				<label className={styles.label} htmlFor='gender'>
					Sexo:{' '}
				</label>
				<select className={styles.input} id='gender'>
					<option value='masculino'>Masculino</option>
					<option value='femenino'>Femenino</option>
				</select>
				<label className={styles.label} htmlFor='address'>
					Dirección:{' '}
				</label>
				<textarea
					className={styles.input}
					name='address'
					placeholder='Dirección'
				></textarea>
				<label className={styles.label} htmlFor='score'>
					Nota definitiva:{' '}
				</label>
				<input
					className={styles.input}
					type='number'
					id='score'
					min={1}
					max={20}
				/>
				<button className={styles.button}>Menú Principal</button>
				<button type='submit' className={styles.button}>
					Cargar Estudiante
				</button>
			</form>
		</main>
	);
};

export default AddStudent;

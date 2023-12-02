import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import styles from './ModifyScore.module.scss';
import Label from '../pieces/Label';
import Button from '../pieces/Button';

const ModifyScore = () => {
	return (
		<Card>
			<CardTitle>Modificar Nota Definitiva</CardTitle>
			<form>
				<Label labelFor='newscore'>Ingrese la nueva nota definitiva:</Label>
				<input
					className={styles.input}
					type='number'
					id='newscore'
					min={1}
					max={20}
				/>
				<Button>Actualizar Nota Definitiva</Button>
			</form>
			<Button>Seleccionar Otra Opción</Button>
			<Button>Menú Principal</Button>
		</Card>
	);
};

export default ModifyScore;

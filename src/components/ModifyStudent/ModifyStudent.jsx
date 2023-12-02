import Button from '../pieces/Button';
import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import MenuOption from '../pieces/MenuOption';
import styles from './ModifyStudent.module.scss';

const ModifyStudent = () => {
	return (
		<Card>
			<CardTitle>Modificar Estudiante</CardTitle>
			<ul>
				<li>
					<MenuOption>Modificar Nombre</MenuOption>
				</li>
				<li>
					<MenuOption>Modificar Apellido</MenuOption>
				</li>
				<li>
					<MenuOption>Modificar Fecha de Nacimiento</MenuOption>
				</li>
				<li>
					<MenuOption>Modificar Sexo</MenuOption>
				</li>
				<li>
					<MenuOption>Modificar Dirección</MenuOption>
				</li>
				<li>
					<MenuOption>Modificar Nota Definitiva</MenuOption>
				</li>
			</ul>
			<span className={styles.note}>
				<em>Nota: La cédula de un estudiante no puede ser modificada.</em>
			</span>
			<Button>Menú Principal</Button>
		</Card>
	);
};

export default ModifyStudent;

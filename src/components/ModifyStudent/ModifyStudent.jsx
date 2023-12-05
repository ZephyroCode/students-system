import { useContext } from 'react';
import { Context } from '../../context/Context';
import Button from '../pieces/Button';
import Card from '../pieces/Card';
import CardTitle from '../pieces/CardTitle';
import MenuOption from '../pieces/MenuOption';
import styles from './ModifyStudent.module.scss';

const ModifyStudent = () => {
	const { changeCard, studentFound } = useContext(Context);

	return (
		<Card>
			<CardTitle>Modificar Estudiante</CardTitle>
			<p className={styles.text}>
				Cédula seleccionada:{' '}
				<span className={styles.id}>{studentFound.getIdNumber}</span>
			</p>
			<ul>
				<li>
					<MenuOption onClick={() => changeCard('ModifyName')}>
						Modificar Nombre
					</MenuOption>
				</li>
				<li>
					<MenuOption onClick={() => changeCard('ModifySurname')}>
						Modificar Apellido
					</MenuOption>
				</li>
				<li>
					<MenuOption onClick={() => changeCard('ModifyBirthDate')}>
						Modificar Fecha de Nacimiento
					</MenuOption>
				</li>
				<li>
					<MenuOption onClick={() => changeCard('ModifyGender')}>
						Modificar Sexo
					</MenuOption>
				</li>
				<li>
					<MenuOption onClick={() => changeCard('ModifyAddress')}>
						Modificar Dirección
					</MenuOption>
				</li>
				<li>
					<MenuOption onClick={() => changeCard('ModifyScore')}>
						Modificar Nota Definitiva
					</MenuOption>
				</li>
			</ul>
			<span className={styles.note}>
				<em>Nota: La cédula de un estudiante no puede ser modificada.</em>
			</span>
			<Button onClick={() => changeCard('MainMenu')}>Menú Principal</Button>
		</Card>
	);
};

export default ModifyStudent;

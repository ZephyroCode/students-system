import { useContext } from 'react';
import { Context } from '../context/Context';
import Card from './pieces/Card';
import CardTitle from './pieces/CardTitle';
import MenuOption from './pieces/MenuOption';
import { students } from '../data/students';
import styles from './MainMenu.module.scss';

const MainMenu = () => {
	const { changeCard } = useContext(Context);

	return (
		<Card>
			<CardTitle>Elige una opción</CardTitle>
			<ul>
				<li>
					<MenuOption onClick={() => changeCard('AddStudent')}>
						Cargar Estudiante
					</MenuOption>
				</li>
				<li>
					<MenuOption onClick={() => changeCard('SearchStudent')}>
						Buscar Estudiante
					</MenuOption>
				</li>
				<li>
					<MenuOption onClick={() => changeCard('SearchBeforeModify')}>
						Modificar Estudiante
					</MenuOption>
				</li>
				<li>
					<MenuOption onClick={() => changeCard('SearchBeforeDelete')}>
						Eliminar Estudiante
					</MenuOption>
				</li>
				<li>
					<MenuOption>Mostrar Estudiantes</MenuOption>
				</li>
			</ul>
			<p className={styles.text}>
				<strong className={styles.data}>Estudiantes registrados:</strong>{' '}
				{students.length}
			</p>
		</Card>
	);
};

export default MainMenu;

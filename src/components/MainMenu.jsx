import Card from './pieces/Card';
import CardTitle from './pieces/CardTitle';
import MenuOption from './pieces/MenuOption';

const MainMenu = () => {
	return (
		<Card>
			<CardTitle>Elige una opción</CardTitle>
			<ul>
				<li>
					<MenuOption>Cargar Estudiante</MenuOption>
				</li>
				<li>
					<MenuOption>Buscar Estudiante</MenuOption>
				</li>
				<li>
					<MenuOption>Modificar Estudiante</MenuOption>
				</li>
				<li>
					<MenuOption>Eliminar Estudiante</MenuOption>
				</li>
				<li>
					<MenuOption>Mostrar Estudiantes</MenuOption>
				</li>
			</ul>
		</Card>
	);
};

export default MainMenu;

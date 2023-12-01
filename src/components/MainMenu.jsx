import styles from './MainMenu.module.scss';

const MainMenu = () => {
	return (
		<main className={styles.card}>
			<h2 className={styles.title}>Elige una opción</h2>
			<div>
				<p className={styles.option}>Cargar Estudiante</p>
				<p className={styles.option}>Buscar Estudiante</p>
				<p className={styles.option}>Modificar Estudiante</p>
				<p className={styles.option}>Eliminar Estudiante</p>
				<p className={styles.option}>Mostrar Estudiante</p>
			</div>
		</main>
	);
};

export default MainMenu;

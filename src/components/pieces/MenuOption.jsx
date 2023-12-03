import styles from './MenuOption.module.scss';

const MenuOption = props => (
	<p className={styles.option} onClick={props.onClick}>
		{props.children}
	</p>
);

export default MenuOption;

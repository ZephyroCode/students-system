import styles from './MenuOption.module.scss';

const MenuOption = props => <p className={styles.option}>{props.children}</p>;

export default MenuOption;

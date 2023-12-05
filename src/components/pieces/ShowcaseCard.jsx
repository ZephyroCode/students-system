import styles from './ShowcaseCard.module.scss';

const ShowcaseCard = props => (
	<div className={styles.showcaseCard}>{props.children}</div>
);

export default ShowcaseCard;

import { useContext } from 'react';
import styles from './StudentShowcase.module.scss';
import { Context } from '../context/Context';

const StudentShowcase = ({
	name,
	surname,
	idNumber,
	birthdate,
	gender,
	address,
	score,
}) => {
	const { students } = useContext(Context);
	return (
		<table className={styles.table}>
			<thead className={styles.thead}>
				<tr>
					<th className={styles.th}>Nombre</th>
					<th className={styles.th}>Apellido</th>
					<th className={styles.th}>Cédula</th>
					<th className={styles.th}>Fecha de Nacimiento</th>
					<th className={styles.th}>Sexo</th>
					<th className={styles.th}>Dirección</th>
					<th className={styles.th}>Nota Definitiva</th>
				</tr>
			</thead>
			<tbody className={styles.tbody}>
				{students.map((student, i) => (
					<tr key={i}>
						<td className={styles.td}>{student.name}</td>
						<td className={styles.td}>{student.surname}</td>
						<td className={styles.td}>{student.idNumber}</td>
						<td className={styles.td}>{student.birthdate}</td>
						<td className={styles.td}>{student.gender}</td>
						<td className={styles.td}>{student.address}</td>
						<td className={styles.td}>{student.score}</td>
					</tr>
				))}
			</tbody>
			<tfoot>
				<tr>
					<td colSpan={7} className={styles.tfoot}>
						<strong className={styles.text}>Estudiantes Registrados:</strong>{' '}
						{students.length}
					</td>
				</tr>
			</tfoot>
		</table>
	);
};

export default StudentShowcase;

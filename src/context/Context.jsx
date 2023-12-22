import { useState, createContext, useEffect } from 'react';

export const Context = createContext();

export const ContextProvider = props => {
	const [card, setCard] = useState('MainMenu');
	const [student, setStudent] = useState({});
	const [studentFound, setStudentFound] = useState(null);
	const [students, setStudents] = useState(() => {
		const item = localStorage.getItem('students');
		const students = JSON.parse(item);
		if (students === null) {
			return [];
		}
		if (students.length > 0) {
			return students;
		}
		return [];
	});

	const updateStudent = (id, updatedStudent) => {
		setStudents([
			...students.map(student =>
				student.idNumber === id ? { ...student, ...updatedStudent } : student
			),
		]);
	};

	useEffect(() => {
		localStorage.setItem('students', JSON.stringify(students));
	}, [students]);

	const changeCard = cardToShow => {
		setCard(cardToShow);
	};

	return (
		<Context.Provider
			value={{
				card,
				setCard,
				studentFound,
				setStudentFound,
				changeCard,
				students,
				setStudents,
				updateStudent,
				student,
				setStudent,
			}}
		>
			{props.children}
		</Context.Provider>
	);
};

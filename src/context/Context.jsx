import { useState, createContext } from 'react';

export const Context = createContext();

export const ContextProvider = props => {
	const [card, setCard] = useState('MainMenu');
	const [studentFound, setStudentFound] = useState(null);

	const changeCard = cardToShow => {
		setCard(cardToShow);
	};

	return (
		<Context.Provider
			value={{ card, setCard, studentFound, setStudentFound, changeCard }}
		>
			{props.children}
		</Context.Provider>
	);
};

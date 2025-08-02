import { createContext } from "react";

const AppContext = createContext();

export { AppContext };

export const AppContextProvider = (props) => {
	const value = {};
	return (
		<AppContext.Provider value={value}>{props.children}</AppContext.Provider>
	);
};

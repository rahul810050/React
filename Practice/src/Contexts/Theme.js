import React, { useContext, createContext} from "react";

export const ThemeContext = createContext({
	themeMode: 'light',
	lightMode: ()=>{},
	darkMode: ()=>{},
})

export const  ThemeProvider = ThemeContext.Provider

export function useTheme (){
	return useContext(ThemeContext)
}
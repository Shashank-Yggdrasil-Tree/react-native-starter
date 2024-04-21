import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useColorScheme } from 'react-native';

type ColorScheme = 'light' | 'dark';

interface ColorSchemeContextValue {
	colorScheme: ColorScheme;
	toggleColorScheme: () => void;
}

export const ColorSchemeContext = createContext<ColorSchemeContextValue>({
	colorScheme: 'light',
	toggleColorScheme: () => {},
});

interface ColorSchemeProviderProps {
	children: ReactNode;
}

export const ColorSchemeProvider: React.FC<ColorSchemeProviderProps> = ({ children }) => {
	const systemColorScheme = useColorScheme() as ColorScheme;
	const [colorScheme, setColorScheme] = useState<ColorScheme>(systemColorScheme);

	const toggleColorScheme = () => {
		setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
	};

	useEffect(() => {
		setColorScheme(systemColorScheme);
	}, [systemColorScheme]);

	return (
		<ColorSchemeContext.Provider value={{ colorScheme, toggleColorScheme }}>{children}</ColorSchemeContext.Provider>
	);
};

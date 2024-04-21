import React, { ReactNode } from 'react';
import { Text, StyleSheet, ViewStyle } from 'react-native';
import { useContext } from 'react';
import { ColorSchemeContext } from '../app/theme';

const ThemeText = ({ children, ...props }: { children: ReactNode }) => {
	const { colorScheme } = useContext(ColorSchemeContext);

	const styles = StyleSheet.create({
		text: {
			color: colorScheme === 'light' ? 'black' : 'white',
		},
	});

	return (
		<Text style={[styles.text]} {...props}>
			{children}
		</Text>
	);
};

export default ThemeText;

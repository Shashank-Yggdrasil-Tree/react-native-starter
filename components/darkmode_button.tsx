import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ColorSchemeContext } from '../app/theme';
import { D_PURPLE, L_PINK } from '../utils/constants';

interface ButtonProps {
	title: string;
	onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
	const { colorScheme, toggleColorScheme } = useContext(ColorSchemeContext);

	const styles = StyleSheet.create({
		button: {
			backgroundColor: colorScheme === 'light' ? L_PINK : D_PURPLE,
			padding: 10,
			borderRadius: 5,
			marginRight: 15,
		},
		buttonText: {
			color: colorScheme === 'light' ? 'black' : 'white',
			fontWeight: 'bold',
			textAlign: 'center',
		},
	});

	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
};
export default Button;

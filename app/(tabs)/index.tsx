import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { ColorSchemeContext } from '../theme';
import ProductsList from '../../services/product/get_products';

const HomePage = () => {
	const { colorScheme } = useContext(ColorSchemeContext);

	const styles = StyleSheet.create({
		container: {
			backgroundColor: colorScheme === 'light' ? 'white' : 'black',
			height: '100%',
		},
		text: {
			color: colorScheme === 'light' ? 'black' : 'white',
		},
	});
	return (
		<View style={styles.container}>
			<ProductsList />
			<Pressable
				onPress={() =>
					router.push({
						pathname: `/users/[id]`,
						params: { id: 2 },
					})
				}
			></Pressable>
			<StatusBar />
		</View>
	);
};

export default HomePage;

import { Tabs } from 'expo-router';
import { useContext } from 'react';
import { ColorSchemeContext } from '../theme';
import { Image, StyleSheet } from 'react-native';
import Button from '../../components/darkmode_button';
import { D_PURPLE, L_PINK } from '../../utils/constants';

import AntDesign from 'react-native-vector-icons/AntDesign';

const TabsLayout = () => {
	const { colorScheme, toggleColorScheme } = useContext(ColorSchemeContext);

	const styles = StyleSheet.create({
		tab: {
			backgroundColor: colorScheme === 'light' ? L_PINK : D_PURPLE,
		},
		text: {
			color: colorScheme === 'light' ? 'black' : 'white',
		},
	});

	const tabList = [
		{ name: 'index', title: 'Home', icon: 'home' },
		{ name: 'users/[id]', title: 'You', icon: 'user' },
		{ name: 'cart/[id]', title: 'Cart', icon: 'shoppingcart' },
	];

	return (
		<Tabs>
			{tabList.map((data) => (
				<Tabs.Screen
					key={data.name}
					name={data.name}
					options={{
						headerTitle: data.title,
						title: data.title,
						headerStyle: styles.tab,
						headerTitleStyle: styles.text,
						headerTintColor: styles.text.color,
						headerRight: () => (
							<Button title={colorScheme === 'light' ? 'Night Mode' : 'Day Mode'} onPress={toggleColorScheme} />
						),
						tabBarStyle: {
							backgroundColor: colorScheme === 'light' ? 'white' : 'rgba(34,36,40,1)',
							position: 'absolute',
							borderTopWidth: 0,
						},
						tabBarIcon: ({ size, focused, color }) => {
							return <AntDesign name={data.icon} size={size} color={color} />;
						},
					}}
				/>
			))}
		</Tabs>
	);
};

export default TabsLayout;

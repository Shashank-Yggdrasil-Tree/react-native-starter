import { useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

const UserPage = () => {
	const { id } = useLocalSearchParams<{ id: string }>();
	return (
		<View>
			<Text>Users are here 🥳🥳🥳</Text>
			<Text>And your Id is {id}</Text>
			<StatusBar />
		</View>
	);
};

export default UserPage;

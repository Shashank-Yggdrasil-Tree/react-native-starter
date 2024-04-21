import { Stack } from 'expo-router';
import { ColorSchemeProvider } from './theme';

const RootLayout = () => {
	return (
		<ColorSchemeProvider>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			</Stack>
		</ColorSchemeProvider>
	);
};

export default RootLayout;

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function App() {
	return (
		<View style={styles.container}>
			<Text className="font-bold text-5xl">Index page</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

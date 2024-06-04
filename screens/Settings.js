import React from 'react';
import { View } from 'react-native';
import { Text, Button, useTheme, Card } from 'react-native-paper';

function Settings({ navigation }) {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.backdrop }}>
      <Card>
				<Button
					mode="contained"
					onPress={() => navigation.navigate('StorageScreen')}
					style={styles.button}
				>
					DebugStorageScreen
				</Button>
        <View style={{ height: 16 }} />
				<Button
					mode="contained"
					onPress={() => navigation.navigate('ContextScreen')}
					style={styles.button}
				>
					DebugContextScreen
				</Button>
			</Card>
    </View>
  );
}

export default Settings;

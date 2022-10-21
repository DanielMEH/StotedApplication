import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Alert, Text, View,TextInput, TouchableNativeFeedback } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
      onPress={()=> Alert.alert("Hola mundo")}
      >
      <Text> MY appp en react-app con expo</Text>
      </TouchableNativeFeedback > 

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

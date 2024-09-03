import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  
  const onpressbutton = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.resultcontainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.inputText}
          value={input}
          onChangeText={setInput}
          keyboardType='numeric'
        />
      </View>
      <View style={styles.buttoncontainer}>
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '=', '+'].map(
          (item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => onpressbutton(item)}
            >
              <Text style={styles.buttontext}>{item}</Text>
            </TouchableOpacity>
          )
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background
  },
  resultcontainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  resultText: {
    fontSize: 40,
    padding: 10,
    color: '#FFFFFF', // White text color
  },
  inputcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  inputText: {
    fontSize: 30,
    padding: 10,
    color: '#FFFFFF', // White text color
  },
  buttoncontainer: {
    flex: 7,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 0, // Remove space at the bottom
  },
  button: {
    fontSize: 24,
    width: "25%",
    height: "20%",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#333", // Darker border color
    backgroundColor: '#1F1F1F', // Darker button background
    borderRadius: 8, // Rounded corners for a more modern look
  },
  buttontext: {
    fontSize: 24,
    color: '#FFFFFF', // White text color
  },
});

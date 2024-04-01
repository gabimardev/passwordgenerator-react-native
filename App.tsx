import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Clipboard
} from 'react-native';



const App = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState('14');

  const generatePassword = () => {
    let all_character =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%*&!';
    let newPassword = '';

    for (let i = 0; i < parseInt(length); i++) {
      newPassword += all_character.charAt(
        Math.floor(Math.random() * all_character.length),
      );
    }

    setPassword(newPassword);
  };
  // Function to copy password to clipboard.
  const copyToClipboard = () => {
    Clipboard.setString(password);
    alert('Copied!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Password Generator</Text>
        <TouchableOpacity style={styles.button} onPress={generatePassword}>
          <Text style={styles.textButton}>🔑 Generate Password</Text>
        </TouchableOpacity>
        {password !== '' && (
          <>
            <View style={styles.containerPassword}>
              <Text style={styles.text}>Generated Password:</Text>
            </View>
            <View style={styles.containerPassword}>
              <TextInput value={password} style={styles.inputPassword} />
              <TouchableOpacity
                style={styles.copyButton}
                onPress={copyToClipboard}>
                <Text style={styles.textButton}>📋</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  viewContainer: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#1370b6',
  },
  containerPassword: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 17,
  },
  inputPassword: {
    flex: 2,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 21,
  },
  button: {
    padding: 13,
    backgroundColor: '#1370b6',
    color: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 15,
  },
  textButton: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  copyButton: {
    marginLeft: 10,
    backgroundColor: '#e1f8fc',
    color: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
    padding: 10,
    fontSize: 14,
  },
  successMessage: {
    color: 'green',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default App;

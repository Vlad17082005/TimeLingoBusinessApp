// app/(auth)/signup.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter, Link } from 'expo-router';
import CustomButton from '../../components/CustomButton';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignUp = () => {
    console.log('Name:', name, 'Email:', email, 'Password:', password);
    // Add sign-up logic here
    router.push('/SignIn'); // Redirect to login page after sign-up
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.buttomContainer}>
        <CustomButton text='Sign In' onPress={handleSignUp}  />
      </View>
      <View style={styles.linkContainer}>
        <Link href="/SignIn" style={styles.linkText}>
          Already have an account? Sign In
        </Link>
      </View>
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
    container: { flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 20 
  },
 
  input: { width: '100%', 
    padding: 10,
    borderWidth: 1, 
    marginBottom: 15,
    borderRadius: 5 },
 

  linkContainer: {
    width: '100%',
    alignItems: 'flex-end', 
    marginTop: 20,
  },

  linkText: {
    color: 'blue', 
    textDecorationLine: 'underline', 
    fontSize: 14,
  },

  buttomContainer: {
    marginVertical: 10,
    width: '90%',
  }
});

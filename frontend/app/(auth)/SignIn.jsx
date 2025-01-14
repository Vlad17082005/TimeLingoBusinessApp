// app/(auth)/login.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter, Link } from 'expo-router';
import CustomButton from '../../components/CustomButton';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/authentication/signin/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Sign-in successful!', data);
        
        // Save token for future authenticated requests
        // Example: AsyncStorage for local storage
        // await AsyncStorage.setItem('token', data.token);
  
        router.push('/MainPage'); // Redirect to the Main Page
      } else {
        const errorData = await response.json();
        console.error('Sign-in failed:', errorData);
        alert(errorData.error || 'Sign-in failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again later.');
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
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
        <CustomButton text="Sign In" onPress={handleSignIn} />
      </View>
      <View style={styles.linkContainer}>
        <Link href="/SignUp" style={styles.linkText}>
          Don't have an account? Sign Up
        </Link>
      </View>
    </View>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
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
    borderRadius: 5 
  },

  buttomContainer: {
    marginVertical: 10,
    width: '90%'
  },

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
});

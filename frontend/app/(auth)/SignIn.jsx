// app/(auth)/login.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter, Link } from 'expo-router';
import CustomButton from '../../components/CustomButton';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignUp = () => {
    console.log('Email:', email, 'Password:', password);
    // Add authentication logic here
    router.push('/MainPage'); // Redirect to main home page after login
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
        <CustomButton text="Sign In" onPress={handleSignUp} />
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

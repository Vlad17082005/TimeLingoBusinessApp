// app/MainPage.jsx
import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import CustomButton from '../components/CustomButton';

const MainPage = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To TimeLingo!</Text>
      <View style={styles.buttomContainer}>
        <CustomButton text='Sign In' onPress={() => router.push('/SignIn')}/>
      </View>
      <View style={styles.buttomContainer}>
      <CustomButton text='Sign Up' onPress={() => router.push('/SignUp')}/>
      </View>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttomContainer: {
    marginVertical: 10,
    width: '80%',
  }
});

import React, {useState} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

import {userSignIn} from '../actions/user';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    height: '30%',
    width: '25%',
  },
  buttonIcon: {
    height: '90%',
    width: '90%',
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
  },
});

const SignIn = ({navigation}) => {
  const [state, setState] = useState({
    user: undefined,
    password: undefined,
    userKey: undefined,
  });

  function onSignInPress() {
    if (isFormValid()) {
      userSignIn(state.user, state.password)
        .then(response => {
          // successful signin
          if (response) {
            setState(prevState => {
              const nextState = {
                ...prevState,
                user: undefined,
                password: undefined,
              };
              return nextState;
            });
            navigation.navigate('Home');
          }
        })
        .catch(error => {
          // oh no something went wrong
          console.log(error);
        });
    } else {
      Alert.alert('Error', 'Please input text into both fields', [
        {text: 'Understood', onPress: () => {}, style: 'cancel'},
      ]);
    }
  }

  function isFormValid() {
    let isValid = true;
    if (!state.user || !state.password) {
      isValid = false;
    }
    return isValid;
  }

  function onChangeUsername(text) {
    setState(prevState => {
      const nextState = {
        ...prevState,
        user: text,
      };
      return nextState;
    });
  }

  function onChangePassword(text) {
    setState(prevState => {
      const nextState = {
        ...prevState,
        password: text,
      };
      return nextState;
    });
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Username</Text>
      <TextInput
        onChangeText={onChangeUsername}
        placeholder="Username"
        value={state.user}
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        isPassword
        onChangeText={onChangePassword}
        placeholder="Password"
        value={state.password}
      />
      <Button onPress={() => onSignInPress()} buttonText="Sign In" />
    </View>
  );
};

export default SignIn;

import React from 'react';
import {TextInput as Input, StyleSheet} from 'react-native';
import Dimensions from '../config/dimensions';

const styles = StyleSheet.create({
  input: {
    width: Dimensions.screenWidth / 1.5,
    height: '8%',
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputLarge: {
    width: Dimensions.screenWidth / 1.5,
    height: '30%',
    borderWidth: 2,
    borderRadius: 10,
    textAlign: 'left',
    textAlignVertical: 'top',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  text: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 20,
    color: 'black',
  },
});

const TextInput = props => {
  const {ref, type, onChangeText, placeholder, value, style, isPassword, editable} =
    props;

  if (type === 'large') {
    return (
      <Input
        editable={editable}
        style={[styles.inputLarge, style]}
        onChangeText={onChangeText}
        keyboardType={'default'}
        placeholder={placeholder}
        multiline
        placeholderTextColor={'grey'}
        value={value}
      />
    );
  }

  return (
    <Input
      editable={editable}
      style={[styles.input, style]}
      onChangeText={onChangeText}
      secureTextEntry={isPassword}
      keyboardType={'default'}
      placeholder={placeholder}
      placeholderTextColor={'grey'}
      value={value}
    />
  );
};

export default TextInput;

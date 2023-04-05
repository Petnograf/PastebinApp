import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import Dimensions from '../config/dimensions';

const addIcon = require('../assets/images/add.png');
const deleteIcon = require('../assets/images/delete.png');
const editIcon = require('../assets/images/edit.png');

const styles = StyleSheet.create({
  iconButtonContainer: {
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  textButton: {
    marginTop: Dimensions.marginTop,
    width: Dimensions.screenWidth / 2,
    height: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    alignContent: 'center',
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
});

const Button = props => {
  const {ref, onPress, buttonText, style, type, textStyle} = props;

  function getIcon() {
    switch (type) {
      case 'add':
        return addIcon;
      case 'delete':
        return deleteIcon;
      case 'edit':
        return editIcon;
      default:
        break;
    }
  }

  if (type) {
    return (
      <TouchableOpacity
        ref={ref}
        style={[styles.iconButtonContainer, style]}
        onPress={onPress}>
        <Image source={getIcon()} />
      </TouchableOpacity>
    );
  }

  if (buttonText) {
    return (
      <TouchableOpacity
        ref={ref}
        style={[styles.textButton, style]}
        onPress={onPress}>
        <Text style={[styles.text, textStyle]}>{buttonText}</Text>
      </TouchableOpacity>
    );
  }

  return null;
};

export default Button;

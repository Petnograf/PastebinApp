import React from 'react';
import {TouchableOpacity, Image, View, Text, StyleSheet} from 'react-native';
import Dimensions from '../config/dimensions';

const styles = StyleSheet.create({
  headerBarStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: '10%',
    paddingTop: 15,
  },
  buttonContainer: {
    width: '20%',
  },
  leftButtonPadding: {
    marginLeft: '8%',
  },
  buttonIcon: {
    marginTop: Dimensions.marginTop / 4,
    height: '60%',
    width: '60%',
    resizeMode: 'contain',
  },
});

const backImage = require('../assets/images/back-arrow.png');
const signOutImage = require('../assets/images/sign-out.png');

const HeaderBar = props => {
  const {onBackButtonPress, onSignOutButtonPress, screen} = props;

  return (
    <View style={styles.headerBarStyle}>
      <View style={[styles.leftButtonPadding, styles.buttonContainer]}>
        {screen !== 'ListView' ? (
          <TouchableOpacity onPress={onBackButtonPress}>
            <Image style={styles.buttonIcon} source={backImage} />
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onSignOutButtonPress}>
          <Image style={styles.buttonIcon} source={signOutImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderBar;

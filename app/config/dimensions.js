import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
export default {
  screenHeight: height,
  screenWidth: width,

  marginTop: height / 16,
};

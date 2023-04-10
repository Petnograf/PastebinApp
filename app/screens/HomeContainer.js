import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Alert, Text} from 'react-native';
import {connect} from 'react-redux';

import {getUserListOfPastes, userSignOut} from '../actions/user';
import {transformPastes} from '../util';

// components
import HeaderBar from '../components/HeaderBar';

// screens
import ListView from '../screens/ListView';
import ListItemDetails from './ListItemDetails';

const HomeContainer = ({navigation, user}) => {
  const [screen, setScreen] = useState('ListView');
  const [state, setState] = useState({
    title: undefined,
    description: undefined,
    id: 0,
    pastesArray: [],

    isUpdate: false,
    itemIdToUpdate: undefined,
  });

  useEffect(() => {
    onReloadList();
  }, []);

  const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      marginTop: 50,
      justifyContent: 'center',
    },
    screenContainer: {
      height: '100%',
      justifyContent: 'center',
      backgroundColor: '#F9F9F9',
    },
  });

  function signOut() {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {text: 'Cancel', onPress: () => {}, style: 'cancel'},
      {text: 'Logout', onPress: () => {
        userSignOut();
        navigation.navigate('SignIn')
      }},
    ]);
  }

  function onReloadList() {
    getUserListOfPastes(user)
    .then(response => {
      if (response) {
        const formattedArray = transformPastes(response);
        setState(prevState => {
          const nextState = {
            ...prevState,
            pastesArray: formattedArray,
          };
          return nextState;
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
  }

  function onBackButtonPress() {
    setState(prevState => {
      const nextState = {
        ...prevState,
        title: undefined,
        description: undefined,
        isUpdate: false,
      };
      return nextState;
    });
    setScreen('ListView');
  }

  function renderScreen() {
    switch (screen) {
      case 'ListView':
        return (
          <ListView
            onReloadList={onReloadList}
            user={user}
            setScreen={setScreen}
            state={state}
            setState={setState} />
        );
      case 'ListItemDetails':
        return (
          <ListItemDetails
            onReloadList={onReloadList}
            user={user}
            setScreen={setScreen}
            setState={setState}
            state={state}
          />
        );
      default:
        break;
    }
  }

  return (
    <View style={styles.mainView}>
      <HeaderBar
        onBackButtonPress={onBackButtonPress}
        onSignOutButtonPress={signOut}
        screen={screen}
      />
      <View style={styles.screenContainer}>{renderScreen()}</View>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(HomeContainer);

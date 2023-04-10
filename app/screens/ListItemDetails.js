import React, {useState, useEffect, useRef} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';

import {addPaste} from '../actions/user';

import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Dimensions from '../config/dimensions';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
  },
  marginTop: {
    marginTop: Dimensions.marginTop,
  },
});
const ListItemDetails = ({setState, state, setScreen, user, onReloadList}) => {
  function onChangeTitle(text) {
    setState(prevState => {
      const nextState = {
        ...prevState,
        title: text,
      };
      return nextState;
    });
  }

  function onChangeDescription(text) {
    setState(prevState => {
      const nextState = {
        ...prevState,
        description: text,
      };
      return nextState;
    });
  }

  function onAddPastebin() {
    if (state.title && state.description) {
      addPaste(user, state.title, state.description)
      .then(response => {
        if (response) {
          setState(prevState => {
            const nextState = {
              ...prevState,
              title: undefined,
              description: undefined,
            };
            return nextState;
          });
          onReloadList();
          setScreen('ListView');
        }
      })
      .catch(error => {
        Alert.alert('Error', 'Something went wrong with the API call', [
          {text: 'Oh No :(', onPress: () => {}, style: 'cancel'},
        ]);
      });
    } else {
      Alert.alert('Error', 'Please input text into both fields', [
        {text: 'Understood', onPress: () => {}, style: 'cancel'},
      ]);
    }
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Title</Text>
      <TextInput
        editable={!state.isUpdate}
        onChangeText={onChangeTitle}
        placeholder="Title"
        value={state.title}
      />
      <Text style={[styles.text, styles.marginTop]}>Description</Text>
      <TextInput
        editable={!state.isUpdate}
        type="large"
        onChangeText={onChangeDescription}
        placeholder="Description"
        value={state.description}
      />
      {!state.isUpdate && (
        <Button
        onPress={() => onAddPastebin()}
        buttonText={'Add'}
      />
      )}

    </View>
  );
};

export default ListItemDetails;

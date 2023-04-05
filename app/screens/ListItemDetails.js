import React, {useState, useEffect, useRef} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';

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
const ListItemDetails = ({setState, state, setScreen}) => {
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

  function onUpdatePastebin() {
    const tempArray = state.pastesArray;
    const objIndex = tempArray.findIndex(
      obj => obj.id === state.itemIdToUpdate,
    );

    //Update object's fields
    tempArray[objIndex].title = state.title;
    tempArray[objIndex].description = state.description;
    tempArray[objIndex].id = state.itemIdToUpdate;

    setState(prevState => {
      const nextState = {
        ...prevState,
        title: undefined,
        description: undefined,
        pastesArray: tempArray,
        isUpdate: false,
      };
      return nextState;
    });
    setScreen('ListView');
  }

  function onAddPastebin() {
    if (state.title && state.description) {
      const tempObject = {
        title: state.title,
        description: state.description,
        id: state.id + 1,
      };
      let tempArray = state.pastesArray;
      tempArray.push(tempObject);
      setState(prevState => {
        const nextState = {
          ...prevState,
          title: undefined,
          description: undefined,
          id: state.id + 1,
          pastesArray: tempArray,
        };
        return nextState;
      });
      setScreen('ListView');
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
        onChangeText={onChangeTitle}
        placeholder="Title"
        value={state.title}
      />
      <Text style={[styles.text, styles.marginTop]}>Description</Text>
      <TextInput
        type="large"
        onChangeText={onChangeDescription}
        placeholder="Description"
        value={state.description}
      />
      <Button
        onPress={() => (state.isUpdate ? onUpdatePastebin() : onAddPastebin())}
        buttonText={state.isUpdate ? 'Update' : 'Add'}
      />
    </View>
  );
};

export default ListItemDetails;

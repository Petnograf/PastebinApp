import React from 'react';
import {ScrollView, StyleSheet, Text, View, Alert} from 'react-native';
import Button from '../components/Button';
import Dimensions from '../config/dimensions';

import {useQuery} from '@apollo/client';
import {PASTEBIN_QUERY} from '../gql/Query';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listView: {
    marginTop: 20,
    marginBottom: 20,
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 15,
  },
  listItemTextContainer: {
    borderRadius: 5,
    borderWidth: 1,
    width: '50%',
    height: 50,
    padding: 10,
    marginLeft: Dimensions.marginTop / 2,
    marginRight: Dimensions.marginTop / 2,
  },
  separatorView: {
    marginLeft: 5,
  },
  buttonContainer: {
    marginTop: Dimensions.marginTop / 2,
    height: '30%',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
  },
});

const ListView = ({setState, state, setScreen}) => {
  function onAddItem() {
    setScreen('ListItemDetails');
  }

  // const {data} = useQuery(PASTEBIN_QUERY);

  function onEditItem(item) {
    setState(prevState => {
      const nextState = {
        ...prevState,
        title: item.title,
        description: item.description,
        itemIdToUpdate: item.id,
        isUpdate: true,
      };
      return nextState;
    });
    setScreen('ListItemDetails');
  }

  function onDeleteItem(item) {
    Alert.alert('Delete', `Are you sure you want to delete ${item.title}?`, [
      {text: 'Cancel', onPress: () => {}, style: 'cancel'},
      {
        text: 'Yes',
        onPress: () => {
          let tempArray = state.pastesArray;
          const index = tempArray.indexOf(item);
          if (index > -1) {
            tempArray.splice(index, 1);
          }
          setState(prevState => {
            const nextState = {
              ...prevState,
              pastesArray: tempArray,
            };
            return nextState;
          });
        },
        style: 'destructive',
      },
    ]);
  }

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.listView}>
        {state.pastesArray.length === 0 ? (
          <Text>Nothing here yet...</Text>
        ) : (
          state.pastesArray.map(item => (
            <View key={item.id} style={styles.listItem}>
              <View style={styles.listItemTextContainer}>
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
              </View>
              <Button type="edit" onPress={() => onEditItem(item)} />
              <View style={styles.separatorView} />
              <Button type="delete" onPress={() => onDeleteItem(item)} />
            </View>
          ))
        )}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button type="add" onPress={() => onAddItem()} />
      </View>
    </View>
  );
};

export default ListView;

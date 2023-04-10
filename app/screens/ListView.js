import React from 'react';
import {ScrollView, StyleSheet, Text, View, Alert} from 'react-native';
import Button from '../components/Button';
import Dimensions from '../config/dimensions';

import {deletePaste} from '../actions/user';

import {useQuery} from '@apollo/client';
import {PASTEBIN_QUERY} from '../gql/Query';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  listViewContainer: {
    marginTop: 15,
    paddingTop: 10,
    paddingBottom: 10,
    maxHeight: '70%',
  },
  listItem: {
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
    flex: 1,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    marginTop: Dimensions.marginTop / 2,
    height: '20%',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
  },
});
let showTryText = true;

const ListView = ({setState, state, setScreen, user, onReloadList}) => {
  function onAddItem() {
    setScreen('ListItemDetails');
  }

  function onRefreshList() {
    if (showTryText) {
      Alert.alert('Paste from Web', 'Try adding a paste from web and then press the refresh button!', [
        {text: 'Alright', onPress: () => {}, style: 'cancel'},
      ]);
      showTryText = false;
    }
    onReloadList();
  }

  // const {data} = useQuery(PASTEBIN_QUERY);

  function onEditItem(item) {
    setState(prevState => {
      const nextState = {
        ...prevState,
        title: item.paste_title[0],
        description: item.paste_url[0],
        itemIdToUpdate: item.paste_key[0],
        isUpdate: true,
      };
      return nextState;
    });
    setScreen('ListItemDetails');
  }

  function onDeleteItem(item) {
    Alert.alert('Delete', `Are you sure you want to delete ${item.paste_title[0]}?`, [
      {text: 'Cancel', onPress: () => {}, style: 'cancel'},
      {
        text: 'Yes',
        onPress: () => {
          deletePaste(user, item.paste_key[0])
          .then(response => {
            if (response) {
              onReloadList();
            }
          })
          .catch(error => {
            console.log(error);
          });
        },
        style: 'destructive',
      },
    ]);
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.listViewContainer}>
        <ScrollView>
          <Text style={{display: !state.pastesArray ? 'flex' : 'none'}}>Nothing here yet...</Text>
          {state.pastesArray && (
            <View>
              {state.pastesArray.map(item => (
              <View key={item.paste_key[0]} style={styles.listItem}>
                <View style={styles.listItemTextContainer}>
                  <Text>{item.paste_title[0]}</Text>
                  <Text>{item.paste_url[0]}</Text>
                </View>
                <Button type="edit" onPress={() => onEditItem(item)} />
                <View style={styles.separatorView} />
                <Button type="delete" onPress={() => onDeleteItem(item)} />
              </View>
            ))}
            </View>
          )}
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <Button type="add" onPress={() => onAddItem()} />
          <View style={styles.separatorView} />
        <Button type="refresh" onPress={() => onRefreshList()} />
      </View>
    </View>
  );
};

export default ListView;

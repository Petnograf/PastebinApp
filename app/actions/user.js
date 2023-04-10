import PastebinAPI from '../api/PastebinAPI';
import Config from 'react-native-config';
import Store from '../config/store';
import * as types from './types';

export async function userSignIn(user, password) {
  try {
    const body = {
      devKey: Config.PASTEBIN_API_KEY,
      userName: user,
      password: password,
    };
    try {
      const response = await PastebinAPI.userSignIn(body);
      Store.dispatch({
        type: types.SET_USER,
        payload: response,
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }

  } catch (error) {
    throw error;
  }
}

export async function userSignOut() {
  Store.dispatch({
    type: types.SET_USER,
    payload: {},
  });
}

export async function getUserListOfPastes(userKey) {
  try {
    const body = {
      devKey: Config.PASTEBIN_API_KEY,
      userKey: userKey,
    };
    const response = await PastebinAPI.getUserListOfPastes(body);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function addPaste(userKey, title, description) {
  try {
    const body = {
      devKey: Config.PASTEBIN_API_KEY,
      userKey: userKey,
      pasteCode: description,
      pasteName: title,
    };
    const response = await PastebinAPI.addPastebin(body);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function deletePaste(user, pasteKey) {
  try {
    const body = {
      devKey: Config.PASTEBIN_API_KEY,
      pasteKey: pasteKey,
      userKey: user,
    };
    const response = await PastebinAPI.deletePastebin(body);
    return response;
  } catch (error) {
    throw error;
  }
}

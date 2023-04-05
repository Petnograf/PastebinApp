import PastebinAPI from '../api/PastebinAPI';
import Config from 'react-native-config';
import Store from '../config/store';
import * as types from './types';

export async function userSignIn(user, password) {
  try {
    const body = {
      api_dev_key: Config.PASTEBIN_API_KEY,
      api_user_name: user,
      api_user_password: password,
    };
    const response = 'userkeycheck';
    // const response = await PastebinAPI.userSignIn(body);
    Store.dispatch({
      type: types.SET_USER,
      payload: response,
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getUserListOfPastes(userKey) {
  try {
    const body = {
      api_dev_key: Config.PASTEBIN_API_KEY,
      api_user_key: userKey,
      api_option: 'list',
    };
    const response = await PastebinAPI.userSignIn(body);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function addPaste(title, description) {
  try {
    const body = {
      api_dev_key: Config.PASTEBIN_API_KEY,
      api_option: 'paste',
      api_paste_code: description,
      api_paste_name: title,
    };
    const response = await PastebinAPI.userSignIn(body);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function editPaste(description, title, pasteKey) {
  try {
    const body = {
      api_dev_key: Config.PASTEBIN_API_KEY,
      api_option: 'paste',
      api_paste_code: description,
      api_paste_name: title,
      api_paste_key: pasteKey,
    };
    const response = await PastebinAPI.userSignIn(body);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function deletePaste(pasteKey) {
  try {
    const body = {
      api_dev_key: Config.PASTEBIN_API_KEY,
      api_paste_key: pasteKey,
      api_option: 'delete',
    };
    const response = await PastebinAPI.userSignIn(body);
    return response;
  } catch (error) {
    throw error;
  }
}

const HOST = 'http://localhost:3000/v1';

const submitJsonRequest = (url, options) =>
  new Promise((resolve, reject) => {
    fetch(url, options).then(async resp => {
      const json = resp.json();
      if (resp.ok) {
        resolve(json);
      } else {
        const error = await json.then().catch(err => err);
        reject(error);
      }
    });
  });

class PastebinAPI {
  static jsonHeaders() {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }

  static async userSignIn(body) {
    const url = `${HOST}/api_login`;
    const params = {
      body: body,
    };
    const options = {
      method: 'POST',
      body: JSON.stringify(params),
      headers: this.jsonHeaders(),
    };
    return submitJsonRequest(url, options);
  }

  static async getUserListOfPastes(body) {
    const url = `${HOST}/api_login`;
    const params = {
      body: body,
    };
    const options = {
      method: 'POST',
      body: JSON.stringify(params),
      headers: this.jsonHeaders(),
    };
    return submitJsonRequest(url, options);
  }

  static async addPastebin(body) {
    const url = `${HOST}/api_login`;
    const params = {
      body: body,
    };
    const options = {
      method: 'POST',
      body: JSON.stringify(params),
      headers: this.jsonHeaders(),
    };
    return submitJsonRequest(url, options);
  }

  static async editPastebin(body) {
    const url = `${HOST}/api_login`;
    const params = {
      body: body,
    };
    const options = {
      method: 'POST',
      body: JSON.stringify(params),
      headers: this.jsonHeaders(),
    };
    return submitJsonRequest(url, options);
  }

  static async deletePastebin(body) {
    const url = `${HOST}/api_login`;
    const params = {
      body: body,
    };
    const options = {
      method: 'POST',
      body: JSON.stringify(params),
      headers: this.jsonHeaders(),
    };
    return submitJsonRequest(url, options);
  }
}

export default PastebinAPI;

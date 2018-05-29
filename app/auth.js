import { AsyncStorage } from "react-native";

export const USER_KEY = "auth-demo-key";

export const USER_URL = "auth-key-url";

export const onSignIn = () => AsyncStorage.setItem(USER_KEY, "true");

export const onUrl = async url => AsyncStorage.setItem(USER_URL, url);

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};

export const isUrl = () => {
  return new Promise((resolve, reject) => {
    debugger;
    AsyncStorage.getItem(USER_URL)
      .then(res => {
        if (res !== null) {
          resolve(res);
        } else {
          resolve(null);
        }
      })
      .catch(err => reject(err));
  });
};

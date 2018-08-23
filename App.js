/*

*/
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Expo from 'expo';

//
import MapDemo from './MapDemo';
import ContactsDemo from './ContactsDemo';
import CompassDemo from './CompassDemo';

export default class App extends React.Component {
  render() {
    return (
        // <MapDemo/>
        // <ContactsDemo/>
        <CompassDemo/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Expo.Constants.statusBarHeight
  },
});

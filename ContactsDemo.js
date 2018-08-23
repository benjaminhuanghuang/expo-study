/*
    https://docs.expo.io/versions/v28.0.0/sdk/contacts#__next

    Using Permissiions and Locaiton api
    Show marker
    Address to coordinate
*/
import React from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';


import Expo from 'expo';

export default class ContactsDemo extends React.Component {
    state = {
    };

    componentWillMount() {

    }

    _getRandomContactAsync = async () => {
        // Ask for permission to query contacts.
        const permission = await Expo.Permissions.askAsync(Expo.Permissions.CONTACTS);
        if (permission.status !== 'granted') {
            // Permission was denied...
            return;
        }

        let contacts = await Expo.Contacts.getContactsAsync({
            fields: [
                Expo.Contacts.PHONE_NUMBERS,
                Expo.Contacts.EMAILS,
            ],
            pageSize: 10,
            pageOffset: 0,
        });

        let {total} = contacts;

        let n = Math.floor(Math.random() * total);

        contacts = await Expo.Contacts.getContactsAsync({
            fields: [
                Expo.Contacts.PHONE_NUMBERS,
                Expo.Contacts.EMAILS,
            ],
            pageSize: n,
            pageOffset: 0
        });

        let {data} = contacts;
        let c = data[0];
        this.setState({
            randomContact: c
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Pick a random contact" onPress={() => {
                    this._getRandomContactAsync();
                }}>
                </Button>
                {
                    this.state.randomContact &&(
                        <Text>{this.state.randomContact.name}</Text>
                    )
                }              
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Expo.Constants.statusBarHeight
    },
});

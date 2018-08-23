/*
    https://docs.expo.io/versions/v28.0.0/sdk/contacts#__next

    Using Permissiions and Locaiton api
    Show marker
    Address to coordinate
*/
import React from 'react';
import { Platform, StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';


import Expo from 'expo';

export default class CompassDemo extends React.Component {
    state = {
        isReady: false
    };

    _setupMagnetometerAsync()
    {
        Expo.Magnetometer.addListener((v)=>{
             this.setState({v});
        });
    }

    componentDidMount(){
        this._setupMagnetometerAsync();
    }

    render() {
        let theta = "0rad";

        if(this.state.v){
            let {x,y,z} = v;
            theta = Math.atan(-x/y); 
            if(-x > 0 && y>0)
            {
            
            }
            else if(y>0)
            {
                theta += Math.PI;
            }   
            else{ 
                theta += Math.PI * 2;
            }  
        }
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./assets/CompassFace.png')} style={
                    {
                        height: 320,
                        width: 320,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }
                }>
                    <Image source={require('./assets/CompassNeedle.png')} style={
                        {
                            height: 310,
                            width: 310,
                            opacity: 0.65,
                            transform:[{rotate: theta} ]
                        }} />
                </ImageBackground>

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

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

const logoURI = require('./img/logo.png');

class App extends Component {

    state = {
        loggedIn: null // null | false | true
    };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBRAn3r2RXmx7bGtu0-uOXADAdmqr3CoPo",
            authDomain: "gifter-840a7.firebaseapp.com",
            databaseURL: "https://gifter-840a7.firebaseio.com",
            projectId: "gifter-840a7",
            storageBucket: "gifter-840a7.appspot.com",
            messagingSenderId: "103995237499",
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }



    renderContent() {
        switch(this.state.loggedIn) {
            case true:
                return ( 
                    <Button onPress={() => firebase.auth().signOut()}>
                        Logout
                    </Button> 
                );
            case false:
                return <LoginForm />;        
            default:
                return <Spinner />;
        }
    }

    render() {
        return (
            <View>
                <Header logoURI={logoURI}/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
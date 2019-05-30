import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };
    
    onButtonPress() {
        const { email, password } = this.state;
        console.log("I am in");
        this.setState({error: '', loading: true});
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this))
            });
    }
    onLoginFail() {
        console.log("I am in 3");
        this.setState({
            error: 'Authentication Failed!',
            loading: false
        });
    }

    onLoginSuccess() {
        console.log("I am in 2");
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderButton() {
        if(this.state.loading) {
            return <Spinner />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='john.doe@gmail.com'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email: email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label='Password'
                        placeholder='******'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password: password })}
                    />
                </CardSection>
                <Text style={styles.errorText}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
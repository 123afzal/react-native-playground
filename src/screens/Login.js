import React, { Component } from 'react';
import { LoginStyles } from './styles/login';

import { connect } from 'react-redux'; //to pass functions
import { bindActionCreators } from 'redux';
import { loginRequest } from '../actions'; //for use the Rest_API
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

class Login extends Component {
    // static navigationOptions = {
    //     title: 'Login',


    // };
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentWillMount() {

    }

    render() {
        let { user } = this.props.auth;
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                    </Form>
                    <Button block primary onPress={() => this.props.navigation.replace('Home')}
                        style={LoginStyles.loginBtn}>
                        <Text>
                            Login
                        </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    //pass the providers
    return {
        auth: state.auth
    }
}

/* Map Actions to Props */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            loginRequest
        }, dispatch)
    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Login);

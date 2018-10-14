
import React, { Component } from 'react';
import colors from '../constants/colors';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

import { NavigationActions } from 'react-navigation';

const resetAction = (route) => {
    return NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: route })],
    });
}


class Sidebar extends Component {

    render() {
        return (
            <Container style={{
                backgroundColor: colors.white
            }}>
                <Content>
                    <List>
                        <ListItem onPress={() => { this.props.navigation.dispatch(resetAction('Login')); }}>
                            <Text>Login</Text>
                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.dispatch(resetAction('Home')); }}>
                            <Text>Home</Text>
                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.dispatch(resetAction('Chart')); }}>
                            <Text>Chart</Text>
                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.dispatch(resetAction('Tabs')); }}>
                            <Text>Tabs</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

export default Sidebar;
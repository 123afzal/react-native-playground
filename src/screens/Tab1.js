import React, { Component } from 'react';
import {
    View
} from 'react-native';

import { connect } from 'react-redux'; //to pass functions
import { bindActionCreators } from 'redux';
import { } from '../actions'; //for use the Rest_API
import colors from '../constants/colors';
import images from '../constants/images';
import { Container, Text, Button } from 'native-base';


class Tab1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentWillMount() {
    }
    render() {
        return (
            <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View>
                    <Text style={{ textAlign: 'center' }}>
                        go to the link below to customize the tabs
                        https://reactnavigation.org/docs/tab-based-navigation.html

                        https://reactnavigation.org/docs/tab-navigator.html
                    </Text>
                </View>
                <View>

                    <Button clear primary onPress={() => this.props.navigation.push('Detail')}>
                        <Text>
                            Go to Tab 1 Detail
                        </Text>
                    </Button>
                </View>


            </Container>
        );
    }
}

function mapStateToProps(state) {
    //pass the providers
    return {
    }
}

/* Map Actions to Props */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
        }, dispatch)
    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Tab1);

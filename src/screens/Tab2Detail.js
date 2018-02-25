import React, { Component } from 'react';
import {
    View
} from 'react-native';

import { connect } from 'react-redux'; //to pass functions
import { bindActionCreators } from 'redux';
import { } from '../actions'; //for use the Rest_API
import colors from '../constants/colors';
import images from '../constants/images';
import { Container, Text } from 'native-base';


class Tab2Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentWillMount() {
    }
    render() {
        return (
            <Container>
                <View>
                    <Text>
                        Tab 2 Detail
                    </Text>
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
)(Tab2Detail);

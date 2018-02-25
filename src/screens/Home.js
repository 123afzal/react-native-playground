import React, { Component } from 'react';
import {
    View,
    Image
} from 'react-native';

import { connect } from 'react-redux'; //to pass functions
import { bindActionCreators } from 'redux';
import { } from '../actions'; //for use the Rest_API
import colors from '../constants/colors';
import images from '../constants/images';
import { Button, Icon, Text, Container } from 'native-base';
import { HomeStyle } from './styles/home';

class Home extends Component {
    static navigationOptions = {
        title: 'Home'
    };
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentWillMount() {
    }
    render() {
        return (
            <Container style={HomeStyle.constainer}>
                <View style={HomeStyle.textContainer}>
                    <Image source={images.demo_image} style={HomeStyle.no_history_icon} />

                    <Text style={HomeStyle.welcome}>
                        Demo Image.
                            </Text>


                    <Text style={HomeStyle.instructions}>
                        This is how you can add images
                            </Text>
                </View>
            </Container >
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
)(Home);

import {
    StyleSheet,
    Dimensions
} from 'react-native';
import colors from '../../constants/colors';

const { height, width } = Dimensions.get('window');

export const HomeStyle = StyleSheet.create({
    constainer: {
        backgroundColor: colors.white,

    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    homeBtn: {
        backgroundColor: colors.white,
        position: 'absolute',
        top: 4,
        left: 0,
        borderRadius: 0,
        borderBottomRightRadius: 7,
        borderTopRightRadius: 7,
        zIndex: 999999999

    },
    btnIcon: {
        color: colors.dark,
        fontSize: 26,
        fontWeight: '100'
    },
    no_history_icon: {
        height: 100, width: 120
    },
    arrow_down: {
        height: 80, width: 25, position: 'absolute', bottom: (height - 512)
    },
    camera_slider: {
        height: 50, width: 180
    },
    camera_slider_container: {
        position: 'absolute',
        bottom: 0,
        left: (width - 270)
    },
    adds_container: {
        marginBottom: 50
    }

});



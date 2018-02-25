
import React, { Component } from 'react';
import colors from '../constants/colors';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Tab1 from '../screens/Tab1';
import Tab1Detail from '../screens/Tab1Detail';
import Tab2 from '../screens/Tab2'
import Tab2Detail from '../screens/Tab2Detail'

const Tab1Stack = StackNavigator({
    Tab1: {
        screen: Tab1,
        navigationOptions: ({ screenProps }) => {
            return {
                title: 'Tab1',
                headerLeft: (
                    <Button transparent onPress={() => { screenProps.rootNavigation.navigate('DrawerOpen') }}>
                        <Icon name='menu' />
                    </Button>
                )
            }
        }
    },
    Detail: {
        screen: Tab1Detail,
        navigationOptions: {
            title: 'Tab1Detail'

        }

    }
}, {
        initialRouteName: 'Tab1'
    }
);
const Tab2Stack = StackNavigator({
    Tab2: {
        screen: Tab2,
        navigationOptions: ({ screenProps }) => {
            return {
                title: 'Tab2',
                headerLeft: (
                    <Button transparent onPress={() => { screenProps.rootNavigation.navigate('DrawerOpen') }}>
                        <Icon name='menu' />
                    </Button>
                )
            }
        }

    },
    Detail: {
        screen: Tab2Detail,
        navigationOptions: {
            title: 'Tab2Detail'
        }

    }
}, {
        initialRouteName: 'Tab2'
    });
const Tabs = TabNavigator(
    {
        Tab1: { screen: Tab1Stack },
        Tab2: { screen: Tab2Stack },

    },
    {
        initialRouteName: 'Tab1',
        tabBarPosition: 'bottom',
    }
);
export default Tabs;
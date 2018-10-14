import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    processColor
} from 'react-native';

import {BarChart} from 'react-native-charts-wrapper';

import {connect} from 'react-redux'; //to pass functions
import {bindActionCreators} from 'redux';
import {} from '../actions';

class Chart extends Component {
    static navigationOptions = {
        title: 'Chart'
    };

    constructor(props) {
        super(props);

        this.state = {
            legend: {
                enabled: true,
                textSize: 14,
                form: 'SQUARE',
                formSize: 12,
                formToTextSpace: 6,
                wordWrapEnabled: false,
                maxSizePercent: 0.5,
                horizontalAlignment:'CENTER'
            },
            data: {
                dataSets: [{
                    values: [{y: 1.00}, {y: 1.75}, {y: 1.}, {y: 1.55}, {y: 2.00}, {y: 3.05}, {y: 7.45}, {y: 8.50}, {y: 9.00},
                        {y: 1.75}, {y: 1.45}, {y: 1.05}, {y: 2.00}, {y: 2.01}, {y: 2.05}, {y: 2.35}, {y: 2.30}, {y: 2.60},
                        {y: 2.60}, {y: 3.50}, {y: 10.00}, {y: 9.65}, {y: 7.00}, {y: 6.00}, {y: 8.00}, {y: 7.00}, {y: 6.00}],
                    label: 'Years',
                    config: {
                        color: processColor('#0984e3'),
                        // barShadowColor: processColor('lightgrey'),
                        // highlightAlpha: 90,
                        // highlightColor: processColor('red'),
                    },
                }],

                config: {
                    barWidth: 0.7,
                },
            },
            // highlights: [{x: 3}, {x: 6}],
            xAxis: {
                valueFormatter: ['1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007','2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016','2017', '2018'],
                granularityEnabled: true,
                granularity : 1,
                enabled: true,
                drawLabels: true,
                drawAxisLine: true,
                drawGridLines: false,
                position:'BOTTOM',
                axisLineWidth: 2,
                axisLineColor: processColor('grey'),
                labelRotationAngle:90,
                labelCount:10
            },

            yAxis: {
                left: {
                    enabled: true,
                    drawLabels: true,
                    drawAxisLine: true,
                    axisLineColor: processColor('grey'),
                    drawGridLines: false,
                    axisLineWidth: 2,
                    labelCount:10,
                    axisMinimum:0.00,
                    axisMaximum:10.00,
                    valueFormatter: '0.00'
                },
                right: {
                    enabled: false,
                }
            },
            descript:{
                text: ''
            }
        };
    }

    componentWillMount() {
    }

    handleSelect(event) {
        let entry = event.nativeEvent
        if (entry == null) {
            this.setState({...this.state, selectedEntry: null})
        } else {
            this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
        }

        console.log(event.nativeEvent)
    }

    render() {

        return (
            <View style={{  flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                flex:1,
                backgroundColor:'#fff'
            }}>
                <View style={{height:250, width:350}}>
                    <Text style={styles.vertcileLable}>
                        billions
                    </Text>
                    <BarChart
                        style={styles.chart}
                        data={this.state.data}
                        xAxis={this.state.xAxis}
                        yAxis={this.state.yAxis}
                        animation={{durationX: 2000}}
                        legend={this.state.legend}
                        gridBackgroundColor={processColor('#ffffff')}
                        visibleRange={{x: { min: 10, max: 10}}}
                        maxVisibleValueCount={10}
                        onChange={(event) => console.log(event.nativeEvent)}
                        labelRotationAngle={45}
                        chartDescription={this.state.descript}
                    />
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    //pass the providers
    return {}
}

/* Map Actions to Props */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({}, dispatch)
    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Chart);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    chart: {
        flex: 1
    },
    vertcileLable:{
        color: "#000",
        transform: [{ rotate: "-90deg" }],
        top:30,
        left:30,
        position:"absolute",
        fontSize:10,
    }
});

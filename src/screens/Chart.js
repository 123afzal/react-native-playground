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
                horizontalAlignment:'CENTER'
            },
            data: {
                dataSets: [{
                    values: [{y: 1.00}, {y: 1.75}, {y: 1.50}, {y: 1.55}, {y: 5.00}, {y: 3.05}, {y: 7.45}, {y: 8.50}, {y: 9.00},
                        {y: 5.50}, {y: 1.45}, {y: 9.50}, {y: 8.00}, {y: 7.31}, {y: 6.05}, {y: 4.35}, {y: 6.30}, {y: 4.60},
                        {y: 7.60}],
                    label: 'Years',
                    config: {
                        color: processColor('#0984e3'),
                        valueTextSize: 10,
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
            },
            animation:{
                durationX: 4000,
                durationY: 3000,
                // easingX: 'EaseInCirc',
                // easingY: 'EaseInCirc',
                // random: Math.random()
            },

            data1: {
                dataSets: [{
                    values: [2.35],
                    label: 'SOHAR (SEA PORT)',
                    config: {
                        drawValues: true,
                        valueTextSize: 10,
                        colors: [processColor('#0984e3')],
                    }
                }, {
                    values: [0.20],
                    label: 'MINA SALALAH (SEA PORT)',
                    config: {
                        drawValues: true,
                        valueTextSize: 10,
                        colors: [processColor('#ff7f0e')],
                    }
                }, {
                    values: [0.15],
                    label: 'AL DUQM (SEA PORT)',
                    config: {
                        drawValues: true,
                        valueTextSize: 10,
                        colors: [processColor('#2ca02c')],
                    }
                },
                    {
                        values: [0.10],
                        label: 'SUR (SEA PORT)',
                        config: {
                            drawValues: true,
                            valueTextSize: 10,
                            colors: [processColor('#d62728')],
                        }
                    }
                ],
                config: {
                    barWidth: 0.8,
                    group: {
                        fromX: 0,
                        groupSpace: 0.1,
                        barSpace: 0.1,
                    },
                }
            },

            xAxis1: {
                granularityEnabled: true,
                granularity : 1,
                axisMaximum: 5,
                axisMinimum: -2,
                enabled: true,
                drawLabels: false,
                drawAxisLine: true,
                drawGridLines: false,
                position:'BOTTOM',
                axisLineWidth: 2,
                axisLineColor: processColor('grey'),
            },

            yAxis1: {
                left: {
                    enabled: true,
                    drawLabels: true,
                    drawAxisLine: true,
                    axisLineColor: processColor('grey'),
                    drawGridLines: false,
                    axisLineWidth: 2,
                    axisMinimum:0.00,
                    valueFormatter: '0.00'
                },
                right: {
                    enabled: false,
                }
            },

            legend1: {
                enabled: true,
                wordWrapEnabled: true,
                textSize: 10,
            },
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
                    <Text style={styles.horizontalLable}>
                        Imports by Year
                    </Text>
                    <Text style={styles.verticleLable}>
                        billions
                    </Text>
                    <BarChart
                        style={styles.chart}
                        data={this.state.data}
                        xAxis={this.state.xAxis}
                        yAxis={this.state.yAxis}
                        animation={this.state.animation}
                        legend={this.state.legend}
                        gridBackgroundColor={processColor('#ffffff')}
                        visibleRange={{x: { min: 10, max: 10}}}
                        onChange={(event) => console.log(event.nativeEvent)}
                        labelRotationAngle={45}
                        chartDescription={this.state.descript}
                        drawValueAboveBar={true}
                    />
                </View>
                <View style={{width:350, height:250}}>
                    <Text style={styles.verticleLable}>
                        billions
                    </Text>
                    <BarChart
                        style={styles.chart}
                        xAxis={this.state.xAxis1}
                        yAxis={this.state.yAxis1}
                        animation={this.state.animation}
                        data={this.state.data1}
                        legend={this.state.legend1}
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
    verticleLable:{
        color: "#000",
        transform: [{ rotate: "-90deg" }],
        top:30,
        left:30,
        position:"absolute",
        fontSize:10,
    },
    horizontalLable:{
        color: "#000",
        textAlign:'center',
        fontSize:12,
    }
});

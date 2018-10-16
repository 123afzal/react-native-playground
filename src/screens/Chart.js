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
                    values: [{y: 0.59, marker:"598171722"}, {y: 0.68, marker:"681563414"}, {y: 0.79, marker:"791448859"}, {y: 0.85, marker:"853062606"},
                             {y: 0.86, marker:"862871729"}, {y: 1.05, marker:"1055286452"}, {y: 0.87, marker:"870360540"}, {y: 1.10, marker:"1104211022"},
                             {y: 1.50, marker:"1500228973"}, {y: 2.18, marker:"2189662300"}, {y: 1.65, marker:"1654405431"}, {y: 2.03, marker:"2033588537"},
                             {y: 2.22, marker:"2229980773"}, {y: 2.47, marker:" 2473797401"}, {y: 2.65, marker:"2656157014"}, {y: 3.38, marker:"3386526093"},
                             {y: 3.31, marker:"3318278557"}, {y: 2.84, marker:"2849084328"}, {y: 2.98, marker:"2986924084"}, {y:1.52, marker:"1527832733"}],
                    label: 'Years',
                    config: {
                        color: processColor('#0984e3'),
                        drawValues: false,

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
                    labelCount:8,
                    axisMinimum:0.00,
                    // axisMaximum:10.00,
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
                dataSets: [
                    {
                        values: [{y:0.85, marker:"850552458"}],
                        label: 'AL.WAJAJAH (BORDER POST)',
                        config: {
                            drawValues: false,
                            colors: [processColor('#0984e3')],
                        }
                    }, {
                        values: [{y:0.23, marker:"235222374"}],
                        label: 'WADI JIZZI (BORDER POST)',
                        config: {
                            drawValues: false,
                            colors: [processColor('#ff7f0e')],
                        }
                    },
                    {
                        values: [{y:0.13, marker:"131074724"}],
                        label: 'KHATMAT MILAHA (BORDER POST)',
                        config: {
                            drawValues: false,
                            colors: [processColor('#2ca02c')],
                        }
                    },
                    {
                    values: [{y:0.11, marker:"115459395"}],
                    label: 'DIRECTORATE GENERAL OF CUSTOMS (BORDER POST)',
                    config: {
                        drawValues: false,
                        colors: [processColor('#d62728')],
                    }
                }, {
                    values: [{y:0.07, marker:"79672320"}],
                    label: 'HAFEET (BORDER  POST)',
                    config: {
                        drawValues: false,
                        colors: [processColor('#9467bd')],
                    }
                }, {
                    values: [{y:0.05, marker:"55181157"}],
                    label: 'AL DAARA (BORDER POST)',
                    config: {
                        drawValues: false,
                        colors: [processColor('#8c564b')],
                    }
                },
                    {
                        values: [{y:0.04, marker:"41195358"}],
                        label: 'AL.MAZYOONA (BORDER POST)',
                        config: {
                            drawValues: false,
                            colors: [processColor('#e377c2')],
                        }
                    },
                    {
                        values: [{y:0.009, marker:"9097016"}],
                        label: 'AL.BURAIMI (BORDER POST)',
                        config: {
                            drawValues: false,
                            colors: [processColor('#7f7f7f')],
                        }
                    },
                    {
                        values: [{y:0.009, marker:"9067180"}],
                        label: 'AL RUSSAIL (BORDER POST)',
                        config: {
                            drawValues: false,
                            colors: [processColor('#bcbd22')],
                        }
                    },
                    {
                        values: [{y:0.001, marker:"1142231"}],
                        label: 'WADI SAA (BORDER POST)',
                        config: {
                            drawValues: false,
                            colors: [processColor('#17becf')],
                        }
                    },
                    {
                        values: [{y:0.00, marker:"133214"}],
                        label: 'DIBA PORT (BORDER POST)',
                        config: {
                            drawValues: false,
                            colors: [processColor('#1f77b4')],
                        }
                    },
                    {
                        values: [{y:0.00, marker:"133214"}],
                        label: 'SARFAIT (BORDER POST)',
                        config: {
                            drawValues: false,
                            colors: [processColor('#ff7f0e')],
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
                axisMaximum: 12,
                axisMinimum: -1,
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

            marker: {
                enabled: true,
                markerColor: processColor('#000'),
                textColor: processColor('#fff'),
                markerFontSize: 12,
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
                        marker={this.state.marker}

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
                        marker={this.state.marker}
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

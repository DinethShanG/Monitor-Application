import React, { Component } from "react";
import Chart from "chart.js";
import SensorService from "../services/SensorService";

let apiEndPoint = "";
let options = {};
let dataPoints = [];
let thresholdLine = [];
let threshold = 0;
let xAxisLabel = "";
let yAxisLabel = "";
let yUnit = "";
let x = "";
let y = "";
let location = "";
let time = "";
let chartTitle = "";
let icon = "";
let themeColor = [];

class SensorReadingChart extends Component {
        constructor(props) {
        super(props);
        this._isMounted = false;
        this.chartRef = React.createRef();
        threshold = props.threshold;
        xAxisLabel = props.xAxisLabel;
        yAxisLabel = props.yAxisLabel;
        chartTitle = props.chartTitle;
        x = props.x;
        y = props.y;
        location = props.location;
        time = props.time
        icon = props.icon;
        apiEndPoint = props.apiEndPoint;
        yUnit = props.yUnit;
        themeColor = props.themeColor;

        this.state = {
            sensorReadings: [],
        };
    }

    render() {
        dataPoints = this.state.sensorReadings.map((sensor) => {
            return {
                x: sensor[x], //change this to proper key
                y: sensor[y], //change this to proper key
                location: sensor[location], //change this to proper key
                time: sensor[time],
            };
        });
        thresholdLine = this.state.sensorReadings.map((sensor) => {
            return {
                x: sensor.id, //change this to proper key
                y: threshold,
            };
        });
        options = {
            type: "line",
            data: {
                xLabels: dataPoints.map((x) => {
                    return x.x;
                }),
                datasets: [
                    {
                        data: dataPoints.map((y) => {
                            return y.y;
                        }), //Sample data set [{x:1, y:21},{x:2, y:25},{x:3, y:31},{x:4, y:11},]
                        showLine: true,
                        fill: false,
                        borderColor: themeColor[1],
                        label: yAxisLabel + " Graph",
                        pointBackgroundColor: function (context) {
                            let index = context.dataIndex;
                            let value = context.dataset.data[index];
                            return value > threshold ? themeColor[0] : "transparent";
                        },
                        pointBorderColor: function (context) {
                            let index = context.dataIndex;
                            let value = context.dataset.data[index];
                            return value > threshold ? themeColor[0] : "transparent";
                        },
                    },
                    {
                        data: thresholdLine.map((y) => {
                            return y.y;
                        }),
                        showLine: true,
                        borderColor: themeColor[0],
                        fill: false,
                        pointBorderColor: "transparent",
                        label: "threshold = " + threshold + " " + yUnit,
                    },
                ],
            },
            options: {
                animation: {
                    duration: 0,
                },
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem, data) {
                            let label =
                                yAxisLabel +
                                " : " +
                                tooltipItem.yLabel +
                                yUnit+"  |  " +
                                xAxisLabel +
                                " : " +
                                tooltipItem.xLabel;

                            if (tooltipItem.yLabel > threshold) {
                                label +=" Time : "+dataPoints[tooltipItem.index].time +
                                    "  |  Location : " +
                                    dataPoints[tooltipItem.index].location; //change this to proper key
                            }
                            return label;
                        },
                    },
                },
                scales: {
                    yAxes: [
                        {
                            scaleLabel: {
                                display: true,
                                labelString: yAxisLabel + " in " + yUnit,
                            },
                        },
                    ],
                    xAxes: [
                        {
                            scaleLabel: {
                                display: true,
                                labelString: xAxisLabel,
                            },
                        },
                    ],
                },
            },
        };

        if (this.state.sensorReadings.length === 0) {
            return (
                <h5 className="card-subtitle mb-2 text-muted " align={"center"}>
                    <i className="bi bi-lightning" />
          No Readings Yet!
                </h5>
            );
        } else {
            return (
                <div>
                    <div>
                        <big>
                            <i className={icon} style={{ color: themeColor[0] }} />
                            {chartTitle}
                        </big>
                    </div>
                    <br />
                    <canvas id="myChart" ref={this.chartRef} />
                </div>
            );
        }
    }
    componentDidMount() {
        setInterval(function() {
            SensorService.getSensorReadings(apiEndPoint).then((response)=>{
                const sensorReadings = response.data
                this.setState({sensorReadings})
                if(this.chartRef.current) {
                    const myChartRef = this.chartRef.current.getContext("2d");
                    new Chart(myChartRef, options);
                }
            });
        }.bind(this), 1000);
    }
}

export default SensorReadingChart;

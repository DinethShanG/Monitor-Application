import React, { Component } from 'react'
import SensorService from "../services/SensorService";


let apiEndPoint = "";
let threshold = 0;
let xAxisLabel = "";
let yAxisLabel = "";
let yUnit = "";
let x = "";
let y = "";
let location = "";
let icon = "";
let themeColor = [];
let index=0;


class LatestAlertInfo extends Component{

    constructor(props) {
        super(props);
        threshold = props.threshold
        xAxisLabel = props.xAxisLabel
        yAxisLabel = props.yAxisLabel
        x = props.x
        y = props.y
        location = props.location
        icon = props.icon
        apiEndPoint = props.apiEndPoint
        yUnit = props.yUnit
        themeColor = props.themeColor
        this.state = {
            sensorReadings: []
        }
    }

    render() {
        if(this.state.sensorReadings.length === 0)
        {
            return (<h5 className="card-subtitle mb-2 text-muted"><i className="bi bi-shield-shaded"></i>No alerts Yet!</h5>)
        }
        else{
        return(
            this.state.sensorReadings.map(data =>
            <small><div className="card d-inline-block m-2" style={{width: "auto", backgroundColor: themeColor[1], borderColor: themeColor[2]}}>
                <div className="card-body" align={"left"}>
                    <big className="card-title"><i className={icon} style={{color: themeColor[0]}}></i>{yAxisLabel} alert</big>
                    <p className="card-subtitle mb-2" style={{color: themeColor[0]}}>Threshold is {threshold +" "+yUnit}</p>

                        <ul>
                        <li className="card-text">{yAxisLabel} : {data[y]}</li>
                        <li className="card-text">{xAxisLabel} : {data[x]}</li>
                        <li className="card-text">Location : {data[location]}</li>
                        </ul>
                </div>
            </div>
            </small>)
        )}
    }

    componentDidMount() {
        setInterval(function() {
            SensorService.getSensorReadings(apiEndPoint).then((response)=>{
                const sensorReadings = response.data
                this.setState({sensorReadings})
            });
        }.bind(this), 1000);


    }
}
export default LatestAlertInfo;
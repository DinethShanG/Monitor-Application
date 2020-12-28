import React, { Component } from 'react'
import SensorService from "../services/SensorService";


let apiEndPoint = "";
let threshold = 0;
let otherProperties = "";
let sensorId = "";
let date = "";
let reading = "";
let location = "";

class LatestAlertInfo extends Component{

    constructor(props) {
        super(props);
        threshold = props.threshold
        date = props.date
        reading = props.reading
        location = props.location
        apiEndPoint = props.apiEndPoint
        otherProperties = props.otherProperties
        sensorId = props.sensorId
        this.state = {
            sensorReadings: []
        }
    }

    render() {
        if(this.state.sensorReadings.length === 0)
        {
            return (<h5 className="card-subtitle mb-2 text-muted"><i className="bi bi-shield-shaded"/>No alerts Yet!</h5>)
        }
        else{
        return(
            this.state.sensorReadings.map(data =>
            <small><div className="card d-inline-block m-2" style={{width: "auto", backgroundColor: otherProperties[data[sensorId]-1].color[1], borderColor: otherProperties[data[sensorId]-1].color[2]}}>
                <div className="card-body" align={"left"}>
                    <big className="card-title"><i className={otherProperties[data[sensorId] - 1].icon} style={{color: otherProperties[data[sensorId] - 1].color[0]}}/>{otherProperties[data[sensorId]-1].sensor} alert</big>
                    <p className="card-subtitle mb-2" style={{color: otherProperties[data[sensorId]-1].color[0]}}>Threshold is {data[threshold] +" "+otherProperties[data[sensorId]-1].unit}</p>

                        <ul>
                        <li className="card-text">{otherProperties[data[sensorId]-1].sensor} : {data[reading]}</li>
                        <li className="card-text">Date : {data[date]}</li>
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
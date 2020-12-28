import React, { Component } from 'react'
import SensorService from "../services/SensorService";


let apiEndPoint = "";
let threshold = 0;
let sensorName = "";
let unit = "";
let date = "";
let reading = "";
let location = "";
let time= "";
let tableTitle = "";
let icon = "";
let themeColor = [];

class AlertHistoryTable extends Component{

    constructor(props) {
        super(props);
        threshold = props.threshold
        sensorName = props.sensorName
        tableTitle = props.tableTitle
        date = props.date
        reading = props.reading
        location = props.location
        time = props.time
        icon = props.icon
        apiEndPoint = props.apiEndPoint
        unit = props.unit
        themeColor = props.themeColor
        this.state = {
            sensorReadings: []
        }
    }

    render() {
        if(this.state.sensorReadings.length === 0)
        {
            return (<h5 className="card-subtitle mb-2 text-muted" align={"center"}><i
    className="bi bi-shield-shaded"/>Alert History empty!</h5>)
        }
        else{
        return(
            <div>
                <div><big><i className={icon} style={{color: themeColor[0]}}/>{tableTitle}</big></div>
                <div style={{color: themeColor[0]}}>Threshold is {threshold +" "+unit}</div>
                <br/>
                <table className="table table-hover table-borderless table-sm" >
                    <thead>
                    <tr style={{backgroundColor: themeColor[1]}}>
                        <th scope="col"><small>#</small></th>
                        <th scope="col"><small>Date</small></th>
                        <th scope="col"><small>Time</small></th>
                        <th scope="col"><small>{sensorName+" in "+unit}</small></th>
                        <th scope="col"><small>Location</small></th>
                    </tr>
                    </thead>
                    <tbody className={"text-dark"}>
                    {
                        this.state.sensorReadings.map(data=>
                            <tr>
                                <th scope="row"><small>{this.state.sensorReadings.indexOf(data)}</small></th>
                                <td><small>{data[date]}</small></td>
                                <td><small>{data[time]}</small></td>
                                <td><small>{data[reading]}</small></td>
                                <td><small>{data[location]}</small></td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
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
export default AlertHistoryTable;
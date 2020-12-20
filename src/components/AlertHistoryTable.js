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
let tableTitle = "";
let icon = "";
let themeColor = [];
let index=0;


class AlertHistoryTable extends Component{

    constructor(props) {
        super(props);
        threshold = props.threshold
        xAxisLabel = props.xAxisLabel
        yAxisLabel = props.yAxisLabel
        tableTitle = props.tableTitle
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
            return (<h5 className="card-subtitle mb-2 text-muted" align={"center"}><i
                className="bi bi-shield-shaded"></i>Alert History empty!</h5>)
        }
        else{
        return(
            <div>
                <div><big><i className={icon} style={{color: themeColor[0]}}></i>{tableTitle}</big></div>
                <div style={{color: themeColor[0]}}>Threshold is {threshold +" "+yUnit}</div>
                <br/>
                <table className="table table-hover table-borderless table-sm" >
                    <thead>
                    <tr style={{backgroundColor: themeColor[1]}}>
                        <th scope="col"><small>#</small></th>
                        <th scope="col"><small>{xAxisLabel}</small></th>
                        <th scope="col"><small>{yAxisLabel+" in "+yUnit}</small></th>
                        <th scope="col"><small>Location</small></th>
                    </tr>
                    </thead>
                    <tbody className={"text-dark"}>
                    {
                        this.state.sensorReadings.map(data=>
                            <tr>
                                <th scope="row"><small>{this.state.sensorReadings.indexOf(data)}</small></th>
                                <td><small>{data[x]}</small></td>
                                <td><small>{data[y]}</small></td>
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
        SensorService.getSensorReadings(apiEndPoint).then((response)=>{
            const sensorReadings = response.data
            this.setState({sensorReadings})
        });


    }
}
export default AlertHistoryTable;
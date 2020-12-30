import React, { Component } from 'react'
import logo from '../logo.svg';
import josiah from '../member_images/1.jpg'
import deneth from '../member_images/2.jpeg'
import chinth from '../member_images/3.jpeg'
import randi from '../member_images/4.jpeg'
import thili from '../member_images/5.jpeg'
import mang from '../member_images/6.jpeg'
import '../App.css';
import SensorReadingChart from "./SensorReadingChart";
import LatestAlertInfo from "./LatestAlertInfo";
import AlertHistoryTable from "./AlertHistoryTable";
import {Link} from 'react-scroll'
import Aboutus from "./Aboutus";
import AuthService from "../services/auth.service";
import { Redirect } from "react-router-dom";


export default class DashBoard extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          show_temp_graph: true,
          show_pres_graph: false,
          show_hum_graph: false,
          show_temp_table: true,
          show_pres_table: false,
          show_hum_table: false,
          redirect: null,
          userReady: false,
          currentUser: { username: "" }
        };
      }
    
    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();
    
        if (!currentUser) this.setState({ redirect: "/" });
        this.setState({ currentUser: currentUser, userReady: true })
    }

    ChangeGraph = (event) => {
        console.error(event.target.value)
        if (event.target.value === "1"){
            this.setState({show_temp_graph: true, show_pres_graph: false, show_hum_graph: false})
        }
        if (event.target.value === "2"){
            this.setState({show_temp_graph: false, show_pres_graph: true, show_hum_graph: false})
        }
        if (event.target.value === "3"){
            this.setState({show_temp_graph: false, show_pres_graph: false, show_hum_graph: true})
        }
    }
    ChangeTable = (event) => {
        console.error(event.target.value)
        if (event.target.value === "1") {
            this.setState({show_temp_table: true, show_pres_table: false, show_hum_table: false})
        }
        if (event.target.value === "2") {
            this.setState({show_temp_table: false, show_pres_table: true, show_hum_table: false})
        }
        if (event.target.value === "3") {
            this.setState({show_temp_table: false, show_pres_table: false, show_hum_table: true})
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
      
        else{
        return (
            <div className={'container-fluid bg-dark '}>
                <div
                    className={'row align-items-center justify-content-left bg-light text-dark p-3 sticky-top shadow-sm'}>
                    <img className={'img-fluid p-1'} src={logo} width={"50px"} alt="LogoImage"/>
                    <span className={'h2'}> <b>Monitor</b> </span>
                    <span className={'h3'}> <i>application.</i></span>
                </div>
                <div className={'row'}>
                    <div className={'col-md-2 bg-dark p-3 text-white justify-content-center '} align={"center"}>
                        <h6 className={'text-left '}><b>Monitor application</b></h6>

                        <p className={'text-left'}><small>“Monitor” is a cloud-based sensor monitoring and alert
                            management platform which can be used to centrally monitor any device regardless of its
                            location. The main functionality of the system is to alert on certain events based on the
                            readings coming from the sensors.</small></p>
                        <Link to={"latestAlert"}
                              className={'btn btn-outline-light d-md-block d-inline-block btn-sm m-2'}>Today
                            alerts</Link>
                        <Link to={"graphs"}
                              className={'btn btn-outline-light d-md-block d-inline-block btn-sm m-2'}>Graphs</Link>
                        <Link to={"history"} className={'btn btn-outline-light d-md-block d-inline-block btn-sm m-2'}>Alert
                            history</Link>
                        <Link to={"about"} className={'btn btn-outline-light d-md-block d-inline-block btn-sm m-2'}>About
                            us</Link>

                    </div>

                    <div className={'col-md-10 p-3 bg-white'}>

                        <div id="latestAlert" className={"card"}>
                            <div className={"card-header"}>
                                Today Alerts
                            </div>
                            <div className={"p-3 m-2"} align={"center"}>
                                <LatestAlertInfo apiEndPoint='http://localhost:8095/sensor/getAlert'//Change dataset endpoint url
                                                 date="date"                                        //Change date variable key name
                                                 reading="dataValue"                                //Change sensor reading variable key name
                                                 location="location"                                //Change location key name
                                                 threshold="threshold"                              //Change threshold key name
                                                 sensorId="sensorId"                                //Change sensorId key name
                                                 otherProperties={[
                                                     {"id":"1", "sensor": "Temperature", "unit": "°C", "color" : ["rgb(255,0,0)", "rgba(255,165,0,0.2)", "rgba(255,0,0,0.02)"], "icon":"bi bi-thermometer-half"},
                                                     {"id":"2", "sensor": "Pressure", "unit": "atm", "color" : ["rgb(7,94,84)", "rgba(37, 211, 102,0.2)", "rgba(7,94,84,0.02)"], "icon":"bi bi-arrows-collapse"},
                                                     {"id":"3", "sensor": "Humidity", "unit": "(kg/kg)", "color" : ["rgb(75, 37, 109)", "rgba(104,143,173,0.2)", "rgba(75, 37, 109,0.02)"], "icon":"bi bi-droplet-half"}]}
                                />
                            </div>
                        </div>
                        <br/>

                        <div id="graphs" className={"card"}>
                            <div className={"card-header"}>
                                Sensor Reading Graphs
                                <select className="form-control form-control-sm d-inline float-right" style={{width:"auto", fontSize:"12px"}} onChange={this.ChangeGraph}>
                                    <option selected value="1">Temperature</option>
                                    <option value="2">Pressure</option>
                                    <option value="3">Humidity</option>
                                </select>
                            </div>
                            <div className={"p-3 m-2"}>
                                { this.state.show_temp_graph ?
                                <SensorReadingChart
                                    icon="bi bi-thermometer-half"               //Change chart bootstrap icon
                                    chartTitle="Temperature Readings"           //Change chart title
                                    x="date"                                    //Change chart x variable key name
                                    y="dataValue"                               //Change chart y variable key name
                                    location="location"                         //Change chart location key name
                                    time="time"                                 //Change chart location key name
                                    threshold={30}                              //Change alert threshold key name
                                    yAxisLabel="Temperature"                    //Change chart y axis label
                                    yUnit="°C"                                  //Change y variable unit
                                    xAxisLabel="Date"                           //Change chart x axis label
                                    apiEndPoint='http://localhost:8095/sensor/getById?sensorId=1'//Change dataset endpoint url
                                    themeColor={["rgb(255,0,0)", "rgb(255,165,0)"]}              //Change chart theme color x2
                                /> : null}

                                { this.state.show_pres_graph ?
                                    <SensorReadingChart
                                        icon="bi bi-arrows-collapse"                //Change chart bootstrap icon
                                        chartTitle="Pressure measurement"           //Change chart title
                                        x="date"                                    //Change chart x variable key name
                                        y="dataValue"                               //Change chart y variable key name
                                        location="location"                         //Change chart location key name
                                        time="time"                                 //Change chart location key name
                                        yAxisLabel="Pressure"                       //Change chart y axis label
                                        yUnit="atm"                                 //Change y variable unit
                                        xAxisLabel="Date"                           //Change chart x axis label
                                        threshold={85}                              //Change alert threshold
                                        apiEndPoint='http://localhost:8095/sensor/getById?sensorId=2'//Change dataset endpoint url
                                        themeColor={["rgb(7,94,84)", "rgb(37, 211, 102)"]}           //Change chart theme color x2
                                    /> : null}

                                { this.state.show_hum_graph ?
                                    <SensorReadingChart
                                        icon="bi bi-droplet-half"                   //Change chart bootstrap icon
                                        chartTitle="Humidity Readings"              //Change chart title
                                        x="date"                                    //Change chart x variable key name
                                        y="dataValue"                               //Change chart y variable key name
                                        location="location"                         //Change chart location key name
                                        time="time"                                 //Change chart location key name
                                        yAxisLabel="Humidity"                       //Change chart y axis label
                                        yUnit="(kg/kg)"                             //Change y variable unit
                                        xAxisLabel="Date"                           //Change chart x axis label
                                        threshold={1}                               //Change alert threshold
                                        apiEndPoint='http://localhost:8095/sensor/getById?sensorId=3'//Change dataset endpoint url
                                        themeColor={["rgb(75, 37, 109)", "rgb(104,143,173)"]}        //Change chart theme color x2
                                    /> : null}
                            </div>
                        </div>
                        <br/>

                        <div id="history" className={"card"}>
                            <div className={"card-header"}>
                                Sensor Alert History
                                <select className="form-control form-control-sm d-inline float-right" style={{width:"auto", fontSize:"12px"}} onChange={this.ChangeTable}>
                                    <option selected value="1">Temperature</option>
                                    <option value="2">Pressure</option>
                                    <option value="3">Humidity</option>
                                </select>
                            </div>
                            <div className={"p-3 m-2"}>
                                { this.state.show_temp_table ?
                                <AlertHistoryTable apiEndPoint='http://localhost:8095/sensor/getAlertSensorId?sensorId=1'//Change dataset endpoint url
                                                   icon="bi bi-thermometer-half"               //Change table bootstrap icon
                                                   tableTitle="Temperature Alert History"      //Change table title
                                                   date="date"                                 //Change date variable key name
                                                   reading="dataValue"                         //Change reading variable key name
                                                   location="location"                         //Change location key name
                                                   time="time"                                 //Change time key name
                                                   sensorName="Temperature"                    //Change sensor name
                                                   unit="°C"                                   //Change reading unit
                                                   threshold={30}                              //Change alert threshold

                                                   themeColor={["red"/*text color*/, "rgba(255,165,0,0.3)"/*table head bg color*/, "rgba(255,0,0,0.02)"/*table body bg color*/]}
                                /> : null}
                                { this.state.show_pres_table ?
                                <AlertHistoryTable apiEndPoint='http://localhost:8095/sensor/getAlertSensorId?sensorId=2'//Change dataset endpoint url
                                                   icon="bi bi-arrows-collapse"                //Change table bootstrap icon
                                                   tableTitle="Pressure Alert History"         //Change table title
                                                   date="date"                                 //Change date variable key name
                                                   reading="dataValue"                         //Change reading variable key name
                                                   location="location"                         //Change location key name
                                                   time="time"                                 //Change time key name
                                                   sensorName="Pressure"                       //Change sensor name
                                                   unit="atm"                                  //Change reading unit
                                                   threshold={85}                              //Change alert threshold

                                                   themeColor={["rgb(7,94,84)"/*text color*/, "rgba(37, 211, 102,0.3)"/*table head bg color*/, "rgba(255,0,0,0.02)"/*table body bg color*/]}
                                /> : null}
                                { this.state.show_hum_table ?
                                <AlertHistoryTable apiEndPoint='http://localhost:8095/sensor/getAlertSensorId?sensorId=3'//Change dataset endpoint url
                                                   icon="bi bi-droplet-half"                   //Change table bootstrap icon
                                                   tableTitle="Humidity Alert History"         //Change table title
                                                   date="date"                                 //Change date variable key name
                                                   reading="dataValue"                         //Change reading variable key name
                                                   location="location"                         //Change location key name
                                                   time="time"                                 //Change time key name
                                                   sensorName="Humidity"                       //Change sensor name
                                                   unit="(kg/kg)"                              //Change reading unit
                                                   threshold={1}                               //Change alert threshold

                                                   themeColor={["rgb(75, 37, 109)"/*text color*/, "rgba(104,143,173,0.3)"/*table head bg color*/, "rgba(255,0,0,0.02)"/*table body bg color*/]}
                                /> : null}
                            </div>
                        </div>
                        <br/>
                    </div>

                </div>

                <div className={'row bg-light text-dark p-4 '} id="about">
                    <div className="container-fluid">
                        <div className={'row text-muted'}><i className="bi bi-person-lines-fill"/>&nbsp; About us</div>
                        <div className={'row text-muted'}><small>We are Team D</small></div>
                        <div align={"center"}>
                            <Aboutus name={"Dineth Shan Gimhana"} id={"SE/2017/013"} profile={deneth}/>
                            <Aboutus name={"Chinthaka Chathuranga"} id={"SE/2017/003"} profile={chinth}/>
                            <Aboutus name={"Randi Ayeshani"} id={"SE/2017/025"} profile={randi}/>
                            <Aboutus name={"Thilina Madushan"} id={"SE/2017/033"} profile={thili}/>
                            <Aboutus name={"Gnanasegaram Mangalan"} id={"SE/2017/028"} profile={mang}/>
                            <Aboutus name={"Josiah Prathaban"} id={"SE/2017/022"} profile={josiah}/>
                        </div>
                    </div>
                </div>
            </div>

        );
        }
    }
}


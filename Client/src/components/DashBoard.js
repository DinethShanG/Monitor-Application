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

class DashBoard extends Component {

    ChangeGraph = (event) => {
        console.error(event.target.value)
        if (event.target.value == 1){
            document.getElementById("temp-g").style.display = "block"
            document.getElementById("not-available-g").style.display = "none"
        }else{
            document.getElementById("temp-g").style.display = "none"
            document.getElementById("not-available-g").style.display = "block"
        }
    }
    ChangeTable = (event) => {
        console.error(event.target.value)
        if (event.target.value == 1){
            document.getElementById("temp-t").style.display = "block"
            document.getElementById("not-available-t").style.display = "none"
        }else{
            document.getElementById("temp-t").style.display = "none"
            document.getElementById("not-available-t").style.display = "block"
        }
    }
    render() {
        return (
            <div className={'container-fluid bg-dark '}>
                <div
                    className={'row align-items-center justify-content-left bg-light text-dark p-3 sticky-top shadow-sm'}>
                    <img className={'img-fluid p-1'} src={logo} width={"50px"}/>
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
                                <LatestAlertInfo icon="bi bi-thermometer-half"               //Change chart bootstrap icon
                                                 x="id"                                      //Change chart x variable key name
                                                 y="age"                                     //Change chart y variable key name
                                                 location="name"                             //Change chart location key name
                                                 yAxisLabel="Temperature"                    //Change chart y axis label
                                                 yUnit="F"                                   //Change y variable unit
                                                 xAxisLabel="Date and Time"                  //Change chart x axis label
                                                 threshold={30}                              //Change alert threshold
                                                 apiEndPoint='http://localhost:8080/students'//Change dataset endpoint url
                                                 themeColor={["red"/*text color*/, "rgba(255,165,0,0.2)"/*table head bg color*/, "rgba(255,0,0,0.02)"/*table body bg color*/]}
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
                            <div className={"p-3 m-2"} id={"temp-g"}>
                                <SensorReadingChart
                                    icon="bi bi-thermometer-half"               //Change chart bootstrap icon
                                    chartTitle="Temperature Readings"           //Change chart title
                                    x="id"                                      //Change chart x variable key name
                                    y="age"                                     //Change chart y variable key name
                                    location="name"                             //Change chart location key name
                                    yAxisLabel="Temperature"                    //Change chart y axis label
                                    yUnit="F"                                   //Change y variable unit
                                    xAxisLabel="Date and Time"                  //Change chart x axis label
                                    threshold={30}                              //Change alert threshold
                                    apiEndPoint='http://localhost:8080/students'//Change dataset endpoint url
                                    themeColor={["red", "orange"]}              //Change chart theme color x2
                                />
                            </div>
                            <div className={"p-3 m-2"} id={"not-available-g"} style={{display:"none"}}>
                                <h5 className="card-subtitle mb-2 text-muted"><i className="bi bi-lightning"></i>This Chart is currently unavailable!</h5>
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
                            <div className={"p-3 m-2"} id={"temp-t"}>
                                <AlertHistoryTable icon="bi bi-thermometer-half"               //Change chart bootstrap icon
                                                   tableTitle="Temperature Alert History"   //Change chart title
                                                   x="id"                                        //Change chart x variable key name
                                                   y="age"                                       //Change chart y variable key name
                                                   location="name"                               //Change chart location key name
                                                   yAxisLabel="Temperature"                    //Change chart y axis label
                                                   yUnit="F"                                   //Change y variable unit
                                                   xAxisLabel="Date and Time"                  //Change chart x axis label
                                                   threshold={30}                                //Change alert threshold
                                                   apiEndPoint='http://localhost:8080/students'//Change dataset endpoint url
                                                   themeColor={["red"/*text color*/, "rgba(255,165,0,0.3)"/*table head bg color*/, "rgba(255,0,0,0.02)"/*table body bg color*/]}
                                />
                            </div>
                            <div className={"p-3 m-2"} id={"not-available-t"} style={{display:"none"}}>
                                <h5 className="card-subtitle mb-2 text-muted"><i className="bi bi-lightning"></i>This Table is currently unavailable!</h5>
                            </div>
                        </div>
                        <br/>
                    </div>

                </div>

                <div className={'row bg-light text-dark p-4 '} id="about">
                    <div className="container-fluid">
                        <div className={'row text-muted'}><i className="bi bi-person-lines-fill"></i>&nbsp; About us</div>
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

export default DashBoard;

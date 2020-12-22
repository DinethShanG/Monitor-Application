import React, { Component } from 'react'

let name=""
let id=""
let profile= {}
let description =""


class Aboutus extends Component{

    constructor(props) {
        super(props);
        name = this.props.name
        id = this.props.id
        profile = this.props.profile
        description = this.props.description
    }
    render() {
        return(
            <div className="card d-inline-block m-2 p-3 bg-light border-light" align={"center"}>
                <img src={profile} className="rounded-circle h5" width={"150px"}/><br/>
                <span>{name}</span><br/>
                <span className="mb-2 text-muted">{id}</span>
                <p className="card-text">{description}</p>
            </div>
        )

    }
}
export default Aboutus;
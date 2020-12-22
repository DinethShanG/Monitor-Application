import React from 'react'


const Aboutus = ({name, id, profile, description}) => (
    <div className="card d-inline-block m-2 p-3 bg-light border-light" align={"center"}>
        <img src={profile} className="rounded-circle h5" width={"150px"} alt="LogoImage"/><br/>
        <span>{name}</span><br/>
        <span className="mb-2 text-muted">{id}</span>
        <p className="card-text">{description}</p>
    </div>
  )
  
export default Aboutus;
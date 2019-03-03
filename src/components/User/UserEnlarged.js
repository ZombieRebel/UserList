import React from 'react';

function jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const UserEnlarged = (props) => {
    return (
      <div>
        <div className="row"> 
          <h1>{jsUcfirst(props.userProps.name.first)}</h1>
        </div>
        <div className="row"> 
          <div className="col-sm">  
            <br></br>
            <p><b>Username:</b> {props.userProps.login.username}  </p>
            <p><b>Registered:</b> {props.userProps.registered.date}</p>
            <p><b>Email:</b> {props.userProps.email}</p>
          </div>
        
          <div className="col-sm">
            <br></br>
            <p><b>Address: </b>{jsUcfirst(props.userProps.location.street)}  </p>
            <p><b>City: </b>{jsUcfirst(props.userProps.location.city)}  </p>
            <p><b>Zip code:</b>{props.userProps.location.postcode}  </p>
          </div>
      
          <div className="col-sm">
            <br></br>
            <p><b>Birthday: </b>{props.userProps.dob.date}</p>
            <p><b>Phone </b>{props.userProps.phone}</p>
            <p><b>Cell: </b>{props.userProps.cell}</p>
          </div>
          <div className="col-sm">
            <img 
              className="avatar rounded-circle border border-white" 
              src={props.userProps.picture.large} 
              alt="placeholdr"/>
          </div>
        </div>
      </div>
      
    )
   
}

export default UserEnlarged;
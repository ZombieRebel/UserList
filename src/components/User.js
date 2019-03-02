import React from 'react';
import UserEnlarged from './UserEnlarged';

function jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const User = (props) => {
    
    return (
        <div>
        <div className="cardBlock container" >
        <div className="row">
            <div className="col-sm">
                <img 
                    className="avatar rounded-circle" 
                    src={props.picture.medium} 
                    alt="placeholdr"/>
            </div>

          <div className="col-sm">  
            <div className="last">
              <h3>{jsUcfirst(props.name.last)}  </h3>
            </div>
          </div>
          
          <div className="col-sm">
              <div className="first">
                <h3>{jsUcfirst(props.name.first)}  </h3>
              </div>
          </div>

          <div className="col-sm">
            <div>
              <h3>{props.phone}</h3>
            </div>
          </div>
        
          <div className="col-sm">
            <div>
              <h3>{jsUcfirst(props.location.state)}</h3>
            </div>
          </div>
        
          <div className="col-sm"><button className="btn btn-success plus" 
          onClick={props.toggleView}>+</button></div>
        
        </div>

        <div>
            
    { props.isOpen === false ? <div> </div> : 
        props.currentIndex === props.index ? <UserEnlarged userProps={props.userProps} /> : <div> </div>
        }
          
        </div>
        </div>
    </div>
  );
}


export default User;



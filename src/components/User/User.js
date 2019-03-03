import React from 'react';
import UserEnlarged from './UserEnlarged';
import './User.css';

function jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const User = (props) => {
      
    return (
        <div>
        <div className="cardBlock container-fluid" >
        <div className="row">
            <div className="col-sm justify-content-center">
                <img 
                    className="avatar rounded-circle border border-white" 
                    src={props.picture.medium} 
                    alt="placeholdr"/>
            </div>

          <div className="col-sm">  
            <div className="last rowstyle">
              <h5>{jsUcfirst(props.name.last)}  </h5>
            </div>
          </div>
          
          <div className="col-sm">
              <div className="first rowstyle">
                <h5>{jsUcfirst(props.name.first)}  </h5>
              </div>
          </div>

          <div className="col-sm rowstyle">
            <div>
              <h5>{props.phone}</h5>
            </div>
          </div>
        
          <div className="col-sm location">
            <div>
              <h5>{jsUcfirst(props.location.state)}</h5>
            </div>
          </div>
        
        {props.isOpenAll[props.index] === false ? <div className="col-sm location"><button className="btn btn-primary btn-lg" 
          onClick={() => props.toggleView(props.index)}>+</button></div> : <div className="col-sm location"><button className="btn btn-primary btn-lg" 
          onClick={() => props.toggleView(props.index)}>-</button></div> }
          
        
        </div>

        <div>
            
    { props.isOpenAll[props.index] === false ? null : 
        props.currentIndex === props.index ? <UserEnlarged userProps={props.userProps} /> : <div> </div>
        }
          
        </div>
        </div>
    </div>
  );
}


export default User;



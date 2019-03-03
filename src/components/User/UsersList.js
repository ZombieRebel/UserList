import React from 'react';
import User from './User';

let backGroundColor;
let textColor;

const UsersList = (props) => {
    return props.users.map((user,i) => {
            if (i % 2 === 0 ) {
                backGroundColor = "bg-dark";
                textColor = "text-light";
            } else {backGroundColor = "bg-secondary"; textColor = "text-body"}
            
            return (
                <div key={user.login.uuid}  className={backGroundColor + " " + textColor}>
                    <User
                        
                        {...user} 
                        toggleView={() => props.viewToggled(i)} 
                        userProps={user}
                        index={i} 
                        currentIndex={props.currentIndex}
                        isOpenAll={props.isOpenAll}
                        plusButtonClicked={props.plusButtonClicked}
                    />
                </div>

            
            )

        }
    ) 
}


export default UsersList;
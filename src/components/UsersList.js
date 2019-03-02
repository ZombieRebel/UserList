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
                <div className={backGroundColor + " " + textColor}>
                    <User
                        key={user.login.uuid} 
                        {...user} 
                        toggleView={() => props.viewToggled(i)} 
                        userProps={user}
                        index={i} 
                        currentIndex={props.currentIndex}
                        isOpen={props}
                        selectedUuid={props.selectedUuid}
                    />
                </div>

            
            )

        }
    ) 
}


export default UsersList;
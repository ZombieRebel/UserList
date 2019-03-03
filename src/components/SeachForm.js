import React from "react";

const divStyle = {width: 300};
const marginBot = {marginBottom: 20}

const SearchForm = (props) => {
    return (
    <div style={marginBot}>
       <h5>Search User by Firstname</h5>
        <input style={divStyle} type="text" 
            onChange={props.onChange}
            value={props.search}></input>
           <br></br>
    </div>
    )
}

export default SearchForm;
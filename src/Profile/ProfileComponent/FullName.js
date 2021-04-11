import React from 'react';
import PropTypes from 'prop-types';


const Name=props=>{
    const handleAlert = (name) => alert(`Hi! I am a ${name}`);
    
    
    return (
    <div> 
       
        <p >{props.name}</p>
        {/* {  props.handleAlert(props.name)} */}
        {handleAlert(props.name)}

    </div>
    
    )}
    Name.defaultProps ={
        name:'default value'
    }
    Name.propTypes ={
        name:PropTypes.string.isRequired
    }

export default Name
import React from 'react'
const Bio=props=>{
    return (<><p >{props.name}</p>
    {props.children}
    </>)
}
export default Bio
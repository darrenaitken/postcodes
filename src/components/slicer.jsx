// Node Modules
import React from "react";


const Slicer = (props) => {

    const {keyname, keyvalue} = props;

    return (
        <>
        <div className="slicer">
            <div className="slicer-keyname">{keyname}</div>
            <div className="slicer-keyvalue">{keyvalue}</div>
        </div>
        </>
    )
}


export default Slicer
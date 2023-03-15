import React, {MouseEventHandler, useState} from 'react'


type OnOffType = {
    /*value: boolean*/
}

export const OnOff = (props: OnOffType) => {

    let [on, setOn] = useState(false)


    const onStyle = {
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }


    return (
        <div>
            <button style={onStyle} onClick={ () => setOn(true) }>On</button>
            <button style={offStyle} onClick={ () => setOn(false) }>Off</button>
            <div style={indicatorStyle}></div>
        </div>
    )
}




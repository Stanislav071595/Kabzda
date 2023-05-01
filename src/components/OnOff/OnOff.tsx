import React, {MouseEventHandler, useState} from 'react'


type OnOffType = {
    on: boolean
    onChange: (on: boolean)=>void
}

export const OnOff = (props: OnOffType) => {



    const onStyle = {
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        backgroundColor: props.on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"
    }


    return (
        <div>
            <button style={onStyle} onClick={ () => props.onChange(true) }>On</button>
            <button style={offStyle} onClick={ () => props.onChange(false) }>Off</button>
            <div style={indicatorStyle}></div>
        </div>
    )
}




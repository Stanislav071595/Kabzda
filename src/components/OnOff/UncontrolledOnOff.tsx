import React, {MouseEventHandler, useState} from 'react'


type OnOffType = {
    onChange: (on: boolean) => void
}

export const UncontrolledOnOff = (props: OnOffType) => {

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


    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <button style={onStyle} onClick={ onClicked }>On</button>
            <button style={offStyle} onClick={ offClicked }>Off</button>
            <div style={indicatorStyle}></div>
        </div>
    )
}




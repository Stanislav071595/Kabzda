import React from 'react'
import s from './OnOff.module.css'

type OnOffType = {
    value: boolean
}

export const OnOff = (props: OnOffType) => {
    return (
        <div>
            <OnOffCliker selected={props.value} />
        </div>
    )
}


type OnOffClikerType = {
    selected: boolean
}

const OnOffCliker = (props: OnOffClikerType) => {
        if (props.selected === true) {
            return (
                <div>
                    <button className={s.buttonOn}>On</button>
                    <button>Off</button>
                    <input type={"checkbox"} checked={true}/>
                </div>
            )
        } else {
            return(
                <div>
                    <button>On</button>
                    <button className={s.buttonOff}>Off</button>
                    <input type={"checkbox"}/>
                </div>

            )
        }
}
import React, {useState} from 'react';


type AccordionPropsType = {
    titleValue: string
    /*collapsed: boolean*/
}
export const UncontrolledAccordion = (props: AccordionPropsType) => {



    let [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={()=>{ setCollapsed(!collapsed)}}>TOGGLE</button>
            { !collapsed && <AccordionBody/>}
        </div>
    )


}

type AccordionTitlePropsType = {
    title: string
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log("AccordingTitle rendering")
    return (
        <h3>{props.title}</h3>
    )

}

const AccordionBody = () => {
    console.log("AccordingBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}



import React, {useState} from 'react';


type AccordionPropsType = {
    titleValue: string
    /*collapsed: boolean*/
}
export const UncontrolledAccordion = (props: AccordionPropsType) => {



    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=>{ setCollapsed(!collapsed)}}/>

            { !collapsed && <AccordionBody/>}
        </div>
    )


}

type AccordionTitlePropsType = {
    title: string
    onClick: ()=>void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log("AccordingTitle rendering")
    return (
        <h3 onClick={()=> {props.onClick()}}>{props.title}</h3>
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



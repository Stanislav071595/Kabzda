import React from 'react';


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}
const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}
             />
            {!props.collapsed && <AccordionBody/>}
        </div>
    )


}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log("AccordingTitle rendering")
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
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

export default Accordion;

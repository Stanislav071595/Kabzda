import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import React, {useState} from "react";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import { OnOff } from './components/OnOff/OnOff';
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";


const App = () => {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={"App"}>
            {/*<PageTitle title={"This is APP component"}/>
        <PageTitle title={"My friends"}/>
        <Rating value={3}/>*/}
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}


            <OnOff on={switchOn} onChange={setSwitchOn} />
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

            <UncontrolledAccordion titleValue={"Menu"} />
            {/*<UncontrolledAccordion titleValue={"Users"} />*/}

            {/*<UncontrolledRating/>*/}


        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}
const PageTitle = (props: PageTitlePropsType) => {
    return <h1>{props.title}</h1>

}


export default App;

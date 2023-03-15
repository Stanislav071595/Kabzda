import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import React from "react";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";


const App = () => {
    return (
        <div className={"App"}>
            {/*<PageTitle title={"This is APP component"}/>
        <PageTitle title={"My friends"}/>
        <Rating value={3}/>*/}
{/*            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            <OnOff />
            <UncontrolledAccordion titleValue={"Menu"} />
            <UncontrolledAccordion titleValue={"Users"} />

            <UncontrolledRating/>



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

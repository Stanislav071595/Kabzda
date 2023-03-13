import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Star from "./components/Star/Star";
import React from "react";
import {OnOff} from "./components/OnOff/OnOff";

const App = () => {
    return (
        <div>
            {/*<PageTitle title={"This is APP component"}/>
        <PageTitle title={"My friends"}/>
        <Star value={3}/>*/}
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Star value={0}/>
            <Star value={1}/>
            <Star value={2}/>
            <Star value={3}/>
            <Star value={4}/>
            <Star value={5}/>
            <OnOff value={false}/>

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

import React, {useState} from 'react';

type StarPropsType = {

}
export const UncontrolledRating = (props: StarPropsType) => {

    let [value, setValue] = useState(0)


    return (
        <div>
            <Star selected={value > 0}/><button onClick={ () => { setValue(1) } }>1</button>
            <Star selected={value > 1}/><button onClick={ () => { setValue(2) } }>2</button>
            <Star selected={value > 2}/><button onClick={ () => { setValue(3) } }>3</button>
            <Star selected={value > 3}/><button onClick={ () => { setValue(4) } }>4</button>
            <Star selected={value > 4}/><button onClick={ () => { setValue(5) } }>5</button>
        </div>
    )
}

type Star2PropsType = {
    selected: boolean;
}
const Star = (props: Star2PropsType) => {
    console.log("Rating rendering")
    return props.selected ? <span><b>star </b></span> : <span>star </span>

}

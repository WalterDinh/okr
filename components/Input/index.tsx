import React from "react";
import { Field, Form, Formik, FormikProps } from 'formik';


interface Props {
    style?: Object;
    placeholder?: string;
    onChange: () => void;
    icon?: React.ReactElement;
}

const Input: React.FC<Props> = (props) => {
    // const { style, placeholder, icon, onChange } = props;
    //! State
    //! Function
    //! Render

    // return (
    //     <div className="search-box" >
    //         <div className="icon">{icon}</div>
    //         <input className= 'input' style={style} placeholder={placeholder} onChange= {onChange}/>
    //     </div>
    // )
    console.log(props);

    
    return (
        <div className="search-box" >
            <div className="icon">{props.icon}</div>
            <input className='input' style={props.style} placeholder={props.placeholder} {...props} />
        </div>
    )
}

export default Input
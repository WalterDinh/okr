import React from "react";
import { Field, Form, Formik, FormikProps } from 'formik';


interface Props {
    style?: Object;
    placeholder: string;
    onChange: () => void;
    icon?: React.ReactElement;
    label?: string;
    field: any;
    form: any;
    type: string;
}

const Input: React.FC<Props> = (props: Props) => {

    const { field, form, label, icon } = props;
    const { name } = field;
    const { errors, touched } = form;


    const isErrors = errors[name] && touched[name];
    const errorMessage = errors[name];


    return (
        <>
            {label && <div className="label">{label}</div>}
            <div className="search-box" >
                {icon && <div className="icon">{props?.icon}</div>}
                {icon
                    ? <input className='input' style={props?.style} {...props} />
                    : <input className='input2' style={props?.style} {...props} />
                }
                {isErrors && <div className="error">{errorMessage}</div>}
            </div>
        </>
    )
}

export default Input
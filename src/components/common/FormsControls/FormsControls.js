import React from 'react';
import s from './FormsControls.module.css'
import {Field} from "redux-form";


const FormControls = ({input, meta: {touched, error}, children}) => {
    const isError = touched && error;
    return (
        <div className={s.formControl + ' ' + (isError ? s.error : "")}>
            <div>
                {children}
            </div>
            {isError && <span>{error}</span>}
        </div>
    )
};


export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControls {...props}><textarea className={s.textArea}{...props.input} {...restProps}/></FormControls>
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControls {...props}><input className={s.input} {...input} {...restProps}/></FormControls>

};

export const createField = (placeholder, type, name, component, validators, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder}
               type={type}
               name={name}
               component={component}
               validate={validators}
               {...props}/> {text}
    </div>
);
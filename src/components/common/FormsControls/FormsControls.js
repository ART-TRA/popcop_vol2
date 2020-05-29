import React from "react";
import style from "./FormsControls.module.css"

const FormControl = ({input, meta, child, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <div className={style.form + " " + (hasError ? style.error : "")}>
            {/*НЕ ЗАБЫВАТЬ ПРОКИДЫВАТЬ props ДАЛЬШЕ!!!!!!!!!!!!!!*/}
            {props.children}
            {/*если ошибка то отражается спан*/}
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>

        </div>
    )
};
export const Textarea = props => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
};

export const Input = props => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
};


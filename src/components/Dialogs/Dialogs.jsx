import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

let maxLength = maxLengthCreator(100);

const DialogsForm = props => {
  return(
      <form onSubmit={props.handleSubmit}>
          <Field component={Textarea} name="newMessageBody" validate={[required, maxLength]} placeholder='message text'/>
          <button>add message</button>
      </form>
  )
};

const DialogsReduxForm = reduxForm({form: 'dialogs_form'})(DialogsForm);

const Dialogs = (props)=>{
    let dialogs = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>); //из массива сообщений возвращается компонент DialogItem  с параметрами name, id
    let messages = props.messages.map(m => <Message text={m.text}/>); //из массива сообщений возвращается компонент Message  с параметром text

    let onSubmit = formData => {
        props.addMessage(formData.newMessageBody);
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialog_persons}>
                {dialogs}
            </div>
            <div className={style.messages}>
                {messages}
                <DialogsReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
};

export default Dialogs
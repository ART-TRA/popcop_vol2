import React from "react";
import style from './Dialogs.module.css'


const Dialogs = ()=>{
    return (
        <div className={style.dialogs}>
            <div className={style.dialog_persons}>
                <div className={`${style.dialog_peron} ${style.active}`}>Shepard</div>
                <div className={style.dialog_peron}>Garrus</div>
                <div className={style.dialog_peron}>Thain</div>
                <div className={style.dialog_peron}>Liara</div>
                <div className={style.dialog_peron}>Taly</div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Freeze</div>
                <div className={style.message}>You're busted buddy!</div>
                <div className={style.message}>I'm a cop</div>
            </div>
        </div>
    )
}

export default Dialogs
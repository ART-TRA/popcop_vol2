import React, {useEffect, useState} from "react";
import style from './ProfileInfo.module.css';

const ProfileStatusWithHooks = props => {
    //ЭТИ 3 СТРОКИ МОЖНО ЗАПИСАТЬ!!!
    // let stateWithSetState = useState(true); //изначальное значение state - false, возвращает массив из 2ух элементов
    // let editMode = stateWithSetState[0]; // 1е зн-е массива
    // let setEditMode = stateWithSetState[1]; // 2е зн-е, ф-ция, которая будет изм-ть 1е

    //ВОТ ТАК!!!!!!!!!!!!!
    let [editMode, setEditMode] = useState(false); //переключалка редактирования статуса
    let [status, setStatus] = useState(props.status); //сам статус и его отправка на сервер

    useEffect(()=>{
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true) //зн-е editMode можно менять с помощью setEditMode
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status); //отправка на сервер
    };
    const onStatusChange = e => {
        setStatus(e.currentTarget.value); //изм-е статуса

    };
    return (
        <div>
            {editMode
                ? <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                : <div onDoubleClick={activateEditMode}>{props.status || "no status"}</div>}
        </div>
    )
};

export default ProfileStatusWithHooks;
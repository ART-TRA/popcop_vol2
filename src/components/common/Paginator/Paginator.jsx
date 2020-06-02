import React, {useState} from "react";
import style from "./Paginator.module.css"
import arrow_down from "../../../assets/images/arrow_down.png";
import arrow_up from "../../../assets/images/arrow_up.png";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize); //кол-во страниц польз-лей
    let pages = [];
    for (let i = 1; i <= pagesCount; ++i) {
        pages.push(i);
    }

    let portionsCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    const prevPortion = () => {
        setPortionNumber(portionNumber - 1);
    };
    const nextPortion = () => {
        setPortionNumber(portionNumber + 1);
    };

    return (
        <div className={style.pageNumber}>
            {portionNumber > 1 && <button className={style.button} onClick={prevPortion}>
                <img src={arrow_up} alt=""/>
            </button>}

            {pages
                .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span className={currentPage === p && style.currentPage}
                                 key={p}
                                 onClick={() => onPageChanged(p)}>{p}</span>
                })}
            {portionNumber < portionsCount && <button className={style.button} onClick={nextPortion}>
                <img src={arrow_down} alt=""/>
            </button>}
        </div>
    )
};

export default Paginator

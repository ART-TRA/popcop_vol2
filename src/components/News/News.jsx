import React from "react";
import style from "./News.module.css"
import {addNewActionCreator, updateTextNews} from "../../redux/newsReducer";
import NewsItem from "./NewsItem/NewsItem";


const News = (props)=>{
   let newsItems = props.state.newsArr.map(n => <NewsItem text={n.text}/>);
    const updateNewText = (event)=>{
        let text = event.target.value;
        props.dispatch(updateTextNews(text));
    };
    const addNews = ()=> {
        props.dispatch(addNewActionCreator());
    };
    return (
        <div>
            <textarea onChange={updateNewText} value={props.state.newsText} placeholder='enter news'/>
            <button onClick={addNews}>add news</button>
            {newsItems}
        </div>
    )
}

export default News
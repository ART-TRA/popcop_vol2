//action type creators:
const addNews = 'ADD-NEWS';
const updateNews = 'UPDATE-NEWS';

//actionCreators:
export const addNewActionCreator = ()=>({type: addNews});

export const updateTextNews = (text)=>{
    return {type: updateNews, newsText: text}
};

let initialState = {
        newsArr: [
            // {id: 0, text: 'firstNews'}
        ],
        newsText: ''
};

//в reducer передаётся часть state и action, для первой отрисовки state передаётся в кач-ве значения по умолчанию
//возвращает изменнённый state
const news_reducer = (state = initialState, action)=>{
    switch (action.type) {
        case addNews:
            let news = {
                id: 1,
                text: state.newsText
            };
            state.newsArr.push(news);
            state.newsText = '';
            return state;
        case updateNews:
            state.newsText = action.newsText;
            return state;
        default:
            return state
    }
};

export default news_reducer
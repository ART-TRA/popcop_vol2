export const required = value => { //обязательное поле для заполнения
    if (value) return undefined;
    return "Field is required";
};

export const maxLengthCreator = maxLength => value => {
    if( value && value.length > maxLength) return `max length is ${maxLength} symbols`;
    return undefined;
};
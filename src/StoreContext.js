import React from "react";

const StoreContext = React.createContext(null);

export const Provider = (props) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
};

export default StoreContext

//чисто тренировочная бня, не требуется для дальнейшего
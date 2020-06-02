
export const updateObjectInArray = (stateObj, objProps, objId, newObjProps) =>{
    return stateObj.map(u => {
        if(u[objId] === objProps){
            return {...u, ...newObjProps}
        }
        return u
    })
};


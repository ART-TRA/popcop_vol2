import React from "react";
import Preloader from "../components/common/Preloader/Preloader";

export const withSuspense = Component => {
    return props =>{
        return <React.Suspense fallback={<Preloader/>}><Component {...props}/></React.Suspense>
    }
};

//или так, что короче
//export const withSuspense = Component => (<React.Suspense fallback={<Preloader/>}>{Component}/></React.Suspense>);

//но использовать всё равно не буду, так ка можно сразу обернуть компоненты в Suspense
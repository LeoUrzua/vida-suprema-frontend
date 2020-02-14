/* eslint no-use-before-define: 0 */  // --> OFF
import React, {createContext, useContext} from 'react';

type IsGranted = {
    attribute: string
    subjectGetter?: any
}

type ADMContextType = {
    isGranted: ()=> Boolean;
}

const admContext = createContext<ADMContextType>({
    isGranted(){
        return false;
    }
    }
);

// @ts-ignore
export const ProvideADM = ({children}) => {
    const adm = useProvideADM();
    return <admContext.Provider value={adm}>{children}</admContext.Provider>
};

export const useADM = () => {
    return useContext(admContext);
};

const useProvideADM = () => {

    const isGranted = () => {
        return false;
    };

    return {
        isGranted
    }
};

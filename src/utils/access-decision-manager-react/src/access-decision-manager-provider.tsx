/* eslint no-use-before-define: 0 */  // --> OFF
import React, {createContext, useContext} from 'react';
import {Voter} from '@wizeline/access-decision-manager/lib';


type ADMContextType = {
    isGranted: (attribute: string, subject: any)=> Boolean;
}

const admContext = createContext<ADMContextType>({
    isGranted(){
        return false;
    }
    }
);

// @ts-ignore
export const ProvideADM = ({voters, children}) => {
    const adm = useProvideADM(voters);
    return <admContext.Provider value={adm}>{children}</admContext.Provider>
};

export const useADM = () => {
    return useContext(admContext);
};

const useProvideADM = (voters: Voter[]) => {

    const isGranted = (attribute:any, subject:any) => {
        // console.log('params', voters, attribute, subject)
        return false;
    };

    return {
        isGranted
    }
};

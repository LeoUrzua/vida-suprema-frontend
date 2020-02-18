/* eslint no-use-before-define: 0 */  // --> OFF
import React, {createContext, useContext} from 'react';
import AccessDecisionManager, {Voter} from '@wizeline/access-decision-manager/lib';


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
    const accessDecisionManager = new AccessDecisionManager(null, voters, null);
    const adm = useProvideADM(accessDecisionManager);
    return <admContext.Provider value={adm}>{children}</admContext.Provider>
};

export const useADM = () => {
    return useContext(admContext);
};

const useProvideADM = (accessDecisionManager: AccessDecisionManager) => {

    const isGranted = (attribute:any, subject:any) => {
        const isGranted = accessDecisionManager.isGranted(attribute, subject);
        console.log('result: ', isGranted);
        return false;
    };

    return {
        isGranted
    }
};

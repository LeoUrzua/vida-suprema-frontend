import React, {createContext, useContext} from 'react';
import AccessDecisionManager, {Voter} from '@wizeline/access-decision-manager/lib';


type ADMContextType = {
    isGranted: (attribute: string, subject: any)=> Promise<Boolean>;
}

const admContext = createContext<ADMContextType>({
    isGranted(){
        return Promise.resolve(false);
    }
    }
);

export const ProvideADM = ({voters, children}: {voters: Voter[], children: any}) => {
    const accessDecisionManager = new AccessDecisionManager(null, voters, null);
    const adm = useProvideADM(accessDecisionManager);
    return <admContext.Provider value={adm}>{children}</admContext.Provider>
};

export const useADM = () => {
    return useContext(admContext);
};

const useProvideADM = (accessDecisionManager: AccessDecisionManager) => {

    const isGranted = async (attribute:any, subject:any) : Promise<Boolean> => {
        const isGranted = await accessDecisionManager.isGranted(attribute, subject);
        return isGranted;
    };

    return {
        isGranted
    }
};

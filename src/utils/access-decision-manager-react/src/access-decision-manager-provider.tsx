import React, {createContext, useContext} from 'react';
import AccessDecisionManager, {Voter} from '@wizeline/access-decision-manager';


type AccessDecisionManagerContextType = {
    useIsGranted: (attribute: string, subject: any)=> Promise<Boolean>;
}

const accessDecisionManagerContext = createContext<AccessDecisionManagerContextType>({
    useIsGranted(){
      return Promise.resolve(false);
    }
    }
);

export const AccessDecisionManagerProvider = ({voters, children}: {voters: Voter[], children: any}) => {
    const accessDecisionManager = new AccessDecisionManager(null, voters, null);
    const value = useAccessDecisionManagerProvider(accessDecisionManager);

    return <accessDecisionManagerContext.Provider value={value}>{children}</accessDecisionManagerContext.Provider>
};

export const useAccessDecisionManager = () => {
    return useContext(accessDecisionManagerContext);
};

const useAccessDecisionManagerProvider = (accessDecisionManager: AccessDecisionManager) => {

    const useIsGranted = async (attribute:any, subject:any) : Promise<Boolean> => {
        const isGranted = await accessDecisionManager.isGranted(attribute, subject);
        return Promise.resolve(isGranted);
    };

    return {
        useIsGranted
    }
};

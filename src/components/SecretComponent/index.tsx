import React from 'react'
import {
    useAccessDecisionManager,
} from '../../utils/access-decision-manager-react/src/access-decision-manager-provider';

const SecretComponent: React.FC = () => {
    const accessDecisionManager = useAccessDecisionManager();
    const userCanSee = accessDecisionManager.useIsGranted('EDIT_POST', 10);
    return(
        <div>
            <h1>Super secret</h1>
            {
                userCanSee &&
                    <h1>Content</h1>
            }
        </div>
    )
}

export default SecretComponent;
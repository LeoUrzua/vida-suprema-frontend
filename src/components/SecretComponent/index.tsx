import React from 'react'
import {useADM} from '../../utils/access-decision-manager-react/src/access-decision-manager-provider';
// import { useAuth } from '../../utils/access-decision-manager-react/use-auth';

const SecretComponent: React.FC = () => {
    // const auth = useAuth();
    // console.log(auth, typeof auth, auth.valueOf());
    const authz = useADM();
    console.log(authz);
    return(
        <div>
            <h1>Super secret</h1>
            { authz.isGranted() &&
            <p>some secrets</p>
            }
        </div>
    )
}

export default SecretComponent;
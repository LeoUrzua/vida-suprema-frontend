import React from 'react'
// import { useAuth } from '../../utils/access-decision-manager-react/use-auth';

const SecretComponent: React.FC = () => {
    // const auth = useAuth();
    // console.log(auth, typeof auth, auth.valueOf());
    return(
        <div>
            <h1>Super secret</h1>
            <p>some secrets</p>
        </div>
    )
}

export default SecretComponent;
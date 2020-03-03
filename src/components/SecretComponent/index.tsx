import React from 'react'
import useIsGranted from '../../utils/access-decision-manager-react/src/is-granted-hook';

const SecretComponent: React.FC =  () => {
    const canEdit =  useIsGranted('EDIT_POST', 10);
    // const userCanSee = canEdit;
    console.log('result: ', canEdit);

    return(
        <div>
            <h1>Super secret</h1>
            <h1>{JSON.stringify(canEdit)}</h1>
            {/*<h1>Value: <p>{userCanSee}</p></h1>*/}
            {
                canEdit &&
                    <h1>Content</h1>
            }
        </div>
    )
}

export default SecretComponent;